class commands {


    /**
     * Generic function to find a webElement
     * Input: locator
     */
    async findWebElement(locator) {
        return await $(locator);
    }

    /**
     * Generic function to click a webElement
     * Input: locator
     */
    async clickWebElement(locator) {
        const element = await this.findWebElement(locator);
        await element.click();
    }

    /**
     * Generic function to type a webElement
     * Input: locator, data
     */
    async typeInWebElement(locator, data) {
        const element = await this.findWebElement(locator);
        await element.setValue(data);
    }

    /**
     * Generic function to find if WebElement is enabled
     * Input: locator
     */
    async isWebElementEnabled(locator) {
        const element = await this.findWebElement(locator);
        return await element.isEnabled();
    }

    /**
     * Generic function to select value form Dropdown (with select-tag)
     * Input: locator, selectThis
     */
    async selectFromDropdown(locator, selectThis) {
        const dropdownElement = await this.findWebElement(locator);
        await dropdownElement.selectByVisibleText(selectThis);
    }

    async getTextFromWebElement(locator) {
        const element = this.findWebElement(locator);
        return await element.getText();
    }


}
module.exports = commands;