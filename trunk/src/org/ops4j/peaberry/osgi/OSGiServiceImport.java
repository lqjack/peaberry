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

package org.ops4j.peaberry.osgi;

import static org.osgi.framework.Constants.SERVICE_ID;
import static org.osgi.framework.Constants.SERVICE_RANKING;

import java.util.Map;

import org.ops4j.peaberry.Import;
import org.ops4j.peaberry.ServiceUnavailableException;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;

/**
 * {@code Import} implementation based on an OSGi {@code ServiceReference}.
 * 
 * @author mcculls@gmail.com (Stuart McCulloch)
 */
final class OSGiServiceImport
    implements Import<Object>, Comparable<OSGiServiceImport> {

  static final ServiceUnavailableException NO_SERVICE = new ServiceUnavailableException();

  private final BundleContext bundleContext;
  private final ServiceReference ref;

  private final long id;
  private final int rank;

  private final Map<String, ?> attributes;

  public OSGiServiceImport(final BundleContext bundleContext, final ServiceReference ref) {
    this.bundleContext = bundleContext;
    this.ref = ref;

    id = getNumberProperty(SERVICE_ID).longValue();
    rank = getNumberProperty(SERVICE_RANKING).intValue();

    attributes = new OSGiServiceAttributes(ref);
  }

  public long getId() {
    return id;
  }

  public int getRanking() {
    return rank;
  }

  public Map<String, ?> getAttributes() {
    return attributes;
  }

  public Object get() {
    final Object service = bundleContext.getService(ref);
    if (null == service) {
      throw NO_SERVICE;
    }
    return service;
  }

  public void unget() {
    bundleContext.ungetService(ref);
  }

  @Override
  public boolean equals(final Object rhs) {
    if (rhs instanceof OSGiServiceImport) {
      return id == ((OSGiServiceImport) rhs).id;
    }
    return false;
  }

  @Override
  public int hashCode() {
    return (int) (id ^ (id >>> 32));
  }

  public int compareTo(OSGiServiceImport rhs) {

    if (id == rhs.id) {
      return 0;
    }

    if (rank == rhs.rank) {
      // favour lower service id
      return id < rhs.id ? -1 : 1;
    }

    // but higher ranking beats all
    return rank < rhs.rank ? 1 : -1;
  }

  private Number getNumberProperty(final String key) {
    final Object num = ref.getProperty(key);
    if (num instanceof Number) {
      return (Number) num;
    }
    return 0;
  }
}