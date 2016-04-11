http://code.google.com/p/google-guice/issues/detail?id=94

## Overview ##

The [ClassLoaderHook](http://peaberry.googlecode.com/svn/trunk/patch/ClassLoaderHook.txt) patch adds the ability to intercept classloading inside Guice, specifically the classloading used when dealing with reflection and dynamic proxies.

## Requirements ##

This patch is needed when using Guice inside containers that don't use the classic "parent-delegation" classloader model, such as OSGi, because the internal CGLIB classes may not be visible to the client classloader. (Clients could be forced to manually import these internal packages, but this would make them tightly coupled to Guice internals.)

## Design ##

There are three parts to this patch:

  1. All code generation has been moved to a new class called **`GuiceCodeGen`**.
  1. In the **`InjectorImpl`** it now removes the local context threadlocal instead of nulling the context. This change is required to fix a class unloading bug, where dangling local contexts would keep classes alive.
  1. ~~A new threadlocal has been added to store a classloader hook, which can intercept requests for classloaders during code generation. The default hook simply returns the client type's classloader.~~
  1. A default classloader hook is provided that supports proxy unloading and non-delegating classloaders (like in OSGi)

~~Non-delegating containers can then set per-thread classloader hooks to automatically bridge between the client's class space and the internal Guice classes needed during code generation.~~

## Alternative Designs ##

I did consider passing the classloader hook into the injector, but the amount of interfaces that needed to be changed made this a really expensive change.

Using the Thread **`ContextClassLoader`** (TCCL) was another option, which would avoid the need for a new threadlocal. However, the danger is that this could easily be reset by client code, and it lacks a level of detail provided by the classloader hook.