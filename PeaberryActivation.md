# Introduction #

Every Guice application has to be bootstrapped by a small amount of code where the Injector is created and the first few objects are wired together. The goal of Peaberry Activation is to remove the need to write this bit of bootstrap code. In this way Guice users can work in a completely declarative way only having to code their `Modules`.
Currently Peaberry Activation works only under OSGi.

# Setup #

Just install and start the Peaberry Activation bundle in your OSGi framework. The bundle follows the [extender](http://www.osgi.org/blog/2007/02/osgi-extender-model.html) model and will pick up your Peaberry bundles and process them on sight.

# Usage #

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

The OSGi framework requires that the activator class has a default constructor. It instantiates the activator and calls the `start()/stop()` methods to activate and deactivate the bundle.

Peaberry Activation replaces the default OSGi bootstrap hook with a Guice bootstrap module. Rather than implement a `BundleActivator` you need to implement a single `Module` and declare it inside the bundle manifest like this:

```
...
Bundle-Module: com.acme.Config
...
```

As with the activator the bootstrap module has to have a default constructor.

```
public class Config extends AbstractModule {
  @Override
  protected void configure() {
    bind(export(HelloImpl.class)).toProvider(service(HelloImpl.class).export());
    bind(HelloImpl.class).in(Singleton.class);
  }
}
```

When more than one Guice modules are needed they can be installed from the bootstrap module like this:

```
public class Config extends AbstractModule {
  @Override
  protected void configure() {
    install(new Module1());
    install(new ModuleN());
  }
}
```

The Peaberry Activation extender will instantiate the bootstrap module and pass it to a Guice `Injetor`. It will than use the Guice introspection SPI to discover all `Export<T>` bindings and all `Singleton` scoped bindings. These form the _bundle roots_. The roots are instantiated and activated upon bundle startup and deactivated and dropped upon bundle shutdown. I.e. we follow the standard startup and shutdown sequences outlined in the `BundleActivator` template shown above. Currently there are two minor restrictions we must follow:

  * We can't relay on just-in-time bindings for the bundle roots. Every root needs to be explicitly declared in some module.

  * We can't relay on direct Peaberry exports. Every singleton that needs to be exposed as a service must have a companion `Export<T>` binding as shown in the example above.

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

We can annotate as many methods as we like. All `@Start` methods will be called in the order in which they are defined in the bundle class. Same goes for the `@Stop` methods.

# Order and Correctness #

## Startup ##

  * Upon startup first all singletons are created.
  * Than they are activated in no particular order - or rather the order in, which their bindings are returned by the Guice introspection SPI is followed.
  * Finally the exports are created, and with this their respective singletons are published in the OSGi service registry.

This sequence guarantees that your bundle's internals will be fully set up before they are exposed to control flow either from OSGi clients or from your own `@Start` methods.

## Shutdown ##

  * First the exports are brought down. Notice that this is a merely a gesture of courtesy - after this step threads can still be trapped traversing your bundle. What this step guarantees is that no new threads will enter.
  * Than the singletons are deactivated - again you should now count on the order of deactivation. The `@Stop` methods in your singletons should be thread-safe and properly crash any threads that might be trapped inside at the time of shutdown. The shutdown step should transform the internals of your bundle into a fail-fast ball of objects that will reject any callers with no other side effects.
  * Finally all singletons and exports are detached (i.e. left to the garbage collector). After the final trapped threads crash the internals of your bundle will be claimed by the GC.