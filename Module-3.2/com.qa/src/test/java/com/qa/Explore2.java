package com.qa;

import java.io.File;
import java.io.IOException;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Explore2 {
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
    public void windowDemo() throws InterruptedException, IOException {
        driver.get("http://automationpractice.com/");
        driver.manage().window().setSize(new Dimension(1936, 1048));
        driver.findElement(By.cssSelector("img")).click();
        File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        screenshot.renameTo(new File("./screenshot.png"));
        screenshot.createNewFile();
        driver.findElement(By.cssSelector(".imh-rostrum-card:nth-child(2) > .imh-ds-icon")).click();
    }
    
}
