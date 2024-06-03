package com.qa;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriver.Window;
import org.openqa.selenium.chrome.ChromeDriver;

public class Demo1 {
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
    public void windowDemo() throws InterruptedException {
        //WebDriver.Window window = (WebDriver.Window) driver.manage().window();
    	Window window = driver.manage().window();
        driver.get("https://www.bing.com");
        window.fullscreen();
        Thread.sleep(5000);
        window.minimize();
        Thread.sleep(5000);
        window.maximize();
        Thread.sleep(5000);
    }
}
