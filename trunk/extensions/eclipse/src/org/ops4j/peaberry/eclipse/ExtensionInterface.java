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

import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

/**
 * Use this to map a bean type to a particular Extension Point.
 * 
 * @author mcculls@gmail.com (Stuart McCulloch)
 */
@Target(TYPE)
@Retention(RUNTIME)
public @interface ExtensionInterface {

  /**
   * if true then the Extension elements will be combined into one bean
   */
  boolean aggregate() default false;

  /**
   * the unique identifier of the Extension Point
   */
  String value();
}
