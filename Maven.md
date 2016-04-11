peaberry 1.1.1 is now available on the central Maven repository:

```
  <dependencies>
    <dependency>
      <groupId>org.ops4j</groupId>
      <artifactId>peaberry</artifactId>
      <version>1.1.1</version>
    </dependency>
    <!-- only needed when injecting Eclipse extensions -->
    <dependency>
      <groupId>org.ops4j</groupId>
      <artifactId>peaberry.eclipse</artifactId>
      <version>1.1.1</version>
    </dependency>
    <!-- bundle-ized dependencies, not official releases -->
    <dependency>
      <groupId>org.ops4j.peaberry.dependencies</groupId>
      <artifactId>aopalliance</artifactId>
      <version>1.0-SNAPSHOT</version>
    </dependency>
    <dependency>
      <groupId>org.ops4j.peaberry.dependencies</groupId>
      <artifactId>guice</artifactId>
      <version>2.0-SNAPSHOT</version>
    </dependency>
  </dependencies>

  <repositories>
    <!-- for bundle-ized peaberry dependencies -->
    <repository>
      <id>ops4j.snapshots</id>
      <url>http://repository.ops4j.org/mvn-snapshots/</url>
      <releases>
        <enabled>false</enabled>
      </releases>
    </repository>
  </repositories>
```