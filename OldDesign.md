# peaberry 0.4 #

## Main Concepts ##

### Service Registry ###

The peaberry project is all about injecting dynamic services using Guice, so the first step is to design an API that will retrieve such services. _(note that we won't be using Guice to inject the service itself, but rather Guice will inject a proxy that uses the lookup API to delegate calls to actual services.)_

So here's an attempt at a very simple service lookup API:

```
public interface ServiceRegistry {

  /**
   * Lookup service instances from registry, constrained by LDAP filter.
   * 
   * @param type expected service type
   * @param filter RFC-1960 (LDAP) filter
   * @return sequence of service instances
   */
  <T> Iterator<T> lookup(Class<? extends T> type, String filter);
}
```

This design was influenced by OSGi, which uses service types and LDAP filters to find matching services. From my experience this works very well, and I believe it's flexible enough to support other types of service registry. _(the LDAP filter should provide a standard mechanism for supporting additional constraints.)_

The registry always returns an iterator for a given query - this means we can use the same API call for providing single services, as well as sequences of services. Registry implementations can then provide lazy iterators, only expanding the search as and when the service iterator is called.

### @Service ###

So we have our dynamic service registry - how do we relate that to injection points?

One way would be to use Guice to explicitly bind the service registry lookup (via some sort of generated Provider wrapper) to a specific binding type. For example:

```
// unary service binding
binder.bind(MyService.class).toProvider(serviceProvider(registry, MyService.class));

// multiple service binding
TypeLiteral<Iterable<MyService>> multiple = new TypeLiteral<Iterable<MyService>>() {};
binder.bind(multiple).toProvider(serviceProvider(registry, multiple));
```

The `serviceProvider` builder call needs to know the service type to pass onto the registry lookup, which is why the type literal (or class) argument appears twice in the above examples.

_(note I did consider using a service provider type, instead of the eagerly created instance shown above - but the user would then need to create a sub-type, just like with the `TypeLiteral`, to avoid erasure of the service type information, and it quickly becomes messy and error prone.)_

But what if we don't want to have to explicitly write such binding statements? Well, following on examples from Guice (`@ImplementedBy`) we could use an annotation:

```
@Service
MyService unary;

@Service
Iterable<MyService> multiple;
```

along with the [BindingFactory](Patch_BindingFactory.md) patch to dynamically add the necessary bindings when we create the injector. This way we could add additional `@Service` metadata to constrain the lookup call:

```
public @interface Service {

  /**
   * RFC-1960 (LDAP) filter
   */
  String value() default "";

  /**
   * Custom service API
   */
  Class<?>[] interfaces() default {};
}


@Service("QoS=high")
MyService unary;
```

so users can add their own filters and API constraints to service injection points.

### @Leased ###

Following on from `@Service` I decided to add another annotation that modifies the behavior of the injected service proxy. This started off as an example, but is so useful I made it part of the public API:

```
public @interface Leased {
  int seconds();

  static final int FOREVER = -1;
}
```

When you lease a service, any calls made during the lease period will always go to the same service instance **without** (re)checking the service registry. With an infinite lease period, the service proxy effectively becomes a static injection point (albeit a lazy one).

This is very similar to Guice **scopes**, except that this applies to the service registry rather than the injection point. You can add your own registry scoping by wrapping the registry passed into the `serviceProvider` builder call.

### Programmatic use of @Service and @Leased ###

`@Service` and `@Leased` are good for annotating static metadata about services, but what if you want to program the service filter, rather than hard-code it in the source?

Well annotation types are interfaces, so you can write your own implementations of them. I've added a couple of simple builder calls to peaberry that let you create instances of `@Service` and `@Leased` at runtime:

```
public static Service service(String filter, Class<?>... interfaces);

public static Leased leased(int seconds);
```

and extended the `serviceProvider` call to accept such instances:

```
binder.bind(MyService.class).toProvider(
    serviceProvider(registry, MyService.class,
        service("QoS=high"), leased(1)));
```

which means you can have as much control over service injection programmatically as you do declaratively.