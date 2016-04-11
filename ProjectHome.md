# Peaberry has moved to [ops4j/peaberry on GitHub](https://github.com/ops4j/peaberry). #

**[peaberry 1.3](http://search.maven.org/remotecontent?filepath=org/ops4j/peaberry/build/peaberry/1.3/peaberry-1.3-dist.zip)** is now available on Maven Central.

The peaberry project is an extension library for [Google-Guice](http://code.google.com/p/google-guice/) that supports dependency injection of dynamic services. It provides OSGi integration out of the box, and has plug-in support for other registry-based service frameworks. It ships as an OSGi bundle that can be dropped into any `R4` framework, such as Apache Felix or Eclipse/Equinox. You can also use peaberry outside of OSGi.

[![](http://asm.objectweb.org/images/poweredbyasm.gif)](http://asm.objectweb.org/)

**current status**

Injection of Eclipse extensions and a simple factory for injecting extensions is now [available](http://code.google.com/p/peaberry/wiki/EclipseRegistry) in the 1.1 release.

peaberry 1.1 has also been successfully tested on the [Google App Engine](http://code.google.com/appengine/) with a non-OSGi ServiceRegistry<br>( various people are still investigating getting OSGi frameworks running on the App Engine ).<br>
<br>
peaberry 1.1.1 can be used with the <a href='http://newton.codecauldron.org'>Newton/Infiniflow</a> distributed OSGi framework by enabling native filters:<br>
<pre><code>    -Dorg.ops4j.peaberry.filter.native=true<br>
</code></pre>
( See this in practice with the recently uploaded Newton/peaberry <a href='http://code.google.com/p/peaberry/wiki/NewtonExample'>example</a>! ).<br>
<br>
<b>future plans</b>

Currently investigating lifecycle/component models and injection of configuration details.