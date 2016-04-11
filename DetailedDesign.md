_(earlier designs are captured [here](OldDesign.md))_

## Main Concepts ##

### Service Registry ###

The **peaberry** project is all about injecting dynamic services using Guice, so the first step is to design an API that will retrieve such services. _(note that we won't be using Guice to inject the service itself, but rather Guice will inject a proxy that uses the lookup API to delegate calls to actual services.)_

Here's an attempt at a simple service lookup API:

```
public interface ServiceRegistry {

  /**
   * Lookup services from the registry, constrained by the given filter.
   * 
   * @param clazz expected service interface
   * @param filter service attribute filter
   * 
   * @return ordered sequence of imported services, most recommended first
   */
  <T> Iterable<Import<T>> lookup(Class<T> clazz, AttributeFilter filter);
}
```

where the attribute filter is not tied to any specific filter language:

```
public interface AttributeFilter {

  /**
   * Tests whether or not this filter matches the given service attributes.
   * 
   * @param attributes service attributes
   * 
   * @return true if the given attributes match this filter, otherwise false
   */
  boolean matches(Map<String, ?> attributes);
}
```

This design was influenced by OSGi, which uses service types and attribute filters to find matching services. Although here we allow any type of filtering, not just LDAP expressions. From my experience this works very well, and I believe it's flexible enough to support other types of service registry.

The registry returns a sequence of imported services for a given query - this means we can use the same API call for providing single services, as well as sequences of services. Registry implementations can then provide lazy sequences, only expanding the search as and when the service iterator is called.

But what exactly is an _imported_ service, why not return an `Iterable<T>`? Well, if we just return direct instances then the registry won't be able to know when we're actively using them (unless the registry provides its own proxies of `T` to track method invocations, which could mean many different implementations of the same proxy algorithm).

So instead we define an interface that lets us record our use of the service:

```
public interface Import<T> {

  /**
   * Start using the imported service instance.
   * 
   * @return service instance
   * 
   * @throws ServiceUnavailableException if the service is unavailable
   */
  T get();

  /**
   * Get the attributes associated with the service.
   * 
   * @return current attribute map, null if the service is unavailable
   */
  Map<String, ?> attributes();

  /**
   * Stop using the imported service instance.
   */
  void unget();
}
```

which is then proxied by the **peaberry** codebase to look like a `T`.

### Proxy Generation ###

The latest codebase uses [ASM](http://asm.objectweb.org) to generate optimized proxies for imported services. The approach goes something like this:

```
try {
  T instance = handle.get();
  return INVOKE(instance, method, arguments);
} finally {
  try {
    handle.unget();
  } catch (Exception e) {}
}
```

NOTE: if you're making repeated calls to the same service object and want to avoid the overhead of `get()` and `unget()` on every call then you can use _decoration_ to reduce this. Service decoration is described [here](DetailedDesign#Service_Decoration.md).

### Service Injection ###

So how do we go from a service lookup which gives us `Iterable<Import<T>>` to something we can inject into a `T` or `Iterable<T>` member? Well, **peaberry** can create `Provider<T>` or `Provider<Iterable<T>>` instances that do the following:

  1. query the appropriate registry
  1. apply decoration to each import
  1. create a proxy for each import

We use provider instances because we need to customize the provider for each request. They're built using a so-called "fluent" API that lets you customize each stage, and choose whether to inject multiple or single services.

Injecting multiple services like `Iterable<T>` is straightforward, and can be done lazily by unrolling the service iterator as the client unrolls the injected iterator.

Injecting a single service `T` is a actually bit harder than you might think. We can't just take the first imported service and proxy that, because the first service in the list will change over time. We need to somehow create an `Import<T>` that always checks the first service in the list and returns that:

```
Import<T> lookup = new Import<T>() {
  public T get() {
    return handles.iterator().next().get();
  }

  public void unget() {
    handles.iterator().next().unget();
  }
};
```

However, there's a problem with this code - the import handle used to `get()` the service might not be the same one used to `unget()` it. We need to record the handle used for each call, which is tricky because we can't save it in the stack. One option would be to use a `ThreadLocal` to maintain our own context stack, but this causes additional overhead to each call.

After much prototyping, I finally found a solution that works without a `ThreadLocal`:

```
/**
 * Provide an {@link Import} that dynamically delegates to the best service but
 * also tracks its use (even across multiple threads) so that unget() is always
 * called on the same handle as get() was originally.
 * 
 * The solution below uses the same handle until no threads are actively using
 * the injected instance. This might keep a service in use for a little longer
 * than expected when there is heavy contention, but it doesn't require use of
 * any thread locals or additional context stacks.
 * 
 * @author mcculls@gmail.com (Stuart McCulloch)
 */
final class ConcurrentImport<T>
    implements Import<T> {

  private final Iterable<Import<T>> handles;

  private Import<T> handle;
  private T instance;
  private int count;

  public ConcurrentImport(final Iterable<Import<T>> handles) {
    this.handles = handles;
  }

  // need barrier on entry...
  public synchronized T get() {
    count++;
    if (null == handle) {
      // first valid handle may appear at any time
      final Iterator<Import<T>> i = handles.iterator();
      if (i.hasNext()) {
        handle = i.next();
        instance = handle.get(); // only called once
      }
    }
    return instance;
  }

  public synchronized Map<String, ?> attributes() {
    return null == instance ? null : handle.attributes();
  }

  public synchronized void unget() {
    // last thread to exit does the unget...
    if (0 == --count && null != handle) {
      instance = null;
      handle.unget();
      handle = null;
    }
  }
}
```

it basically guarantees that overlapping threads using the same injected instance will use the same service instance (as soon as one becomes available). The import handle is only "ungot" when the last thread exits. This has the happy side-effect of improving service consistency.

NOTE: the first few threads may not find a valid import handle, if no service is available at the time. That's why we let any thread try and retrieve the handle. One gotcha is that calls to `get()` and `unget()` must be balanced to maintain the count, which is why the proxy uses a finally block to ensure `unget()` is called.

### Service Decoration ###

Using import handles brings another benefit - you can easily decorate services as they're retrieved from the registry, by wrapping your own import handle around the original. In order to do this, you need to provide an implementation of the following interface:

```
public interface ImportDecorator<S> {

  /**
   * Decorate the given imported service.
   * 
   * @param service imported service handle
   * @return decorated service handle
   */
  <T extends S> Import<T> decorate(Import<T> service);
}
```

and configure the service provider to use it by calling the `decoratedBy()` method. For example:

```
public class FooDecorator implements ImportDecorator<Foo> {

  public <T extends Foo> Import<T> decorate(final Import<T> handle) {
    return new Import<T>() {
      public T get() {
        return new MyFoo(handle.get());
      }

      public Map<String, ?> attributes() {
        return handle.attributes();
      }

      public void unget() {
        handle.unget();
      }
    };
  }
}
```

NOTE: `decoratedBy` can take a `Key`, which is used to retrieve the implementation at injection time, or an `ImportDecorator` instance.

The `util` package provides an `AbstractDecorator` to help reduce the amount of code needed to decorate imports. It also provides methods to chain decorators together, as well as create "sticky" decorators that always use (i.e. stick to) the same service until the service disappears - at which point you can choose to stick to a new service.

### Direct Services ###

Another new feature I added recently is the ability to inject the _actual_ service instance rather than a proxy, enabled by the `direct()` method. So there's no overhead in calls to the service, but it does mean the service is **static** and won't change over time.

This might be useful to people who want to use OSGi (or a similar framework) to assemble or wire their application, but don't need the full dynamics of the service registry. Direct services can be decorated, just like dynamic services - but the decoration is only applied once at injection time.

NOTE: you could always use `Injector.getInstance(...)` or `Injector.injectMembers(...)` to programmatically update direct services, while keeping the performance benefits, because the registry is still queried on each injection request.

### Service Registration ###

OK, so we can inject services - but how about getting our own implementations into the service registry? Here's an attempt at what I call a "service watcher", which is basically something that can receive services:

```
public interface ServiceWatcher<S> {

  /**
   * Add the given service to this watcher.
   *
   * @param service imported service handle
   * @return exported service handle, null if the watcher is not interested
   */
  <T extends S> Export<T> add(Import<T> service);
}
```

This interface is separate from `ServiceRegistry` because not all watchers of services may be query-able. However a registry is a watcher, so it should extend it:

```
public interface ServiceRegistry extends ServiceWatcher //...
```

When you export a service implementation to a watcher, you get back an export handle:

```
public interface Export<T> {

  /**
   * Replace the exported service with the given instance.
   * 
   * @param instance service instance
   */
  void put(T instance);

  /**
   * Update the attributes associated with the exported service.
   * 
   * @param attributes service attributes
   */
  void attributes(Map<String, ?> attributes);

  /**
   * Remove the exported service from the {@link ServiceWatcher}.
   */
  void unput();
}
```

Note how this is the mirror of an `Import`. It would be also useful to get the actual service implementation from the export handle, so why not re-use the import interface:

```
public interface Export<T> extends Import<T> //...
```

Which I think makes sense, if you're used to the semantics of OSGi.

Following the same approach as before, **peaberry** can create `Provider<Export<T>>` instances, customized using a fluent API. The service implementation is specified by passing in the appropriate `Key` which is looked up via the injector at injection time, or by passing in an existing instance, and exported to the appropriate registry. This means you can also programmatically export services at any time, by using `Injector.getInstance(...)` for the relevant exported handle, or by calling the provider directly.

### Service Outjection ###

Service outjection is where we notify an interested party whenever a matching service appears, is modified, or disappears (it can also be described as watching for services). We already have a type that can receive services, the `ServiceWatcher`, so why not re-use this for outjection/watching:

```
public interface ServiceRegistry
    extends ServiceWatcher<Object> {

  // ...lookup is like polling...

  /**
   * Watch for services in the registry, constrained by the given filter.
   *
   * @param clazz expected service interface
   * @param filter service attribute filter
   * @param watcher the watcher that should receive any matching services
   *
   * @throws UnsupportedOperationException if watching is not supported
   */
  <T> void watch(Class<T> clazz, AttributeFilter filter, ServiceWatcher<? super T> watcher);
}
```

The `util` package provides an `AbstractWatcher` to help reduce the code needed to write your own service watcher. It's based on the OSGi `ServiceTrackerCustomizer` design, but it is not OSGi specific.

The **peaberry** DSL takes an optional service watcher when building service proxies, this is passed to the registry using the same filter and class that's used to perform the lookup for the service proxy. This means you can lazily inject a service while also outjecting it to a given watcher to actively look for changes (to initialize resources, etc).