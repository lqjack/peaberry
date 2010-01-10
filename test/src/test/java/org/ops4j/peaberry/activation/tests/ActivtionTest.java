/**
 * Copyright (C) 2009 Todor Boev
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.ops4j.peaberry.activation.tests;

//import static com.google.inject.matcher.Matchers.*;
import static junit.framework.Assert.*;
import static org.ops4j.pax.exam.CoreOptions.*;
import static org.ops4j.pax.swissbox.tinybundles.core.TinyBundles.*;
import static org.ops4j.peaberry.activation.Constants.*;
import static org.ops4j.peaberry.activation.tests.Matchers.*;
import static org.ops4j.peaberry.activation.tests.TinyBundleProvisionOption.*;
import static org.osgi.framework.Constants.*;

import java.util.Dictionary;
import java.util.Hashtable;
import java.util.concurrent.Callable;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.ops4j.pax.exam.Option;
import org.ops4j.pax.exam.junit.Configuration;
import org.ops4j.pax.exam.junit.JUnit4TestRunner;
import org.ops4j.peaberry.activation.examples.config.ConfigRoot;
import org.ops4j.peaberry.activation.examples.export.Hello;
import org.ops4j.peaberry.activation.examples.singleton.SingletonRoot;
import org.osgi.framework.Bundle;
import org.osgi.framework.BundleException;
import org.osgi.framework.InvalidSyntaxException;
import org.osgi.service.cm.ConfigurationAdmin;

/**
 * @author rinsvind@gmail.com (Todor Boev)
 */
@RunWith(JUnit4TestRunner.class)
public class ActivtionTest extends InvocationTracking {
  private static final String ACTIVATION_MODULE = 
    "org.ops4j.peaberry.extensions.peaberry.activation";
  private static final String EXPORT_MODULE = 
    packageOf(org.ops4j.peaberry.activation.examples.export.Config.class);
  private static final String SINGLETON_MODULE = 
    packageOf(org.ops4j.peaberry.activation.examples.singleton.Config.class);
  private static final String CONFIG_MODULE = 
    packageOf(org.ops4j.peaberry.activation.examples.config.Config.class);
  
  @Configuration(extend = PeaberryConfiguration.class)
  public static Option[] configure() {
    return options(
      mavenBundle().groupId("org.ops4j.peaberry.extensions").artifactId("peaberry.activation").versionAsInProject().noStart(),
      mavenBundle().groupId("org.apache.felix").artifactId("org.apache.felix.configadmin").versionAsInProject(),
           
      /* Build some test bundles on the fly */
      tinyBundle()
       .set(BUNDLE_SYMBOLICNAME, EXPORT_MODULE)
       .set(EXPORT_PACKAGE, EXPORT_MODULE)
       .set(BUNDLE_MODULE, org.ops4j.peaberry.activation.examples.export.Config.class.getName())
       .add(org.ops4j.peaberry.activation.examples.export.Config.class)
       .add(org.ops4j.peaberry.activation.examples.export.Hello.class)
       .add(org.ops4j.peaberry.activation.examples.export.HelloImpl.class)
       .build(withBnd())
       .noStart(),
      tinyBundle()
       .set(BUNDLE_SYMBOLICNAME, SINGLETON_MODULE)
       .set(EXPORT_PACKAGE, SINGLETON_MODULE)
       .set(BUNDLE_MODULE, org.ops4j.peaberry.activation.examples.singleton.Config.class.getName())
       .add(org.ops4j.peaberry.activation.examples.singleton.Config.class)
       .add(org.ops4j.peaberry.activation.examples.singleton.SingletonRoot.class)
       .build(withBnd())
       .noStart(),
      tinyBundle()
       .set(BUNDLE_SYMBOLICNAME, CONFIG_MODULE)
       .set(EXPORT_PACKAGE, CONFIG_MODULE)
       .set(BUNDLE_MODULE, org.ops4j.peaberry.activation.examples.config.Config.class.getName())
       .set(BUNDLE_CONFIG, "test.pid")
       .add(org.ops4j.peaberry.activation.examples.config.Config.class)
       .add(org.ops4j.peaberry.activation.examples.config.ConfigRoot.class)
       .add(org.ops4j.peaberry.activation.examples.config.ConfigRoot.class)
       .build(withBnd())
       .noStart());
  }
  
  private Bundle exportRoot;
  private Bundle singletonRoot;
  private Bundle configRoot;
  private Bundle activation;

  @Before
  public void setup() 
    throws BundleException {
    
    exportRoot = getBundle(EXPORT_MODULE);
    singletonRoot = getBundle(SINGLETON_MODULE);
    configRoot = getBundle(CONFIG_MODULE);
    activation = getBundle(ACTIVATION_MODULE);
  }

  @Test
  public void testExportRoot() 
    throws BundleException {
    
    activation.start();
    assertNull(getReference(Hello.class));
    
    exportRoot.start();
    assertEquals(exportRoot, getReference(Hello.class).getBundle());
  }

  @Test
  public void testSingletonRoot() 
    throws BundleException {
    
    activation.start();
    
    singletonRoot.start();
    assertInvoked(trackedClass(SingletonRoot.class), method("start"));

    singletonRoot.stop();
    assertInvoked(trackedClass(SingletonRoot.class), method("stop"));
  }

