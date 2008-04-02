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

import static org.ops4j.peaberry.internal.ServiceMatcher.getLeasedSpec;
import static org.ops4j.peaberry.internal.ServiceProviderFactory.resolve;

import org.ops4j.peaberry.Leased;
import org.ops4j.peaberry.Service;

import com.google.inject.Key;
import com.google.inject.Provider;
import com.google.inject.Scope;

/**
 * Provides {@link Leased} {@link Service} scoping.
 * 
 * @author stuart.mcculloch@jayway.net (Stuart McCulloch)
 */
public final class LeasedScope
    implements Scope {

  /**
   * Default lease, for when the {@link Key} has no {@link Leased} annotation.
   */
  private final int defaultLeaseTimeInSeconds;

  public LeasedScope(int defaultLeaseTimeInSeconds) {
    this.defaultLeaseTimeInSeconds = defaultLeaseTimeInSeconds;
  }

  /**
   * Determines the lease time as specified by the binding {@link Key}.
   * 
   * @param key binding key
   * @return lease time in seconds
   */
  private int getLeaseTimeInSeconds(Key<?> key) {
    Leased leasedSpec = getLeasedSpec(key.getAnnotationType());

    return leasedSpec != null ? leasedSpec.seconds()
        : defaultLeaseTimeInSeconds;
  }

  public <T> Provider<T> scope(Key<T> key, final Provider<T> unscoped) {
    final long leaseTimeInSeconds = getLeaseTimeInSeconds(key);

    return new Provider<T>() {

      private T instance = null;

      private volatile Long expireTimeInMillis = 0L;

      /**
       * Only re-resolve when the lease expires.
       */
      public T get() {
        if (expireTimeInMillis < System.currentTimeMillis()) {
          synchronized (this) {
            if (expireTimeInMillis < System.currentTimeMillis()) {

              // must be before volatile is updated
              instance = resolve(unscoped);

              expireTimeInMillis =
                  System.currentTimeMillis() + leaseTimeInSeconds * 1000;
            }
          }
        }
        return instance;
      }

      @Override
      public String toString() {
        return String.format("%s[%s(%ds)]", unscoped, LeasedScope.this,
            leaseTimeInSeconds);
      }
    };
  }

  @Override
  public String toString() {
    return "LEASED_SERVICE";
  }
}
