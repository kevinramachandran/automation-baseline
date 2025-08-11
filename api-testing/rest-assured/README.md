# REST Assured API Testing with Gradle

This project demonstrates API testing using **REST Assured** with **Gradle** as the build tool.

##  Project Structure
```
api-testing/
└── rest-assured/
    ├── build.gradle
    ├── settings.gradle
    ├── src/
    │   ├── test/
    │   │   └── java/
    │   │       └── ExampleApiTest.java
    └── README.md
```

##  Prerequisites
- Java 11 or above
- Gradle installed (or use Gradle wrapper `./gradlew`)
- Internet connection (to download dependencies)

##  Dependencies
Add the following dependencies in your `build.gradle`:
```gradle
plugins {
    id 'java'
}

repositories {
    mavenCentral()
}

dependencies {
    testImplementation 'io.rest-assured:rest-assured:5.3.0'
    testImplementation 'org.junit.jupiter:junit-jupiter:5.10.0'
}

test {
    useJUnitPlatform()
}
```

##  Sample API Test
```java
import io.restassured.RestAssured;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class ExampleApiTest {

    @Test
    public void testGetUsers() {
        RestAssured.baseURI = "https://reqres.in/api";

        given()
            .when()
            .get("/users?page=2")
            .then()
            .statusCode(200)
            .body("data.id[0]", equalTo(7));
    }
}
```

##  Running the Tests
Run tests with:
```bash
./gradlew test
```

Or with Gradle installed globally:
```bash
gradle test
```

##  References
- [REST Assured Docs](https://rest-assured.io/)
- [Gradle Docs](https://docs.gradle.org/)
