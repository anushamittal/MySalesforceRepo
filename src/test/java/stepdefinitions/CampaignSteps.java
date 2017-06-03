package stepdefinitions;//package stepdefinitions;

import com.codeborne.selenide.Configuration;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import org.junit.After;
import org.junit.Before;
import pageobjects.CampaignPage;
import pageobjects.LeadsPage;

import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.page;
import static io.restassured.RestAssured.get;
/*
*
 * Created by Swarn on 5/16/2017.*/


public class CampaignSteps {

    private String keyword;

 public CampaignSteps()
    {

    }


    @Given("^I am existing user of salesforce with access (.*)$")
    public void I_am_existing_user_of_salesforce_with_access (String user)throws Throwable {
        //System.setProperty("webdriver.gecko.driver","C:\\Users\\Swarn\\Downloads\\salesforce-master\\salesforce-master\\SelenideTest\\src\\test\\resources\\geckodriver.exe");
        //Configuration.browser="FIREFOX";
    /*    System.setProperty("webdriver.chrome.driver", "C:\\Users\\Swarn\\Downloads\\sel\\chromedriver.exe");
        Configuration.browser = "Chrome"; */
        CampaignPage page = page(CampaignPage.class);
        page.loginAsUser(user);
        // Express the Regexp above with the code you wish you had

    }

    @When("^I login and create a campaign for my company$")
    public void I_login_and_create_a_campaign_for_my_company() throws Throwable {

        LeadsPage lead = page(LeadsPage.class);
        lead.createNewLead();
        // Express the Regexp above with the code you wish you had

    }

    @Then("^I enter firstname, lastname, (.*) company name and (.*) number of employees$")
    public void I_enter_firstname(String CompanyName, String number) throws Throwable {
        LeadsPage lead1 = page(LeadsPage.class);
        lead1.formfill(CompanyName,number);

        // Express the Regexp above with the code you wish you had
    }

    @Then("^a campaign is successfully created$")
    public void a_campaign_is_successfully_created() throws Throwable {
        // Express the Regexp above with the code you wish you had

    }

    @Then("^I can see the success message$")
    public void I_can_see_the_success_message() throws Throwable {
        // Express the Regexp above with the code you wish you had

    }


}
