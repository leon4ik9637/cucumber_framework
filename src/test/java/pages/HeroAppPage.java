package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

import java.util.List;

public class HeroAppPage {
    public HeroAppPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(css = "li>a")
    public List<WebElement> categoryLinks;

    @FindBy(css = "#content h3")
    public WebElement addRemoveHeading3;

    @FindBy(css = ".example>button")
    public WebElement addElementButton;

    @FindBy(css = "#elements>button")
    public WebElement deleteElementButton;

    @FindBy(css = "#content h3")
    public WebElement contextMenuHeading3;

    @FindBy(xpath = "//div[@class='example']//p[1]")
    public WebElement contextMenuParagraph1;

    @FindBy(xpath = "//div[@class='example']//p[2]")
    public WebElement contextMenuParagraph2;

    @FindBy(id = "hot-spot")
    public WebElement rectangleBox;

    @FindBy(id = "username")
    public WebElement usernameInputBox;

    @FindBy(id = "password")
    public WebElement passwordInputBox;

    @FindBy(css = ".radius")
    public WebElement loginButton;

    @FindBy(id = "flash-messages")
    public WebElement loginErrorMessage;

    public void clickOnCategoryLink(String linkText){
        for (WebElement link : categoryLinks) {
            if(link.getText().equals(linkText)) {
                link.click();
                break;
            }
        }
    }

    /*
    Method that could be instead of doing all this in steps
    public void validateButton(String buttonText){
        switch (buttonText) {
            case "Add Element":
                Assert.assertTrue(addElementButton.isDisplayed());
                Assert.assertTrue(addElementButton.isEnabled());
                Assert.assertEquals(buttonText, addElementButton.getText());
                break;

            case "Delete":
                Assert.assertTrue(deleteButton.isDisplayed());
                Assert.assertTrue(deleteButton.isEnabled());
                Assert.assertEquals(buttonText, deleteButton.getText());
                break;
            default:
                throw new NotFoundException("The button name is not defined properly in the feature file!!!");
        }
    }
     */


}

