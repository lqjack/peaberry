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

import static org.osgi.framework.Constants.SERVICE_ID;

import org.osgi.framework.Bundle;
import org.osgi.framework.ServiceReference;
import org.testng.annotations.Test;

/**
 * Test internal service ranking code.
 * 
 * @author stuart.mcculloch@jayway.net (Stuart McCulloch)
 */
@Test(testName = "ServiceRankingTests", suiteName = "Internal")
public final class ServiceRankingTests {

  @SuppressWarnings("unused")
  public void cornerCases() {

    ServiceReference empty = new ServiceReference() {

      public int compareTo(Object reference) {
        return 0;
      }

      public Bundle getBundle() {
        return null;
      }

      public Object getProperty(String key) {
        return null;
      }

      public String[] getPropertyKeys() {
        return null;
      }

      public Bundle[] getUsingBundles() {
        return null;
      }

      public boolean isAssignableTo(Bundle bundle, String className) {
        return false;
      }
    };

    ServiceReference basic = new ServiceReference() {

      public int compareTo(Object reference) {
        return 0;
      }

      public Bundle getBundle() {
        return null;
      }

      public Object getProperty(String key) {
        if (SERVICE_ID.equals(key)) {
          return 1;
        }
        return null;
      }

      public String[] getPropertyKeys() {
        return null;
      }

      public Bundle[] getUsingBundles() {
        return null;
      }

      public boolean isAssignableTo(Bundle bundle, String className) {
        return false;
      }
    };

    BestServiceComparator comparator = new BestServiceComparator();

    assert 0 == comparator.compare(empty, empty);
    assert 0 == comparator.compare(basic, basic);
    assert 1 == comparator.compare(basic, empty);
  }
}
