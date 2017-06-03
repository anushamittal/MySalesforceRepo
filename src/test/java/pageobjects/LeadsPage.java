package pageobjects;

import Helper.RandomNameGenerator;
import com.codeborne.selenide.Condition;
import com.codeborne.selenide.Configuration;
import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static com.codeborne.selenide.Selenide.switchTo;

/**
 * Created by Swarn on 5/16/2017.
 */
public class LeadsPage {
    private String FName, LName, CompanyName, number;


    @FindBy(how = How.XPATH, using = ".//*[@id='Lead_Tab']/a")//a[@title='Leads Tab']
    SelenideElement LeadsTab;

    @FindBy(how = How.XPATH, using ="//input[@title='New']")//input[@title='New']
    SelenideElement NewLead;

    /*@FindBy(how= How.XPATH,using = "//select[@id='lea13']")
    SelenideElement status;*/

    @FindBy(how= How.XPATH,using = "//select[@id='name_salutationlea2']")
    SelenideElement salutation;

    @FindBy(how= How.XPATH,using = "//input[@id='name_firstlea2']")
    SelenideElement firstName;

    @FindBy(how= How.XPATH,using = "//input[@id='name_lastlea2']")
    SelenideElement lastName;

    @FindBy(how= How.XPATH,using = "//select[@id='lea14']")
    SelenideElement rating;

    @FindBy(how= How.XPATH,using = "//input[@id='lea3']")
    SelenideElement company;

    @FindBy(how= How.XPATH,using = "//select[@id='lea6']")
    SelenideElement industry;

    @FindBy(how= How.XPATH,using = "//input[@id='lea15']")
    SelenideElement employees;

    @FindBy(how= How.XPATH,using = "//input[@tabindex='23']")
    SelenideElement save;

    public void createNewLead() throws InterruptedException {
        //LeadsTab.shouldHave(Condition.text("Leads"));
        LeadsTab.click();

        //Configuration.timeout= 5000;
        //NewLead.shouldHave(Condition.text("New"));
        NewLead.click();

       // Configuration.timeout= 5000;


        // public void chnagewindow(){
        //switchTo().window("Create Lead");
    }

        public void formfill(String CompanyName, String number){


            /*status.click();
            status.selectOptionByValue("Quaified");*/
            salutation.selectOptionByValue("Mr.");
            this.FName= new RandomNameGenerator().generateName();
            firstName.val(FName);
            this.LName= new RandomNameGenerator().generateName();
            lastName.val(LName);
            rating.selectOptionByValue("Hot");

            this.CompanyName= CompanyName;
            company.val(CompanyName);
            industry.selectOptionByValue("Banking");
            this.number = number;
            employees.val(number);
            save.click();
    }
}






