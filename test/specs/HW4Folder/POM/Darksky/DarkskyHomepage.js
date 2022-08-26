const { expect, assert } = require("chai");
const commands = require("../Commands");

new commands = Commands


class DSHomePage {


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
    

feelsLike = '//span[contains(@class, "feels-like-text")]'
lowTemp = '//span[contains(@class, "low-temp-text")]'
highTemp =  '//span[contains(@class, "high-temp-text")]'
zipCodeChecker = '//span[@class="summary swap"]'   
searchButton = '//form[@id="searchForm"]//img[@alt="Search Button"]'

async getFeelsLikeTemp () {
    let feelsLikeText = await this.Commands.getTextFunction(this.feelsLike)
    return parseInt(feelsLikeText)
}
async getLowTemp () {
    let feelsLikeText = await this.Commands.getTextFunction(this.lowTemp)
    return parseInt(feelsLikeText)
}
async getHighTemp () {
    let feelsLikeText = await this.Commands.getTextFunction(this.highTemp)
    return parseInt(feelsLikeText)
}
async valueInSearchDS(data) {
        const searchForm = await $('//form[@id="searchForm"]/input');
        await searchForm.setValue(data);      
    }                       
async zipCodeCheck() {
    return await this.Commands.isElementDisplayed(this.zipCodeChecker)
}
async searchButtonClick () {
    let button = await this.Commands.findWebElement(this.searchButton)
    return button.click()
}
}

module.exports = DSHomePage