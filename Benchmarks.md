# OSGi service proxy microbenchmark #

This is a very simple (perhaps simplistic!) microbenchmark that calculates how much overhead on average the given OSGi service proxy adds to each method call. It measures how long the raw implementation takes and subtracts this from however long the proxied service took.

_It does not take into account the flexibility/features of each proxy implementation, but merely looks at the overhead cost._

  1. download and unzip the service proxy [microbenchmark](http://peaberry.googlecode.com/files/OSGiServiceProxyTest-1.0-rc1.zip)
  1. import the contents into Eclipse as an existing project
  1. open **OSGiServiceProxyTest.target** and set it as the target platform:
  1. right-click on **OSGiServiceProxyTest.launch** and select Run As... -> OSGiServiceProxyTest
  1. you should see results similar to this:

```
osgi> Testing OSGi service proxy overhead...

Guice-Peaberry:	  649.00 ns/call
Spring-DM:	 3718.00 ns/call
```

Which shows a lot less overhead when using the peaberry service proxy.

# Basic bundle footprint #

This is another simple 'benchmark' where we look at the size of the minimum bundle set required to run the above testcase.

_Of course Spring-DM provides a lot of additional functionality over Guice-Peaberry, but we're interested in the minimum footprint possible._

```
   8K com.springsource.org.aopalliance-1.0.0.jar
 632K guice-snapshot-20090105.jar
 176K peaberry-1.0-rc1.jar
```
**816K Guice-Peaberry 1.0-rc1**

```
   8K com.springsource.org.aopalliance-1.0.0.jar
  24K com.springsource.slf4j.api-1.5.6.jar
   8K com.springsource.slf4j.nop-1.5.6.jar
  20K com.springsource.slf4j.org.apache.commons.logging-1.5.6.jar
 320K spring-aop-2.5.6.jar
 480K spring-beans-2.5.6.jar
 468K spring-context-2.5.6.jar
 280K spring-core-2.5.6.jar
 352K spring-osgi-core-1.2.0-m2.jar
 116K spring-osgi-extender-1.2.0-m2.jar
  36K spring-osgi-io-1.2.0-m2.jar
```
**2112K Spring-DM 1.2.0-m2**

As you can see Guice-Peaberry takes up less than half the space of the smallest Spring-DM setup.