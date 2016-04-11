_This work was influenced by Martin Lippert's [SpringExtensionFactory](http://martinlippert.blogspot.com/2008/05/dependency-injection-for-extensions.html)._

### What is the GuiceExtensionFactory? ###

The [GuiceExtensionFactory](http://code.google.com/p/peaberry/source/browse/trunk/extensions/eclipse/src/org/ops4j/peaberry/eclipse/GuiceExtensionFactory.java) is an `IExecutableExtensionFactory` that creates an injected extension based on the class named in the adapter data section. If the data section is empty the class is assumed to be in the `id` attribute. The factory searches the `org.ops4j.peaberry.eclipse.modules` extension for `Module`s belonging to the same plug-in and uses them to create a new `Injector`. This injector creates the injected extension and is then cached so it can be re-used for other extensions in the same plug-in.

To use the factory put it in front of your class name in the extension XML. Or replace your class with the factory and put your class in the `id` attribute instead. Because the implementation will be injected based on the bindings you could even replace your class name with one of its interfaces, and that interface will then be used to lookup the correct implementation.

Here's a more detailed walkthrough, based on the example RCP Mail Template:
```
<extension point="org.eclipse.ui.views">
  <view name="Message"
        allowMultiple="true"
        icon="icons/sample2.gif"
        class="example.ViewImpl"
        id="example.view" />
</extension>
```
becomes:
```
<extension point="org.eclipse.ui.views">
  <view name="Message"
        allowMultiple="true"
        icon="icons/sample2.gif"
        class="org.ops4j.peaberry.eclipse.GuiceExtensionFactory:example.ViewImpl"
        id="example.view" />
</extension>

<extension point="org.ops4j.peaberry.eclipse.modules">
  <module class="example.ViewModule" />
</extension>
```
Here's the same example with the class in the `id` attribute:
```
<extension point="org.eclipse.ui.views">
  <view name="Message"
        allowMultiple="true"
        icon="icons/sample2.gif"
        class="org.ops4j.peaberry.eclipse.GuiceExtensionFactory"
        id="example.ViewImpl" />
</extension>

<extension point="org.ops4j.peaberry.eclipse.modules">
  <module class="example.ViewModule" />
</extension>
```
and again, this time using an interface instead of the implementation:
```
<extension point="org.eclipse.ui.views">
  <view name="Message"
        allowMultiple="true"
        icon="icons/sample2.gif"
        class="org.ops4j.peaberry.eclipse.GuiceExtensionFactory:org.eclipse.ui.IViewPart"
        id="example.view" />
</extension>

<extension point="org.ops4j.peaberry.eclipse.modules">
  <module class="example.ViewModule" />
</extension>
```

### How do I use peaberry with the GuiceExtensionFactory? ###

Basic peaberry bindings to support lookup of services from the OSGi service registry and Eclipse extension registry are automatically installed by the factory, which effectively does this:
```
binder.install(Peaberry.osgiModule(contributorContext, EclipseRegistry.eclipseRegistry()));
```
So you only need to add your own custom bindings to the `org.ops4j.peaberry.eclipse.modules` extension.