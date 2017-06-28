package stepdefinitions;

import com.browserstack.local.Local;
import com.codeborne.selenide.WebDriverRunner;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.junit.After;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterMethod;

import java.io.FileReader;
import java.net.URL;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * Created by si556320 on 6/12/2016.
 */
public class Hooks
{

   //  WebDriver driver;


    public RemoteWebDriver driver;
    private Local l;

    public static String username;
    public static String accessKey;
    public static String sessionId;

    public static String config_file;
    public static String environment;



   @Before
    public void setUp() throws Exception {
        this.config_file="config.json";
        this.environment="chrome";
        JSONParser parser = new JSONParser();
        JSONObject config = (JSONObject)parser.parse(new FileReader("src/test/resources/conf/" + config_file));
        JSONObject envs = (JSONObject) config.get("environments");

        DesiredCapabilities capabilities = new DesiredCapabilities();

        Map<String, String> envCapabilities = (Map<String, String>) envs.get(environment);
        Iterator it = envCapabilities.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry pair = (Map.Entry)it.next();
            capabilities.setCapability(pair.getKey().toString(), pair.getValue().toString());
        }

        Map<String, String> commonCapabilities= (Map<String, String>) config.get("capabilities");
        it = commonCapabilities.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry pair = (Map.Entry)it.next();
            if (capabilities.getCapability(pair.getKey().toString()) == null) {
                capabilities.setCapability(pair.getKey().toString(), pair.getValue().toString());
            }
        }

        username = System.getenv("swarndeepsingh1");
        if (username == null) {
            username = (String) config.get("user");
        }

        accessKey = System.getenv("MdxJs1D3VjrQx5E7yFbt");
        if (accessKey == null) {
            accessKey = (String) config.get("key");
        }

        if (capabilities.getCapability("browserstack.local") != null && capabilities.getCapability("browserstack.local") == "true") {
            l = new Local();
            Map<String, String> options = new HashMap<String, String>();
            options.put("key", accessKey);
            l.start(options);
        }

        driver = new RemoteWebDriver(new URL("https://" + username + ":" + accessKey + "@" + config.get("server") + "/wd/hub"), capabilities);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("https://login.salesforce.com/");
        sessionId = driver.getSessionId().toString();

        WebDriverRunner.setWebDriver(driver);
    }

    @AfterMethod(alwaysRun=true)
    public void tearDown() throws Exception {
        driver.quit();
        if (l != null) {
            l.stop();
        }
    }
//}
/*    *//**
     * Delete all cookies at the start of each scenario to avoid
     * shared state between tests
     *//*
    public void openBrowser() throws Throwable {

            //System.setProperty("webdriver.chrome.driver", "C:\\Users\\Swarn\\Downloads\\sel\\chromedriver.exe");
            Configuration.browser = "Chrome";
            Configuration.baseUrl ="https://login.salesforce.com/";
          *//*  CampaignPage page = open("https://login.salesforce.com/", CampaignPage.class);
            page.loginAsUser("csr");*//*


       /* switch (Configuration.browser) {

            case "firefox":

               // WebDriver driver = new FirefoxDriver();
                System.out.println("Called openBrowser");
                System.setProperty("webdriver.gecko.driver","C:\\Users\\Swarn\\Downloads\\Drivers\\geckodriver.exe");
                open("/");
                *//**//*//**//*//*Install Firefox Setup 20.0.1.exe found in \\fileserver\Tools\Firefox
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
                driver.manage().window().maximize();*//**//*

                break;

            case "Chrome":

                System.out.println("Called openBrowser");
                System.setProperty("webdriver.chrome.driver", "C:\\Users\\Swarn\\Downloads\\salesforce-master\\salesforce-master\\SelenideTest\\target\\test-classes\\chromedriver.exe");
                open("/");
              *//**//*  CampaignPage page = open("https://login.salesforce.com/", CampaignPage.class);
                page.loginAsUser("csr");*//**//*

                *//**//*ChromeOptions chromeOptions = new ChromeOptions();
                chromeOptions.addArguments("-no-sandbox");*//**//*

                break;

            case "edge":

                System.out.println("Called openBrowser");
                System.setProperty("webdriver.edge.driver", "C:\\Users\\Swarn\\Downloads\\Drivers\\MicrosoftWebDriver.exe");
                open("/");
                break;

            case "ie":

                System.out.println("Called openBrowser");
                //DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
               // capabilities.setCapability(InternetExplorerDriver.IGNORE_ZOOM_SETTING, true);
                System.setProperty("webdriver.ie.driver", "C:\\Users\\Swarn\\Downloads\\Drivers\\IE\\IEDriverServer.exe");
                open("/");
                break;
            default:
                System.out.println("Please set the browser to firefox, ie or chrome in the Browser.properties file");

        }*/






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