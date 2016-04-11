# Eclipse/PDE Example - Text Scrambling Service #

  1. download and unzip the [example](http://peaberry.googlecode.com/files/PeaberryExample-1.0.zip)
  1. import the contents into Eclipse as existing projects
  1. open **peaberry.target** and set it as the target platform:
> > ![![](http://lh3.ggpht.com/mcculls/SI9u873Yg9I/AAAAAAAAA_o/CEl3JijDgtc/s400/1_load_target_platform.png)](http://lh3.ggpht.com/mcculls/SI9u873Yg9I/AAAAAAAAA_o/CEl3JijDgtc/s800/1_load_target_platform.png)
  1. right-click on **peaberry.launch** and select Run As... -> peaberry:
> > ![![](http://lh4.ggpht.com/mcculls/SI9u881dwpI/AAAAAAAAA_w/YYGeevhRI88/s400/2_run_test_launcher.png)](http://lh4.ggpht.com/mcculls/SI9u881dwpI/AAAAAAAAA_w/YYGeevhRI88/s800/2_run_test_launcher.png)
  1. you should see both bundles start and produce scrambled output:
> > ![![](http://lh4.ggpht.com/mcculls/SI9u9KSo7PI/AAAAAAAAA_4/HpR7L8FYtYg/s400/3_see_test_run.png)](http://lh4.ggpht.com/mcculls/SI9u9KSo7PI/AAAAAAAAA_4/HpR7L8FYtYg/s800/3_see_test_run.png)
  1. try stopping and starting the service bundle using the console

### Useful Console Commands ###

```
ss       -  list all bundles
stop n   -  stop bundle #n
start n  -  start bundle #n
diag n   -  diagnose bundle
```

# Installing the OSGi binding module #

```
 // provides bindings for the current bundle context + OSGi service registry
 Injector injector = Guice.createInjector(osgiModule(bundleContext), ...);
```

# Fluent API Examples #

The following static imports were used to simplify the examples

```
import static org.ops4j.peaberry.Peaberry.osgiModule;
import static org.ops4j.peaberry.Peaberry.service;

import static org.ops4j.peaberry.util.TypeLiterals.export;
import static org.ops4j.peaberry.util.TypeLiterals.iterable;

import static org.ops4j.peaberry.util.Attributes.names;
import static org.ops4j.peaberry.util.Filters.ldap;
```

Injecting a stock quote service:

```
 @Inject
 StockQuote quote;
 ...
 bind(StockQuote.class).toProvider(service(StockQuote.class).single());
```

Injecting many stock quote services:

```
 @Inject
 Iterable<StockQuote> quotes;
 ...
 bind(iterable(StockQuote.class)).toProvider(service(StockQuote.class).multiple());
```

Exporting an implementation as a stock quote service:

```
 @Inject
 // the service can be controlled by the Export handle
 Export<StockQuote> exportedQuote;
 ...
 // the service is exported at injection time
 bind(export(StockQuote.class)).toProvider(service(myQuoteImpl).export());
```

Applying a custom filter to find a specific service:

```
 service(StockQuote.class).filter(ldap("(Currency=GBP)")).single()
```

Applying custom attributes to an exported service:

```
 service(myQuoteImpl).attributes(names("Currency=GBP")).export()
```

(the `ldap` and `names` utility methods are from `org.ops4j.peaberry.util`)

You can also decorate services with additional behaviour:

```
 service(StockQuote.class).decoratedWith(someDecoratorImpl).single()
```

or ask for them to be injected directly, instead of using a dynamic proxy:

```
 service(StockQuote.class).single().direct()
```

similarly, if you don't want to bother with an Export handle when exporting:

```
 service(myQuoteImpl).export().direct()
```

You can use your own registry implementation, instead of the default binding:

```
 service(StockQuote.class).in(myRegistryImpl).single()
```

And you can now actively watch for changes in the services you inject:

```
 bind(StockQuote.class).toProvider(service(StockQuote.class).out(new AbstractWatcher<StockQuote>() {

  @Override
  protected StockQuote adding(Import<StockQuote> service) {
   // the returned object is used in the modified and removed calls
   StockQuote instance = service.get();
   System.out.println("ADDING:" + instance);
   return instance;
  }

  @Override
  protected void modified(StockQuote instance, Map<String, ?> attributes) {
   System.out.println("MODIFIED:" + instance);
  }

  @Override
  protected void removed(StockQuote instance) {
   System.out.println("REMOVED:" + instance);
  }
 }).multiple());
```

AbstractWatcher is a utility class to make implementing ServiceWatcher a bit easier. Note that you'll only receive events for services when the watched binding is actually used in your bundle, such as by injecting an Iterable

&lt;StockQuote&gt;

.