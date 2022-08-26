const { expect, assert } = require("chai");
const commands = require("../Commands");

new commands = Commands

class fbHomePage {

    
    async clickWebElement(locator) {
        const element = await this.findWebElement(locator);
        await element.click();
    }
    async typeInWebElement(locator, data) {
        const element = await this.findWebElement(locator);
        await element.setValue(data);
    }
    async selectFromDropdown(locator, selectThis) {
        const dropdownElement = await this.findWebElement(locator);
        await dropdownElement.selectByVisibleText(selectThis);
    }
    async isElementDisplayed(locator){
        const element = await this.findWebElement(locator)
        return await element.isDisplayed()
    }
    async pauseFor2Seconds() {
        await browser.pause(2000)
    }
    async smallerWindow(){
        await browser.setWindowSize(300,800)
    }
//Facebook
FBUsername = '//input[@data-testid="royal_email"]'
FBPassword = '//input[@data-testid="royal_pass"]'
loginButton = '//button[text()="Log In"]'
errorMsg = 'div#email_container > ._9ay7'
messenger = '//a[contains(text(),"Messenger")]'
checkbox = 'input[type="checkbox"]'
messengerLoginButton = '//button[@id="loginbutton"]'
findYourAccount = '//a[contains(text(),"Find your account and log in.")]'
continue = 'button#loginbutton'
keepMeSignedIn = '//label[contains(text(),"Keep me signed in")]'

async loginButtonClick (){
    let button = await this.Commands.findWebElement(this.loginButton)
    return button.click()
}
async errorMsgText (){
    let msg = await this.Commands.getTextFunction(this.errorMsg)
    return msg
}
async messengerClick (){
    let click = await this.Commands.findWebElement(this.messenger)
    return click.click()
}
async checkboxCheck (){
    let check = await this.Commands.findWebElement(this.checkbox)
    return check.isSelected()
}
async messengerLoginButtonClick (){
    let click = await this.Commands.findWebElement(this.messengerLoginButton)
    return click.click()
}
async findYourAccountDisplayed (){
    let Displayed = await this.Commands.findWebElement(this.findYourAccount)
    return Displayed.isDisplayed()
}
async continueEnabled (){
    let enabled = await this.Commands.findWebElement(this.continue)
    return enabled.isEnabled()
}
async keepMeSelected (){
    let selected = await this.Commands.findWebElement(this.keepMeSignedIn)
    return selected.isSelected()
}
async keepMeClick (){
    let click = await this.Commands.findWebElement(this.keepMeSignedIn)
    return click.click()
}


}
module.exports = fbHomePage