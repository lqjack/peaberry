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

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

import org.eclipse.core.runtime.ContributorFactoryOSGi;
import org.eclipse.core.runtime.IConfigurationElement;
import org.osgi.framework.Bundle;

/**
 * @author mcculls@gmail.com (Stuart McCulloch)
 */
final class ExtensionBeanFactory {

  public static Object newInstance(Class<?> clazz, IConfigurationElement element) {
    final String clazzName = element.getAttribute("class");
    if (clazzName != null) {
      Bundle bundle = ContributorFactoryOSGi.resolve(element.getContributor());
      try {
        final Class<?> elementClazz = bundle.loadClass(clazzName);
        if (clazz.isAssignableFrom(elementClazz)) {
          return elementClazz.newInstance();
        }
      } catch (ClassNotFoundException e) {} catch (InstantiationException e) {} catch (IllegalAccessException e) {}
    }

    return Proxy.newProxyInstance(clazz.getClassLoader(), new Class<?>[]{clazz},
        new InvocationHandler() {
          public Object invoke(Object proxy, Method method, Object[] args)
              throws Throwable {
            // TODO Auto-generated method stub
            return null;
          }
        });
  }

}
