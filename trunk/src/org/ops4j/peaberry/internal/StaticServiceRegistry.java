/**
 * Copyright (C) 2008 Stuart McCulloch
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

package org.ops4j.peaberry.internal;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

import org.ops4j.peaberry.ServiceRegistry;

/**
 * Provides a {@link Static} {@link ServiceRegistry}.
 * 
 * @author stuart.mcculloch@jayway.net (Stuart McCulloch)
 */
public final class StaticServiceRegistry
    implements ServiceRegistry {

  private final ServiceRegistry registry;

  private volatile Collection<Object> services;

  public StaticServiceRegistry(ServiceRegistry registry) {
    this.registry = registry;
  }

  @SuppressWarnings("unchecked")
  public Iterator lookup(Class type, String filter) {

    if (services == null) {
      synchronized (this) {
        if (services == null) {

          services = new ArrayList();
          for (Iterator i = registry.lookup(type, filter); i.hasNext();) {
            services.add(i.next());
          }
        }
      }
    }

    return services.iterator();
  }
}
