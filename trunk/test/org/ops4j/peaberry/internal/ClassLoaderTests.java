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

import static org.ops4j.peaberry.internal.ImportProxyClassLoader.getProxyConstructor;

import org.ops4j.peaberry.ServiceException;
import org.testng.annotations.Test;

/**
 * Test internal proxy classloader.
 * 
 * @author mcculls@gmail.com (Stuart McCulloch)
 */
@Test(testName = "ClassLoaderTests", suiteName = "Internal")
public final class ClassLoaderTests {

  public void cornerCases() {

    try {
      // cannot proxy a null class
      getProxyConstructor(null);
      assert false : "Expected service exception";
    } catch (final ServiceException e) {}

    try {
      // cannot proxy a final class
      getProxyConstructor(String.class);
      assert false : "Expected service exception";
    } catch (final ServiceException e) {}

    // but can proxy an interface from the java.* packages
    getProxyConstructor(Runnable.class);
  }
}
