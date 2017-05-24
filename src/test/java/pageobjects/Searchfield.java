package pageobjects;

import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

/**
 * Created by Swarn on 5/17/2017.
 */
public class Searchfield {
    String keyword;

    @FindBy(how= How.XPATH,using ="//input[@title='Search Salesforce']")
    SelenideElement searchfield;

    public void clicksearchfield(){
        searchfield.click();
    }
    public void entertext(String keyword){
        this.keyword = keyword;
        searchfield.val(keyword);

        ;
    }

}
