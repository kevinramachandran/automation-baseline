package com.example;

import io.restassured.RestAssured;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class SampleApiTest {

    @Test
    public void exampleApiTest() {
        RestAssured.baseURI = "https://jsonplaceholder.typicode.com";
        given().
        when().
            get("/posts/1").
        then().
            statusCode(200).
            body("id", equalTo(1));
    }
}
