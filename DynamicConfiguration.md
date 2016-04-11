# Introduction #

Configuration is a crosscutting concern. This means that a single body of configuration items is typically needed at points all over the code. Some items are shared, others are used in one spot only. As such configuration is an ideal candidate for dependency injection. Guice has facilities that allow the user to take a property file and inject it's elements all over the code at `@Named("property.key")` injection points.

This is perfectly adequate for programs that is configured once at startup. However when we need to reconfigure the program as it runs this mechanism is no longer sufficient. A dynamic configuration framework must support a much richer set of requirements than a static one.

# Requirements #

Here is a list of possible requirements. The idea is to use them as means to compare suggested designs.

  * Fine configuration granularity
Just like with static `@Named` items dynamic config items must be individually injectable. Each class should be able to cherry-pick only the items it needs.

  * Fine update granularity
We would like the impact of a dynamic configuration update to be localized to the places in the program, which consume the relevant configuration items.

  * Atomic update
Often items from the same configuration are related. This relation must be preserved during a configuration swap. I.e. at no time should the program observe a hybrid configuration consisting of parts of the new and the old configurations. E.g. we can have a `min` and `max` values with the invariant that `min < max`. To keep the program correct at all times we must swap both `min` and `max` in one atomic step.

  * Dynamic update
Often the configured code regularly reads a particular config item as it goes about it's business. If the value of that item changes between two loops the code must pick the new value the next time it reads the config item. We want to pick the new set of values on the fly: i.e do not restart some piece of the program, and _do not loose runtime state_.

  * Static update
Some times the configured code must react to the change of a config item on the spot. An example for this is an accept loop that is reconfigured to listen on another port. It is very desirable that as soon as the config changes the old server socket gets closed and the accept loop is restarted on a socket opened on the new port. Here some part of the program must be stopped, new config information must be injected and the part be re-started. Here we actually want to _reset some part of the runtime state_.

  * Simplicity
Use all the standard injection techniques: inject to setters, constructors, fields. It would be best if we can use the `@Named` parameters and let Guice deal with the rest.

  * Safety
Configuration swaps happen concurrently to the application control flow. It would be best if we can hide this complexity from the application. It should not care about synchronization or atomicity of config swaps.

# Suggested Designs #

## Configuration as a transactional swap ##

The idea is to use some of Clojure's principles: the entire config is a single composite immutable value. The value is referenced by some kind of thread-safe "box". We inject the box everywhere we need some piece of the configuration. The various config elements are accessed by dereferencing this value (i.e. popping it out of the "box") and than browsing through it's content. When a config swap comes the content of the box is swapped in one atomic step. In this way we get "Atomic update" and "Dynamic update". However we loose "Simplicity" because there is no way to enforce the pop-read convention.

Evaluation:
  * `(-)` Fine configuration granularity
  * `(+)` Fine update granularity
  * `(+)` Atomic update
  * `(+)` Dynamic update
  * `(-)` Static update
  * `(-)` Simplicity
  * `(+)` Safety

## Configuration as bundle lifecycle ##

Here we treat the config update as a bundle lifecycle event and restart the bundle. Than we can pass the config items at good old `@Named` injection points. Upon config update we stop everything, drop the bundle internals, create new ones against the the new config, and start them. Restarting the bundle will destroy any runtime state it has accumulated during it's operation. This means that bundles that accumulate lot's of runtime state will need to either live with it's loss or store/load it as part of their lifecycle. It is not certain how much of an issue this really is. Normally we use stateless bundles or if they are stateful the load/store is a normal requirement. Probably this is a blocker issue for transient state that can't be restored like communication sessions.

Evaluation:
  * `(+)` Fine configuration granularity
  * `(-)` Fine update granularity
  * `(+)` Atomic update
  * `(-)` Dynamic update
  * `(+)` Static update
  * `(+)` Simplicity
  * `(+)` Safety

## Configuration as component lifecycle ##

Here we fold the re-configuration into the future lifecycle extension. A config update is a lifecycle event for all components that consume config items. We have two options here:

  * Use `Injector.injectMembers()` to re-inject the configuration to setter methods. We choose setter methods because they can be called many times during the lifecycle of the object. We can control the atomicity of the swap with multi-parameter setters. E.g. `setBounds(int min, int max)`. If an object is short-lived and does not care about config updates it can take config items via the constructor.

  * We use start/stop methods to restart the object. This time all config items are passed as parameters to the `start()` method. Again we have atomicity by using many parameters. This essentially mimics the bundle restart approach but at a finer granularity.

The major drawback of this solution is that we need a full blown lifecycle extension, which we currently do not have.

Evaluation:
  * `(+)` Fine configuration granularity
  * `(+)` Fine update granularity
  * `(+)` Atomic update
  * `(-)` Dynamic update
  * `(+)` Static update
  * `(+)` Simplicity
  * `(-)` Safety