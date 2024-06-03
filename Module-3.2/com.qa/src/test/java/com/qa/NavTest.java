package com.qa;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriver.Navigation;
import org.openqa.selenium.WebDriver.Window;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class NavTest{
    private WebDriver driver;
    @BeforeAll
    static void init() {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
    }
    @AfterAll
    static void finish() {
        System.out.println("All done.");
    }
    
    @BeforeEach
    void setup() {
        driver = new ChromeDriver();
    }
    @AfterEach
    void teardown() {
        driver.quit();
    }
    
    @Test
    public void googleTest() throws Exception {
        Navigation navigator = driver.navigate();
        navigator.to("https://www.bing.com");
        Thread.sleep(3000);
        WebElement searchBar = driver.findElement(By.name("q"));
        searchBar.sendKeys("horses");
        searchBar.submit();
        Thread.sleep(3000);
        navigator.back();
        searchBar = driver.findElement(By.name("q"));
        searchBar.sendKeys("squids");
        searchBar.submit();
        Thread.sleep(3000);
        navigator.back();
        Thread.sleep(3000);
        navigator.forward();
        Thread.sleep(3000);
    }
}