  @Test
  public void testExtenderRestart() 
    throws BundleException, InvalidSyntaxException {
    
    /* Extended bundles are active and waiting */
    exportRoot.start();
    assertNull(getReference(Hello.class));

    singletonRoot.start();
    assertNotInvoked(trackedClass(SingletonRoot.class), method("start").or(method("stop")));

    /* Extender starts - must activate the bundles */
    activation.start();
    assertEquals(1, getReferenceList(Hello.class).length);
    assertInvoked(trackedClass(SingletonRoot.class), method("start"));

    /* Extender stops - must deactivate the bundles */
    activation.stop();
    assertNull(getReference(Hello.class));
    assertInvoked(trackedClass(SingletonRoot.class), method("stop"));

    resetInvocations();
    
    /*
     * Extender starts again - must activate the bundles. No trace of previous
     * activations must exist.
     */
    activation.start();
    assertEquals(1, getReferenceList(Hello.class).length);
    assertInvoked(trackedClass(SingletonRoot.class), method("start"));
  }
  
  @Test
  public void testBasicConfiguration() 
    throws Exception {
    
    /* Make a test configuration */
    @SuppressWarnings("unchecked")
    final Dictionary<String, Object> props = new Hashtable(); 
    props.put("a", 1);
    props.put("b", 2);
    props.put("c", 3);
    
    final ConfigurationAdmin cm = getService(ConfigurationAdmin.class);
    cm.getConfiguration(ConfigRoot.CONF_PID, configRoot.getLocation()).update(props);
    
    /* Consume it and wait for the startup to happen */
    waitInvocation(trackedClass(ConfigRoot.class), method("start"), 10000, new Callable<Void>() {
      public Void call() throws Exception {
        activation.start();
        configRoot.start();
        return null;
      }
    });
    
    /* Check the result */
    assertInvoked(trackedClass(ConfigRoot.class), method("setA", int.class), 1);
    assertInvoked(trackedClass(ConfigRoot.class), method("setB", int.class), 2);
    assertInvoked(trackedClass(ConfigRoot.class), method("setC", int.class), 3);
  }
  
  @Test
  public void testLateConfiguration() 
    throws Exception {
    
    /* Start the configuration consumer */
    activation.start();
    configRoot.start();
    
    /* Check that activation is now performed */
    assertNotInvoked(trackedClass(ConfigRoot.class), method("start"));
    
    /* Create the configuration and wait for the startup to happen */
    waitInvocation(trackedClass(ConfigRoot.class), method("start"), 10000, new Callable<Void>() {
      public Void call() throws Exception {
        @SuppressWarnings("unchecked")
        final Dictionary<String, Object> props = new Hashtable(); 
        props.put("a", 1);
        props.put("b", 2);
        props.put("c", 3);
        
        final ConfigurationAdmin cm = getService(ConfigurationAdmin.class);
        cm.getConfiguration(ConfigRoot.CONF_PID, configRoot.getLocation()).update(props);
        return null;
      }
    });
    
    /* Check that activation is now performed */
    assertInvoked(trackedClass(ConfigRoot.class), method("setA", int.class), 1);
    assertInvoked(trackedClass(ConfigRoot.class), method("setB", int.class), 2);
    assertInvoked(trackedClass(ConfigRoot.class), method("setC", int.class), 3);
  }
  
  @Test
  public void testConfigurationChange() 
    throws Exception {
    
    /* Start the configuration consumer */
    activation.start();
    configRoot.start();
    
    /* Create the configuration and wait for the startup to happen */
    waitInvocation(trackedClass(ConfigRoot.class), method("start"), 10000, new Callable<Void>() {
      public Void call() throws Exception {
        @SuppressWarnings("unchecked")
        final Dictionary<String, Object> props = new Hashtable(); 
        props.put("a", 1);
        props.put("b", 2);
        props.put("c", 3);
        
        final ConfigurationAdmin cm = getService(ConfigurationAdmin.class);
        cm.getConfiguration(ConfigRoot.CONF_PID, configRoot.getLocation()).update(props);
        return null;
      }
    });
    
    /* Check that activation is now performed */
    assertInvoked(trackedClass(ConfigRoot.class), method("setA", int.class), 1);
    assertInvoked(trackedClass(ConfigRoot.class), method("setB", int.class), 2);
    assertInvoked(trackedClass(ConfigRoot.class), method("setC", int.class), 3);
    
    resetInvocations();
    
    /* Change the configuration and wait for a restart */
    waitInvocation(trackedClass(ConfigRoot.class), method("start"), 10000, new Callable<Void>() {
      public Void call() throws Exception {
        @SuppressWarnings("unchecked")
        final Dictionary<String, Object> props = new Hashtable(); 
        props.put("a", 4);
        props.put("b", 5);
        props.put("c", 6);
        
        final ConfigurationAdmin cm = getService(ConfigurationAdmin.class);
        cm.getConfiguration(ConfigRoot.CONF_PID, configRoot.getLocation()).update(props);
        return null;
      }
    });
    
    /* Check that the new configuration is set */
    assertInvoked(trackedClass(ConfigRoot.class), method("setA", int.class), 4);
    assertInvoked(trackedClass(ConfigRoot.class), method("setB", int.class), 5);
    assertInvoked(trackedClass(ConfigRoot.class), method("setC", int.class), 6);
  }
}
