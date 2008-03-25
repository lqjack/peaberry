/**
 * Copyright (C) 2008 Stuart McCulloch
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.ops4j.peaberry.test;

import java.util.ArrayList;
import java.util.List;

import junit.framework.TestCase;

import org.ops4j.peaberry.Peaberry;
import org.ops4j.peaberry.Service;
import org.osgi.framework.BundleContext;

import com.google.inject.AbstractModule;
import com.google.inject.Inject;
import com.google.inject.Injector;
import com.google.inject.Scopes;

public class OSGiServiceBindingTest
    extends TestCase {

  @Inject
  @Service
  List<Object> m_logService;

  public OSGiServiceBindingTest() {
  }

  @Inject
  public OSGiServiceBindingTest(@Service
  Iterable<List<Object>> foos) {
  }

  @Inject
  public void setFoo(@Service
  ArrayList foo) {
  }

  class Module
      extends AbstractModule {
    @Override
    protected void configure() {
      bind(OSGiServiceBindingTest.class).in(Scopes.SINGLETON);
    }
  }

  public void testInjection()
      throws Exception {

    BundleContext bc = OSGiTests.getBundleContext();
    Injector injector = Peaberry.getOSGiInjector(bc, new Module());
    injector.getInstance(OSGiServiceBindingTest.class);
  }
}
