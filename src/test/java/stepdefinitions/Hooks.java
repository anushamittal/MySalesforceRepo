package stepdefinitions;

import com.codeborne.selenide.Configuration;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import org.junit.After;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import pageobjects.CampaignPage;
import sun.security.krb5.Config;

import java.net.URL;

import static com.codeborne.selenide.Configuration.browser;
import static com.codeborne.selenide.Selenide.open;
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

            //System.setProperty("webdriver.chrome.driver", "C:\\Users\\Swarn\\Downloads\\sel\\chromedriver.exe");
            Configuration.browser = "firefox";
            Configuration.baseUrl ="https://login.salesforce.com/";
          /*  CampaignPage page = open("https://login.salesforce.com/", CampaignPage.class);
            page.loginAsUser("csr");*/


        switch (Configuration.browser) {

            case "firefox":

               // WebDriver driver = new FirefoxDriver();
                System.out.println("Called openBrowser");
                System.setProperty("webdriver.gecko.driver","C:\\Users\\Swarn\\Downloads\\Drivers\\geckodriver.exe");
                open("/");
                /*//Install Firefox Setup 20.0.1.exe found in \\fileserver\Tools\Firefox
                System.out.println("Called openBrowser");

                //URL hubUrl = new URL("http://192.168.99.100:4444/wd/hub");
                DesiredCapabilities capabilities = new DesiredCapabilities().firefox();
                //capabilities.setBrowserName("firefox");

                //  FirefoxProfile profile = new FirefoxProfile();
                //  profile.setAcceptUntrustedCertificates(true);
                // profile.setAssumeUntrustedCertificateIssuer(false);

                driver = new RemoteWebDriver(page, capabilities);

                //  driver = new FirefoxDriver(profile);
                driver.manage().deleteAllCookies();
                driver.manage().window().maximize();*/

                break;

            case "Chrome":

                System.out.println("Called openBrowser");
                System.setProperty("webdriver.chrome.driver", "C:\\Users\\Swarn\\Downloads\\salesforce-master\\salesforce-master\\SelenideTest\\target\\test-classes\\chromedriver.exe");
                open("/");
              /*  CampaignPage page = open("https://login.salesforce.com/", CampaignPage.class);
                page.loginAsUser("csr");*/

                /*ChromeOptions chromeOptions = new ChromeOptions();
                chromeOptions.addArguments("-no-sandbox");*/

                break;

            case "edge":

                System.out.println("Called openBrowser");
                System.setProperty("webdriver.edge.driver", "C:\\Users\\Swarn\\Downloads\\Drivers\\MicrosoftWebDriver.exe");
                open("/");
                break;

            case "ie":

                System.out.println("Called openBrowser");
                DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
                capabilities.setCapability(InternetExplorerDriver.IGNORE_ZOOM_SETTING, true);
                System.setProperty("webdriver.ie.driver", "C:\\Users\\Swarn\\Downloads\\Drivers\\IE\\IEDriverServer.exe");
                open("/");
                break;
            default:
                System.out.println("Please set the browser to firefox, ie or chrome in the Browser.properties file");

        }

    }



    /**
     * Embed a screenshot in test report if test is marked as failed
     */
    @After
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