package pageobjects;

import Helper.RandomNameGenerator;
import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

/**
 * Created by Swarn on 5/16/2017.
 */
public class CampaignPage {


    @FindBy(how= How.XPATH,using ="//input[@id='username']")
    SelenideElement username;

    @FindBy(how = How.XPATH,using = "//*[@id=\"password\"]")
    SelenideElement password;

    @FindBy(how = How.XPATH,using= "//*[@id=\"Login\"]")
    SelenideElement loginbutton;

    public void loginAsUser(String accessType) {

       /* username.setValue("swarn.3000@gmail.com");
        password.setValue("Creative3498");*/

       switch(accessType)
        {

            case "csr":
                username.setValue("swarn.3000@gmail.com");
                password.setValue("Creative3498");
                break;
            case "manager":
                username.setValue("swarn.3000@gmail.com");
                password.setValue("Creative3498");
                break;
            case "ceo":
                username.setValue("swarn.3000@gmail.com");
                password.setValue("Creative3498");
                break;

                default:
                    username.setValue("swarn.3000@gmail.com");
                    password.setValue("Creative3498");
        }
        loginbutton.click();
    }

}
