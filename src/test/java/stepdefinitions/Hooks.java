package stepdefinitions;

import com.codeborne.selenide.Configuration;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.URL;

import static com.codeborne.selenide.Configuration.browser;
import static com.codeborne.selenide.WebDriverRunner.FIREFOX;

/**
 * Created by si556320 on 6/12/2016.
 */
public class Hooks
{

     WebDriver driver;

    @Before
    /**
     * Delete all cookies at the start of each scenario to avoid
     * shared state between tests
     */
    public void openBrowser() throws Throwable {



        switch (browser) {

           /* case FIREFOX:
                //Install Firefox Setup 20.0.1.exe found in \\fileserver\Tools\Firefox
                System.out.println("Called openBrowser");

                URL hubUrl = new URL("http://192.168.99.100:4444/wd/hub");
                DesiredCapabilities capabilities = new DesiredCapabilities().firefox();
                capabilities.setBrowserName("firefox");

                //  FirefoxProfile profile = new FirefoxProfile();
                //  profile.setAcceptUntrustedCertificates(true);
                // profile.setAssumeUntrustedCertificateIssuer(false);

                driver = new RemoteWebDriver(hubUrl, capabilities);

                //  driver = new FirefoxDriver(profile);
                driver.manage().deleteAllCookies();
                driver.manage().window().maximize();

              //  break;*/

            case "Chrome":

                System.out.println("Called openBrowser");
                System.setProperty("webdriver.chrome.driver","src/test/resources/chromedriver.exe");
                ChromeOptions chromeOptions = new ChromeOptions();
                chromeOptions.addArguments("-no-sandbox");

                break;
            default:
                System.out.println("Please set the browser to firefox, ie or chrome in the Browser.properties file");

        }

    }



    /**
     * Embed a screenshot in test report if test is marked as failed
     */
    public void embedScreenshot(Scenario scenario) {

        if(scenario.isFailed()) {
            try {
                scenario.write("Current Page URL is " + driver.getCurrentUrl());
//            byte[] screenshot = getScreenshotAs(OutputType.BYTES);
                byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");
            } catch (WebDriverException somePlatformsDontSupportScreenshots) {
                System.err.println(somePlatformsDontSupportScreenshots.getMessage());
            }

            //Configuration.timeout =10000;
        }
        //driver.quit();

    }

}