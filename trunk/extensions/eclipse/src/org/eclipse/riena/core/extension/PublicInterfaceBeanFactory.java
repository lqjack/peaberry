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

package org.eclipse.riena.core.extension;

import org.eclipse.core.runtime.IConfigurationElement;

/**
 * @author mcculls@gmail.com (Stuart McCulloch)
 */
public final class PublicInterfaceBeanFactory {

  // instances not allowed
  private PublicInterfaceBeanFactory() {}

  @SuppressWarnings("unchecked")
  public static <T> T newInstance(final Class<? extends T> clazz,
      final IConfigurationElement configurationElement) {
    return (T) InterfaceBeanFactory.newInstance(false, clazz, configurationElement);
  }
}
