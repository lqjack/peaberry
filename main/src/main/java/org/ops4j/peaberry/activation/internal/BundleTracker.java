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
package org.ops4j.peaberry.activation.internal;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.ops4j.peaberry.activation.Constants;
import org.osgi.framework.Bundle;
import org.osgi.framework.BundleContext;
import org.osgi.framework.BundleEvent;
import org.osgi.framework.SynchronousBundleListener;

/**
 * The bundle lifecycle tracking core of the extender.
 * 
 * @author Todor Boev (rinsvind@gmail.com)
 */
public class BundleTracker
    implements SynchronousBundleListener {

  private final BundleContext bc;
  private final Map<Long, BundleActivation> handlers;

  public BundleTracker(final BundleContext bc) {
    this.bc = bc;
    this.handlers = new HashMap<Long, BundleActivation>();
  }

  public synchronized void open() {
    for (final Bundle bundle : bc.getBundles()) {
      switch (bundle.getState()) {
      case Bundle.ACTIVE:
        try {
          start(bundle);
        } catch (Exception e) {
          /* Log this somehow */
          e.printStackTrace();
        }
        break;
      }
    }

    bc.addBundleListener(this);
  }

  public synchronized void close() {
    bc.removeBundleListener(this);

    for (final BundleActivation handler : handlers.values()) {
      handler.stop();
    }
    handlers.clear();
  }

  public synchronized void bundleChanged(final BundleEvent event) {
    final Bundle bundle = event.getBundle();

    switch (event.getType()) {
    case BundleEvent.STARTED:
      start(bundle);
      break;

    case BundleEvent.STOPPED:
      if (stop(bundle)) {
        clean(bundle);
      }
      break;
    }
  }

  private void start(final Bundle bundle) {
    /* The module is mandatory */
    String moduleHeader = (String) bundle.getHeaders().get(Constants.BUNDLE_MODULE);
    if (moduleHeader == null) {
      return;
    }
    moduleHeader = moduleHeader.trim();  
    
    /* Configurations are optional */
    final String configHeader = (String) bundle.getHeaders().get(Constants.BUNDLE_CONFIG);
    final List<String> configList;
    if (configHeader != null) {
      configList = Arrays.asList(configHeader.trim().split(","));
    } else {
      configList = Collections.emptyList();
    }

    final BundleActivation handler = new BundleActivation(bundle, moduleHeader, configList);
    handlers.put(bundle.getBundleId(), handler);
    
    handler.start();
  }

  private boolean stop(final Bundle bundle) {
    final BundleActivation handler = handlers.get(bundle.getBundleId());
    if (handler == null) {
      return false;
    }
    
    handler.stop();
    return true;
  }

  private void clean(final Bundle bundle) {
    handlers.remove(bundle.getBundleId());
  }
}