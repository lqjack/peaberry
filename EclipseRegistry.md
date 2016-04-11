### Adding the EclipseRegistry to your module bindings ###

The latest release of peaberry ([1.1](http://peaberry.googlecode.com/files/peaberry-1.1.zip)) has a new variant of the `osgiModule` method that accepts a valid bundle context and a list of service registries. These alternative registries are considered when looking up or watching for services, but **not** when adding a service. You can use this to mix-in the **peaberry.eclipse** extension registry implementation.

To add lookup of Eclipse extensions to your Guice module, instead of using:
```
binder.install(osgiModule(context));
```
you would use:
```
import static org.ops4j.peaberry.eclipse.EclipseRegistry.eclipseRegistry;
// ...
binder.install(osgiModule(context, eclipseRegistry()));
```
If you wanted to lookup extensions without any OSGi services you can use:
```
binder.bind(ServiceRegistry.class).toInstance(eclipseRegistry());
```
assuming you haven't already installed an `osgiModule` in the same binder.

### Binding to Eclipse Extensions ###

Just like with OSGi services, extensions are looked up using the `ServiceRegistry` API, which takes a service class and an attribute filter. The EclipseRegistry implementation uses the following approach to map classes to extensions and their configuration elements:

  * if the service class has the `@ExtensionBean` annotation this is used to get the extension point id, otherwise a lower-case version of the fully-qualified class name is assumed to be the id. The `@ExtensionBean` annotation also has a flag which lets you treat each extension registered under the extension point as a single aggregate of its configuration elements, rather than a collection of homogeneous elements.

  * each configuration element under the named extension point (or each extension, if the aggregate flag is enabled) is compared against the given service class.

  * if the element has a `class` attribute this is used to load the named implementation using the contributing plug-in's classloader, and the class checked to see if it's compatible with the original service class.

  * if it's compatible the `createExecutableExtension` method is used to create an instance.

  * otherwise it's assumed the service class is a bean interface with methods that should be mapped onto sub-elements and attributes via a generated proxy. The bean processor maps methods starting with `is...`, `get...`, and `create...` and uses the rest of the method name as the attribute or nested element tag. You can also explicitly map methods to particular names using the `@MapName` annotation, or map them to text content using `@MapContent`.

  * the bean processor automatically maps configuration values to the right type, and also lets you access the underlying `IConfigurationElement` as well as the contributing `Bundle`. Methods that map onto nested elements can either return another bean, or an array of beans.

  * the result of any `is...` or `get...` method is cached, as these are assumed to be constant without side-effects. On the other hand any `create...` methods are never cached, as each call is expected to create a new instance.

  * each configuration element also provides the following special service attributes:

| @id          | unique extension id |
|:-------------|:--------------------|
| @label       | label               |
| @contributor | contributor         |
| @namespace   | namespace           |
| @point       | extension point id  |
| name()       | XML element name    |
| text()       | XML element content |

> in addition to the XML attributes already declared on the configuration element.

### How does this relate to the Eclipse Riena Project? ###

The [Riena](http://wiki.eclipse.org/Riena_Project) project uses similar annotations, at least in name, and a similar bean approach. You can re-use the `@MapName` and `@MapContent` annotations from Riena, because peaberry uses reflection to search for map annotations. However, instead of using `@ExtensionInterface` we've introduced our own annotation called `@ExtensionBean` because we need to be able to specify the extension point id and flag aggregated extension beans.

We also follow a similar bean mapping [process](http://wiki.eclipse.org/Riena_Getting_Started_with_injecting_services_and_extensions#Injecting_Extensions), so people used to Riena dependency injection process should feel at home.

### But how do I inject dependencies into extensions? ###

The **peaberry-eclipse** bundle also provides a factory class to help inject extension instances using Guice. This factory is documented [here](GuiceExtensionFactory.md).

### Example please! ###

A detailed example is in the works, for now there is a solitary [testcase](http://code.google.com/p/peaberry/source/browse/#svn/trunk/extensions/eclipse/test) you can take a look at.