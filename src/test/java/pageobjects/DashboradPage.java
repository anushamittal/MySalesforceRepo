package pageobjects;

import com.codeborne.selenide.Condition;
import com.codeborne.selenide.Configuration;
import com.codeborne.selenide.SelenideElement;
import cucumber.api.java.eo.Se;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static com.codeborne.selenide.Selenide.switchTo;

/**
 * Created by Swarn on 5/17/2017.
 */
public class DashboradPage {

    @FindBy(how = How.XPATH,using ="//a[@title='Dashboards Tab']")
    SelenideElement dashboardtab;

    /*@FindBy(how= How.XPATH, using ="//div[@title='New Dashboard']")
    SelenideElement newdashboard;*/

    @FindBy(how = How.XPATH, using = "//div[@title='New Dashboard'] ")
    SelenideElement newWindow;

    @FindBy(how = How.XPATH, using= "//input[@id='dashboardNameInput']")
    SelenideElement fillName;

    public void setNewdashboard1() {

        dashboardtab.click();
            dashboardtab.shouldHave(Condition.text("Dashboard"));

        Configuration.timeout=10000;
    }

    public void setNewDashboard2(){
        newWindow.click();
        switchTo().window("New Dashboard");
    }

    public void setNewDashboard3(){
        fillName.click();
    }
}