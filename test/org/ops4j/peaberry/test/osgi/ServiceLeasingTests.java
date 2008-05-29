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

package org.ops4j.peaberry.test.osgi;

import static org.ops4j.peaberry.Service.FOREVER;

import org.ops4j.peaberry.Service;
import org.ops4j.peaberry.Service.Seconds;
import org.testng.annotations.Test;

import com.google.inject.Inject;

/**
 * @author stuart.mcculloch@jayway.net (Stuart McCulloch)
 */
@Test(testName = "ServiceLeasingTests", suiteName = "OSGi")
public class ServiceLeasingTests
    extends OSGiServiceTester {

  @Inject
  @Service
  SimpleService unleasedService;

  @Inject
  @Service(lease = @Seconds(2))
  SimpleService leasedService;

  @Inject
  @Service(lease = @Seconds(2))
  Iterable<SimpleService> leasedServices;

  @Inject
  @Service(lease = @Seconds(FOREVER))
  SimpleService staticService;

  @Inject
  @Service(lease = @Seconds(FOREVER))
  Iterable<SimpleService> staticServices;

  public void unleasedUnaryService() {
    disableAllServices();
    missingService(unleasedService);
    enableService("A");
    checkService(unleasedService, "A");
    enableService("B");
    checkService(unleasedService, "B");
    disableService("B");
    checkService(unleasedService, "A");
    disableService("A");
    missingService(unleasedService);
    enableService("A");
    checkService(unleasedService, "A");
    enableService("B");
    checkService(unleasedService, "B");
    disableService("A");
    checkService(unleasedService, "B");
    disableService("B");
    missingService(unleasedService);
  }

  @Test
  public void leasedUnaryService() {
    disableAllServices();
    missingService(leasedService);
    enableService("A");
    checkService(leasedService, "A");
    enableService("B");
    checkService(leasedService, "A");
    sleep(2200);
    checkService(leasedService, "B");
    disableService("B");
    missingService(leasedService);
    sleep(2200);
    checkService(leasedService, "A");
    disableService("A");
    missingService(leasedService);
  }

  public void leasedMultiService() {
    disableAllServices();
    checkServices(leasedServices);
    enableService("A");
    checkServices(leasedServices, "A");
    enableService("B");
    checkServices(leasedServices, "A");
    sleep(2200);
    checkServices(leasedServices, "B", "A");
    disableService("B");
    checkServices(leasedServices, "!", "A");
    sleep(2200);
    checkServices(leasedServices, "A");
    disableService("A");
    checkServices(leasedServices, "!");
    sleep(2200);
    checkServices(leasedServices);
  }

  public void staticUnaryService() {
    disableAllServices();
    missingService(staticService);
    enableService("A");
    checkService(staticService, "A");
    enableService("B");
    checkService(staticService, "A");
    sleep(2200);
    checkService(staticService, "A");
    disableService("A");
    missingService(staticService);
    sleep(2200);
    missingService(staticService);
  }

  public void staticMultiService() {
    disableAllServices();
    checkServices(staticServices);
    enableService("A");
    checkServices(staticServices, "A");
    enableService("B");
    checkServices(staticServices, "A");
    sleep(2200);
    checkServices(staticServices, "A");
    disableService("A");
    checkServices(staticServices, "!");
    sleep(2200);
    checkServices(staticServices, "!");
  }
}