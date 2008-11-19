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

package org.ops4j.peaberry.test.cases;

import static org.ops4j.peaberry.Peaberry.osgiModule;
import static org.ops4j.peaberry.Peaberry.service;
import static org.ops4j.peaberry.test.Director.findContext;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.fail;

import org.ops4j.peaberry.ServiceUnavailableException;

import com.google.inject.AbstractModule;
import com.google.inject.Guice;
import com.google.inject.Inject;
import com.google.inject.Injector;
import com.google.inject.Key;

import examples.ids.IdService;

/**
 * Base class for service testcases, instances are injected during construction.
 * 
 * @author mcculls@gmail.com (Stuart McCulloch)
 */
public abstract class InjectableTestCase
    extends AbstractModule {

  @Inject
  final Injector injector;

  @Inject
  IdService idService;

  public InjectableTestCase() {
    injector =
        Guice.createInjector(this, osgiModule(findContext(getClass())), new AbstractModule() {
          @Override
          public void configure() {
            bind(IdService.class).toProvider(service(IdService.class).single());
          }
        });

    injector.injectMembers(this);
  }

  protected <T> T getInstance(final Key<? extends T> key) {
    return injector.getInstance(key);
  }

  protected void register(final String... ids) {
    idService.register(0, ids);
  }

  protected void register(final int ranking, final String... ids) {
    idService.register(ranking, ids);
  }

  protected void missing(final Object obj) {
    try {
      obj.toString();
      fail("Expected ServiceUnavailableException");
    } catch (final ServiceUnavailableException e) {}
  }

  protected void check(final Object obj, final String text) {
    assertEquals(obj.toString(), text);
  }

  protected void unregister(final String... ids) {
    idService.unregister(ids);
  }

  protected void reset() {
    idService.reset();
  }
}
