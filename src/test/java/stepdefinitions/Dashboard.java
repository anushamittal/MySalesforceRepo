package stepdefinitions;

import com.codeborne.selenide.Configuration;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.After;
import pageobjects.CampaignPage;
import pageobjects.DashboradPage;

import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.page;

/**
 * Created by Swarn on 5/17/2017.
 */
public class Dashboard {



    @Given("^login into salesforce$")
    public void login_into_salesforce(String str) throws Throwable {
       /* System.setProperty("webdriver.chrome.driver", "C:\\Users\\Swarn\\Downloads\\sel\\chromedriver.exe");
        Configuration.browser = "Chrome";
        CampaignPage page = open("https://login.salesforce.com/", CampaignPage.class);
        page.loginAsUser(str);
        Configuration.timeout=10000;*/
        // Express the Regexp above with the code you wish you had

    }

    @When("^I click on the Dashboard tab$")
    public void I_click_on_the_Dashboard_tab() throws Throwable {
        DashboradPage Db= page(DashboradPage.class);
        Db.setNewdashboard1();
        // Express the Regexp above with the code you wish you had

    }

    @And("^click on new dashboard$")
    public void click_on_new_dashboard() throws Throwable {
        DashboradPage Db2= page(DashboradPage.class);
        Db2.setNewDashboard2();
        // Express the Regexp above with the code you wish you had

    }

    @Then("^in the new window enter the name$")
    public void in_the_new_window_enter_the_name() throws Throwable {
        DashboradPage Db3= page(DashboradPage.class);
        Db3.setNewDashboard3();
        // Express the Regexp above with the code you wish you had

    }

}
