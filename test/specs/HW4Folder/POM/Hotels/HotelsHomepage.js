const { expect, assert } = require("chai");
const commands = require("../Commands");

new commands = Commands

class hotelHomepage  {

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
   

dateForm = '#date_form_field-btn'
goingTo = "//button[@aria-label='Going to']"
emptyGoingTo = '#destination_form_field'
doneButton = '//button[@data-stid = ("apply-date-picker")]'
searchButtonHotels = '//button[@id="submit_button"]'
locationTitle = '//div[@data-test-id = ("content-location-title")]'
dateTitle = '//span[@data-test-id = ("playback-date-range")]'

async dateFormClick (){
    let click = await this.Commands.findWebElement(this.dateForm)
    return click.click()
}
async goingToClick (){
    let click = await this.Commands.findWebElement(this.goingTo)
    return click.click()
}
async emptyGoingToText(text) {
    let destination = await this.Commands.findWebElement(this.emptyGoingTo)
    return destination.setValue(text)
}
async doneButtonClick(){
    let click = await this.Commands.findWebElement(this.doneButton)
    return click.click()
}
async searchButtonHotelsClick(){
    let click = await this.Commands.findWebElement(this.searchButtonHotels)
    return click.click()
}
async locationTitleText (){
    let text = await this.Commands.getTextFunction(this.locationTitle)
    return text.toLowerCase()
}
async dateTitleText (){
    let text = await this.Commands.getTextFunction(this.dateTitle)
    return text.toLowerCase()
}

async intoGoingToField(text) {
const autoSuggestionElements = await $$("//div[@class='truncate']//strong");
for (const autoSuggestionElement of autoSuggestionElements) {
    const suggestionText = await autoSuggestionElement.getText();
    if (suggestionText.toLowerCase().localeCompare(text.toLowerCase()) === 0) {
        await autoSuggestionElement.click();
        break;
    }
}}
async september2022(data) {
    const allSepDateElements = await $$('//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]');
    for (const dateElement of allSepDateElements) {
        const date = await dateElement.getAttribute('data-day');
        if (date.localeCompare(data) === 0) {
            await dateElement.click();
            break;
        }
    }
}

}
module.exports = hotelHomepage