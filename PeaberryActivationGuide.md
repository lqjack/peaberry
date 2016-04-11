# Introduction #

Every Guice application has to be bootstrapped by a small amount of code where the Injector is created and the first few objects are wired together. The goal of Peaberry Activation is to remove the need to write this bit of bootstrap code. In this way Guice users can work in a completely declarative way only having to code their `Modules`.
Currently Peaberry Activation works only under OSGi.

# Setup #

Just install and start the Peaberry Activation bundle in your OSGi framework. The bundle follows the [extender](http://www.osgi.org/blog/2007/02/osgi-extender-model.html) model and will pick up your Peaberry bundles and process them on sight.

If you plan to use the [Dynamic Configuration](#Dynamic_Configuration.md) feature you must also install an implementation of the OSGi ConfigurationAdmin service.

# Overview #

Under OSGi the Peaberry bootstrap code is contained in a `BundleActivator`. This bundle activator is coded in a repeatable pattern:

```
public Activator implements BundleActivator {
  /*
   * Bundle roots
   */
  @Inject
  private Export<Service1> export1;
  ...
  @Inject
  private Export<ServiceN> exportN;

  @Inject 
  private Singleton1 singleton1;
  ...
  @Inject
  private SingletonN singletonN;

  public void start(BundleContext bc) {
    /* Setup Guice */
    Injector inj = Guice.createInjector(Peaberry.osgiModule(bc), new Module1(), ..., new ModuleN());

    /* Create bundle content */
    inj.injectMembers(this);

    /* Activate content. Call the relevant start()/open() methods */
    singletonM.start();
    ...
    singletonK.start();
  }

  public void stop(BundleActivator bc) {
    /* Deactivate content. Call the relevant stop()/close()/dispose() methods */
    export1.unput();
    ...
    exportN.unput();
    singletonM.stop();
    ...
    singletonK.stop();

    /* Detach dead content */
    export1 = null;
    ...
    exportN = null;
    singleton1 = null;
    ...
    singletonN = null;
  }
}
```

The activator is specified in the bundle manifest:
```
...
Bundle-Activator: com.acme.Activator
...
```

The OSGi framework requires that the activator class has a default constructor. It instantiates the activator and calls the `start()/stop()` methods to activate and deactivate the bundle. Peaberry Activation captures this pattern and implements it for you. All you need to do is to supply the Guice definitions of your singletons, exports and dynamic configuration values as a regular Guice `Module`.

# Usage #

## Bootstrap Configuration ##

Peaberry Activation replaces the default OSGi bootstrap hook with a Guice bootstrap module. Rather than implement a `BundleActivator` you need to implement a _single_ `Module` and declare it inside the bundle manifest like this:

```
...
Bundle-Module: com.acme.Config
...
```

As with the activator the bootstrap module has to have a _default constructor_.

```
public class Config extends AbstractModule {
  @Override
  protected void configure() {
    bind(export(HelloImpl.class)).toProvider(service(HelloImpl.class).export());
    bind(HelloImpl.class).in(Singleton.class);
  }
}
```

When you need many Guice modules you can install them from the single bootstrap module like this:

```
public class Config extends AbstractModule {
  @Override
  protected void configure() {
    install(new Module1());
    install(new ModuleN());
  }
}
```

The Peaberry Activation extender will instantiate the bootstrap module and pass it to a Guice `Injector`. It will than use the Guice introspection SPI to discover all `Export<T>` bindings, all `Singleton` scoped bindings, and all bindings to a dynamic configuration `Provider`. These three sets form the _bundle roots_. The roots are instantiated and started upon activation and stopped and dropped upon deactivation. I.e. we follow the standard startup and shutdown sequences outlined in the `BundleActivator` template shown above. Currently there are two minor restrictions we must follow:

  * We can't relay on just-in-time bindings for the bundle roots. Every root needs to be explicitly declared in some module.

  * We can't relay on _direct_ Peaberry exports. Every singleton that needs to be exposed as a service must have a companion `Export<T>` binding as shown in the example above.

## Lifecycle for the Singletons ##

If some of the bundle singletons need additional activation or deactivation we can annotate any parameter-less method of the respective singleton class as follows:

```
public HelloImpl implements Hello {

  public void hello(String who) {
    System.out.println("Hello " + who + "!");
  }

  @Start
  public void start() {
    System.out.println("Hello service online");
  }

  @Stop
  public void stop() {
    System.out.println("Hello service offline");
  }
}
```

The `@Start` and `@Stop` annotations are located in the `org.ops4j.peaberry.activation` package. Notice that if a method is annotated but has parameters it will be ignored. In a future version an error will be emitted for such methods.

We can annotate as many methods as we like. All `@Start` methods will be called in the order in which they are defined in the bundle class. The same goes for the `@Stop` methods.

## ConfigurationAdmin Support ##

PeaberryActivation can track dynamic configurations supplied by the OSGi [ConfigurationAdmin](http://www.osgi.org/javadoc/r4v42/org/osgi/service/cm/ConfigurationAdmin.html) service and inject their elements to `@Named` injection points.

The API to do this is similar to the API used to setup dynamic service proxies. The `org.ops4j.peaberry.activation.Configurables` facade must be used to create a `Provider` for each dynamic value:

```
public class Config extends AbstractModule {
  @Override
  protected void configure() {
    ...
    bind(Integer.class).annotatedWith(named("test")).toProvider(
      Configurables.configurable(Integer.class).from("test.pid").named("test.key"));
  }
}
```

Here we map an `Integer` named `test` to the dynamic value named `test.key` from the configuration with PID `test.pid`. It is expected that the object supplied from the ConfiguratinAdmin service will be of the same type as the type of the binding. In this case PeaberryActivation expects that under `test.key` it will discover an object of type `Integer`. PeaberryActivation does not yet support automatic conversions. Also notice that you can not use the `Binder.bindConstant()` method for dynamic values because it does not allow the use of `Providers`.

## Shorthand Peaberry Syntax ##

The Peaberry philosophy to extending Guice is to implement different kinds of `Provider`. This design gives maximum flexibility and allows us to combine Peaberry with any other Guice extension in a nice orthogonal way. However this design also leads to lots of repetition in the Guice configuration code:

```
class Config extends AbstractModule {
  @Override
  protected void configure() {
    /* Import */
    bind(Service.class).toProvider(service(Service.class).single());

    /* Import Multiple */
    bind(iterable(Service.class)).toProvider(service(Service.class).multiple());

    /* Export */
    bind(export(ServiceImpl.class)).toProvider(service(ServiceImpl.class).export());

    /* Configure */
    bind(Integer.class).annotatedWith(named("test")).toProvider(
      configurable(Integer.class).from("test.pid").named("test.key"));
  }
}
```

To ease the burden PeaberryActivation provides a set of simple wrappers of the regular Guice `Binder` and `AbstractModule` that allow us to re-write the definitions above like this:

```
class Config extends PeaberryActivationModule {
  @Override
  protected void configure() {
    /* Import */
    bindService(Service.class).single();

    /* Import Multiple */
    bindService(Service.class).multiple();

    /* Export */
    bindService(ServiceImpl.class).export();

    /* Configure */
    bindConfigurable(Integer.class).annotatedWith(named("test")).from("test.pid").named("test.key");
  }
}
```

Notice that rather than `AbstractModule` now we extend `PeaberryActivationModule`. These definitions are exactly equivalent to the long versions above:

  * The first definition will bind a dynamic proxy of type `Service` to a single-style service import.
  * The second will bind a dynamic proxy of type `Iterable<Service>` to a multiple-style service import.
  * The third line exports `ServiceImpl` under all interfaces it implements. (I.e. creates an `Exprot<ServiceImpl>` object behind the scenes).
  * The fourth will bind an `Integer` annotated with `@Named("test")` to a dynamic value found in configuration `test.pid` under key `test.key`.

For configurables there is also a default syntax that will bind the value under the same name as the corresponding key found in the dynamic configuration:
```
bindConfigurable(Integer.class).from("test.pid").named("test.key");
```

This will bind an `Integer` under the name `@Named("test.key")` found in configuration with PID `test.pid` under key `test.key`.

The initial method of each short-hand definition returns a DSL builder that implements some of the `Provider`-building interfaces found in `org.ops4j.peaberry.Peaberry` or `org.ops4j.peaberry.activation.Configurables`. The difference is that instead of returning the built `Provider` instance from the final method call this builder will directly bind that instance into Guice and return `null`.

You can freely mix the long and short forms in the same `configure()` method since `PeaberryActivationModule extends AbstractModule`.

The shorthand Peaberry DSL can be found in the `org.ops4j.peaberry.activation.util` package.

# Operation #

The PeaberryActivation extender takes each bundle it processes through the following phases.

## Preparation ##

### When ###

  * The PeaberryActivation extender detects a bundle entering the `ACTIVE`.

### Sequence ###

  1. Try to read the `Bundle-Module` manifest header. If the header is not found no further processing will be done.
  1. The bundle bootstrap module is instantiated and introspected.
  1. All needed OSGi configurations are identified and a single `ManagedService` is registered to track each one. These services are registered on behalf of the user bundle via it's `BundleContext`.
  1. If all tracked configurations are available the bundle is [activated](#Activation.md). Otherwise the bundle sits in `stealth  mode` waiting for the required configurations to appear.

## Activation ##

### When ###

  * All tracked configurations become available.
  * During [Reactivation](#Reactivation.md).

### Sequence ###

  1. The dynamic configuration values are loaded and bound.
  1. The singletons are created.
  1. The singletons are activated. E.g. the `@Start` methods of each singleton are called in the order in which they are declared. You can not count on the order in, which the singletons are activated. The order followed is the same as order in, which the singleton bindings are returned by the Guice introspection SPI.
  1. The exports are created, and with this their respective singletons are published in the OSGi service registry.

This sequence guarantees that your bundle's internals will be fully set up before they are exposed to control flow either from OSGi clients or from your own `@Start` methods.

## Deactivation ##

### When ###

  * During bundle shutdown. E.g. when PeaberryActivation detects the bundle has entered the `STOPPING` state.
  * During [Reactivation](#Reactivation.md).
  * When the PeaberryActivation extender is stopped. Without the extender a bundle relying on PeaberryActivation can not function properly so it is best to shut it down.

### Sequence ###
  1. The exports are brought down. Notice that this is a merely a gesture of courtesy - after this step threads can still be trapped, while traversing your bundle. What this step guarantees is that no new threads will enter.
  1. The singletons are deactivated. Again you should now count on the order of deactivation. The `@Stop` methods in your singletons should be thread-safe and properly crash any threads that might be trapped inside the singleton object at the time of shutdown. The shutdown step should transform the internals of your bundle into a fail-fast ball of objects that will reject any callers with no other side effects.
  1. The singletons and exports are detached (i.e. left to the garbage collector). After the final trapped threads leave this ball the internals of your bundle will should become unreachable and be claimed by the GC. I.e. watch out for static references.

## Reactivation ##

### When ###

  * A tracked OSGi configuration changes.

### Sequence ###

  1. Deactivate. Execute the [deactivation](#Deactivation.md) procedure.
  1. Activate. Execute the [activation](#Activation.md) procedure.

This sequence is roughly equivalent to a _bundle restart_ - we only skip the Preparation phase. This means the entire bundle structure and all runtime state will be scrapped and a new singletons and exports will be instantiated and injected with the new dynamic configuration. In this way we can inject the dynamic configuration values as if they were the traditional set of _static constants_. I.e. we work with normal `@Named` injection points, and program without any special constructs and additional thread safety issues.