package stepdefinitions;

import com.codeborne.selenide.Configuration;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.After;
import pageobjects.AccountPage;
import pageobjects.CampaignPage;

import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.page;

/**
 * Created by Swarn on 5/18/2017.
 */
public class Account {


    @Given("^I open up salesforce to create new account for CPL$")
    public void I_open_up_salesforce_to_create_new_account_for_CPL(String user) throws Throwable {
        CampaignPage page = page(CampaignPage.class);
        page.loginAsUser(user);
    }

/*        @Given("^I am existing user of salesforce with access (.*)$")
        public void I_am_existing_user_of_salesforce_access (String str)throws Throwable {
            CampaignPage page = page(CampaignPage.class);
            page.loginAsUser(str);
            //System.setProperty("webdriver.gecko.driver","C:\\Users\\Swarn\\Downloads\\salesforce-master\\salesforce-master\\SelenideTest\\src\\test\\resources\\geckodriver.exe");
            //Configuration.browser="FIREFOX";
            *//*System.setProperty("webdriver.chrome.driver", "C:\\Users\\Swarn\\Downloads\\sel\\chromedriver.exe");
            Configuration.browser = "Chrome";
            CampaignPage page = open("https://login.salesforce.com/", CampaignPage.class);
            page.loginAsUser("str")*//*;
        // Express the Regexp above with the code you wish you had
    }*/

    @Then("^I (.*) AccountName,(.*) Website, (.*) Phone,(.*) Employees,(.*) BillingStreet, (.*) Zipcode for CPL$")
    public void I_fill_up_information_for_CPL(String AccName, String WWebsite, String ContactPhone, String NoofEmployees,String  AddressBillingStreet, String PostZipcode) throws Throwable {
        AccountPage Acc=page(AccountPage.class);
        Acc.AccountCreation(AccName, WWebsite, ContactPhone, NoofEmployees, AddressBillingStreet,PostZipcode);

        // Express the Regexp above with the code you wish you had

    }

    @Then("^Create a new contact for that account$")
    public void Create_a_new_contact_for_that_account() throws Throwable {
        // Express the Regexp above with the code you wish you had

    }

    @Then("^Create a \\$(\\d+) opportunity for this contact$")
    public void Create_a_$_opportunity_for_this_contact(int arg1) throws Throwable {
        // Express the Regexp above with the code you wish you had

    }

    @Then("^Create a new Event and select contacts for the event$")
    public void Create_a_new_Event_and_select_contacts_for_the_event() throws Throwable {
        // Express the Regexp above with the code you wish you had

    }

}
