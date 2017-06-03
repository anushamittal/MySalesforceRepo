package stepdefinitions;

import com.codeborne.selenide.Configuration;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.After;
import pageobjects.CampaignPage;
import pageobjects.Searchfield;

import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.page;

/**
 * Created by Swarn on 5/17/2017.
 */
public class searchfield {



    @Given("^login to salesforce.com$")

    public void login_to_salesforce_com(String str) throws Throwable {
/*        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Swarn\\Downloads\\sel\\chromedriver.exe");
        Configuration.browser = "Chrome";
        CampaignPage page = open("https://login.salesforce.com/", CampaignPage.class);
        page.loginAsUser(str);*/
        // Express the Regexp above with the code you wish you had

    }

    @When("^click on search field$")
    public void click_on_search_field() throws Throwable {
        Searchfield click = page(Searchfield.class);
        click.clicksearchfield();
        // Express the Regexp above with the code you wish you had

    }

    @When("^enter a keyword (.*) in the input field$")
    public void enter_a_keyword_in_the_input_field(String keyword) throws Throwable {
        Searchfield text = page(Searchfield.class);
        text.entertext(keyword);
        // Express the Regexp above with the code you wish you had
    }

        /*@Then("^(\\d+) matching result should be shown $")
        public void matching_result_should_be_shown(int resultcount) throws Throwable {
            Searchfield text = page(Searchfield.class);
            text.entertext();*/
    }


