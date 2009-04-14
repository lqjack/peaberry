/**
 * Copyright (C) 2009 Stuart McCulloch
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

package org.ops4j.peaberry.eclipse;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;

/**
 * OSGi {@link BundleActivator} that cleans up and removes registry listeners.
 * 
 * @author mcculls@gmail.com (Stuart McCulloch)
 */
public final class Activator
    implements BundleActivator {

  public void start(final BundleContext bundleContext) {}

  public void stop(final BundleContext bundleContext) {
    ((EclipseRegistry) EclipseRegistry.eclipseRegistry()).cleanup();
  }
}