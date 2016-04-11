http://code.google.com/p/google-guice/issues/detail?id=49

## Overview ##

The [BindingFactory](http://peaberry.googlecode.com/svn/trunk/patch/BindingFactory.txt) patch supports dynamic handling of missing bindings during construction of the injector. Once the injector has been created, bindings are immutable.

## Requirements ##

Binding factories provide missing bindings on-demand. They avoid the need for repeated boilerplate code in modules, and provide a safe mechanism for extending Guice.

For example, the Peaberry extension library supports injection of dynamic service proxies. Bindings from types to proxies are added whenever a binding is missing, where the member being injected has the @Service annotation.

This means that clients can take advantage of OSGi services by simply annotating injection points with @Service, without having to manually bind these services in their modules.

## Design ##

The API for a binding factory is very simple:

```
public interface BindingFactory<B> {

  /**
   * Supplies bindings for missing dependencies that extend {@code B}
   * 
   * @param <T> a type of dependency this factory can supply
   * @param dependency the missing dependency that needs a binding
   * @param linkedBindingBuilder a partially constructed binding
   * @return true if this factory could supply a binding
   */
  <T extends B> boolean bind(Dependency<T> dependency,
      LinkedBindingBuilder<T> linkedBindingBuilder);
}

public interface Binder {
  // ...snip...

  /**
   * Adds a binding factory to provide missing dependencies matched by a matcher.
   *
   * @param dependencyMatcher matches missing dependencies the binding
   *        factory should attempt to satisfy. For example: {@code any()}.
   * @param bindingFactory factory that can produce bindings on request
   */
  <T> void addBindingFactory(
      Matcher<Dependency<? extends T>> dependencyMatcher,
          BindingFactory<T> bindingFactory);
}
```

The patch provides new classes to record registered binding factories, and adds a missing dependency handler to the injector. This handler is only set to use the binding factories when the binding commands are being processed - once this phase is complete, the bindings are immutable.

Each time the injector reports a missing dependency, the handler will check for a binding factory whose matcher matches the dependency. It gives the factory a new **`LinkedBindingBuilder`**, which the factory can use to complete the binding (and return _true_) or ignore (and return _false_). If a binding factory returns false, the injector will try the next matching factory. Once a factory returns true, or no more factories match, the injector will recheck the dependency, and throw an error if it is still missing.

## Binding Factory lifetime ##

Binding factories are only used during **creation** of the injector. This means that they will not provide bindings for types that are only discovered when the injector is used, for example via `injectMembers`. While this does limit the possibilities of binding factories, it also avoids potential problems that could occur if bindings were introduced after the injector was created.

## Alternative Designs ##

It is possible to support a similar feature with the current Guice library, by creating a custom binding module for _every_ class that wanted to use OSGi services. The custom module would need to introspect the class to determine which members needed OSGi services, effectively duplicating the introspection code already inside Guice (either that, or the developer would need to manually bind each service).