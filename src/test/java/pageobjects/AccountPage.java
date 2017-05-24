package pageobjects;

import com.codeborne.selenide.Condition;
import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

/**
 * Created by Swarn on 5/18/2017.
 */
public class AccountPage {

    String AccName, WWebsite, ContactPhone,NoofEmployees, AddressBillingStreet, PostZipcode;

    @FindBy(how= How.XPATH, using = ".//a[@title='Accounts Tab']")
    SelenideElement AccountTab;

    @FindBy(how= How.XPATH, using = "//input[@title='New']")
    SelenideElement NewAccount;

    @FindBy(how= How.XPATH, using = "//input[@id='acc2']")
    SelenideElement AccountName;

    @FindBy(how= How.XPATH, using = "//select[@id='acc6']")
    SelenideElement AccountType;

    @FindBy(how= How.XPATH, using = "//input[@id='acc12']")
    SelenideElement Website;

    @FindBy(how= How.XPATH, using = "//input[@id='acc10']")
    SelenideElement Phone;

    @FindBy(how= How.XPATH, using = "//select[@id='acc7']")
    SelenideElement Industry;

    @FindBy(how= How.XPATH, using = "//input[@id='acc15']")
    SelenideElement Employees;

    @FindBy(how= How.XPATH, using = "//textarea[@id='acc17street']")
    SelenideElement BillingStreet;

    @FindBy(how= How.XPATH, using = "//input[@id='acc17zip']")
    SelenideElement Zipcode;

    @FindBy(how= How.XPATH, using = ".//*[@id='head_2_ep']/span/span/a")
    SelenideElement CopyAsShippingAddress;

    @FindBy(how= How.XPATH, using = ".//*[@id='bottomButtonRow']/input[1]")
    SelenideElement SaveAccount;

   /* @FindBy(how= How.XPATH, using = "//a[contains(.,'CPL')]")
    SelenideElement Zipcode;

    @FindBy(how= How.XPATH, using = "//input[@id='acc17zip']")
    SelenideElement Zipcode;

    @FindBy(how= How.XPATH, using = "//input[@id='acc17zip']")
    SelenideElement Zipcode;

    @FindBy(how= How.XPATH, using = "//input[@id='acc17zip']")
    SelenideElement Zipcode;

    @FindBy(how= How.XPATH, using = "//input[@id='acc17zip']")
    SelenideElement Zipcode;*/

   // Filling up information for new account
   public void AccountCreation
           (String AccName, String WWebsite, String ContactPhone, String NoofEmployees,String  AddressBillingStreet, String PostZipcode){

        AccountTab.click();
        AccountTab.shouldHave(Condition.text("Account"));
        NewAccount.click();
        NewAccount.shouldHave(Condition.text("New"));
        this.AccName= AccName;
        AccountName.val(AccName);
        AccountType.selectOptionByValue("Customer");
        this.WWebsite= WWebsite;
        Website.val(WWebsite);
        Website.shouldBe(Condition.empty);
        this.ContactPhone = ContactPhone;
        Phone.val(ContactPhone);
        Industry.selectOptionByValue("Retail");
        this.NoofEmployees = NoofEmployees;
        Employees.val(NoofEmployees);
        this.AddressBillingStreet= AddressBillingStreet;
        BillingStreet.val(AddressBillingStreet);
        this.PostZipcode= PostZipcode;
        Zipcode.val(PostZipcode);
        CopyAsShippingAddress.click();
        SaveAccount.click();
    }
}

