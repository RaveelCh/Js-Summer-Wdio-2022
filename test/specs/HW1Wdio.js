const {expect} = require("chai");

// Due date: Aug 16 end

describe('Homework Tests', () => {

/**
* Tc-1:
* https://www.darsky.net
* Verify feelsLikeTempValue is between lowTempValue and highTempValue
* 
* Given I am on darksky.net
*   Then I verify Feels Like Temperature is between Low Temperature and High Temperature
* 
*/
it('Verify feelsLikeTempValue is between lowTempValue and highTempValue', async () => {
    
    await browser.url('https://darksky.net');        
    await browser.pause(4000);

    const feelsLikeTemp = await $('span[class=feels-like-text]').getText();        

    const highTemp = await $('span[class=high-temp-text]').getText();        

    const lowTemp = await $('span[class=low-temp-text]').getText();                

    expect((feelsLikeTemp >= lowTemp && feelsLikeTemp <= highTemp), 'FeelsLikeTemp is not between high and low temp').to.be.true;
});


/**
 * Tc-2:
 * https://www.darsky.net
 * Verify user can get temperature based on zipcode
 * 
 * Given I am on darksky.net
 *  When I click search box
 *  And I enter zipcode
 *  And I click search button
 *  Then I verify that temp is displayed
 */
it('Verify user can get temperature based on zipcode', async () => {

    await browser.url('https://darksky.net');
    await browser.pause(4000);

    const searchBox = await $('input[type=text]');
    await searchBox.setValue('43220');
    await browser.pause(4000);

    const searchButton = await $('a[class=searchButton]');
    await searchButton.click();
    await browser.pause(4000);

    const feelsLikeTemp = await $('span[class=feels-like-text]');
    const isFeelsLikeTempDisplayed = await feelsLikeTemp.isDisplayed();

    expect(isFeelsLikeTempDisplayed, 'Temperature is not displayed').to.be.true;
});


/**
 * Tc-3:
 * https://www.facebook.com
 * 
 * Verify user gets error message when submit empty login form
 * expected error msg -> The email address or mobile number you entered isn't connected to an account.
 * 
 * Given I am on facebook.com
 *  When I click on Log in
 *  Then I verify user gets error message
 */
it('Verify user gets error message when submit empty login form', async () => {

    await browser.url('https://www.facebook.com');
    await browser.pause(4000);

    const loginButton = await $('button[name=login]');
    await loginButton.click();
    await browser.pause(4000);

    const errorMessage = await $('div*=email or mobile number');

    const isErrorDisplayed = await errorMessage.isDisplayed();

    expect (isErrorDisplayed,'Error message is not displayed').to.be.true;
});


/**
 * Tc-4:
 * https://www.facebook.com
 * 
 * Verify empty messenger login flow
 * 1. Click Messenger
 * 2. Verify 'Keep me signed in' is not selected
 * 3. Click 'Log In' button
 * 4. Verify link -> "Find your account and log in" is displayed
 * 5. Verify 'Continue' button is enabled
 * 6. Verify 'Keep me signed in' is not selected
 * 7. Click 'Keep me signed in'
 * 8. Verify 'Keep me signed in' is selected
 * 
 * Given I am on facebook.com
 *  When I click on messenger
 *  Then I verify 'Keep me signed in' is not selected
 *  When I click on 'Log In'
 *  Then I verify "Find your account and log in" is displayed
 *  And I verify 'Continue' button is enabled
 *  And I verify 'Keep me signed in' is not selected
 *  When I click 'Keep me signed in'
 *  Then I verify 'Keep me signed in' is selected
 */
it('Verify empty messenger login flow', async () => {

    await browser.url('https://www.facebook.com');
    await browser.pause(4000);

    const clickMessengerLink = await $('=Messenger').click();
    await browser.pause(4000);

    const keepMeSignedIn = await $('input[type=checkbox]');
    const isKeepMeSignedInSelected = await keepMeSignedIn.isSelected();
    expect(isKeepMeSignedInSelected, 'Keep me signed in is selected').not.to.be.true;

    const logInButton = await $('#loginbutton');
    await logInButton.scrollIntoView();
    await logInButton.click();

    await browser.pause(3000);


    const findYourAccLink = await $('=Find your account and log in.');
    const isFindYourAccLinkDisplayed = await findYourAccLink.isDisplayed();
    expect(isFindYourAccLinkDisplayed, '"Find your account and log in" link is not displayed').to.be.true;

    const isContinueButtonEnabled = await $('#loginbutton').isEnabled();
    expect(isContinueButtonEnabled, 'Continue button is not enabled').to.be.true;

    expect(isKeepMeSignedInSelected, 'Keep me signed in is selected').not.to.be.true;

    const clickKeepMeSignedIn = await $('label=Keep me signed in').click();
    await browser.pause(4000);
    const newCheckbox = await $('input[type=checkbox]').isSelected();

    expect(newCheckbox, 'Keep me signed in is selected').to.be.true;
});

})  
