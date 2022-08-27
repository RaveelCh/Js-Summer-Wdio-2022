const { expect, assert } = require("chai");

const moment = require("moment");

const commands = require("./commands");

class homework_5_hotels {
  
    now = new moment();
  
    lCommands = new commands();
  
    //hotels
  dateForm = "#date_form_field-btn";
  goingTo = "//button[@aria-label='Going to']";
  emptyGoingTo = "#destination_form_field";
  doneButton = '//button[@data-stid = ("apply-date-picker")]';
  searchButtonHotels = '//button[@id="submit_button"]';
  locationTitle = '//div[@data-test-id = ("content-location-title")]';
  dateTitle = '//span[@data-test-id = ("playback-date-range")]';

  async dateFormClick() {
    let click = await this.lCommands.findWebElement(this.dateForm);
    return click.click();
  }
  async goingToClick() {
    let click = await this.lCommands.findWebElement(this.goingTo);
    return click.click();
  }
  async emptyGoingToText(text) {
    let destination = await this.lCommands.findWebElement(this.emptyGoingTo);
    return destination.setValue(text);
  }
  async doneButtonClick() {
    let click = await this.lCommands.findWebElement(this.doneButton);
    return click.click();
  }
  async searchButtonHotelsClick() {
    let click = await this.lCommands.findWebElement(this.searchButtonHotels);
    return click.click();
  }
  async locationTitleText() {
    let text = await this.lCommands.getTextFunction(this.locationTitle);
    return text.toLowerCase();
  }
  async dateTitleText() {
    let text = await this.lCommands.getTextFunction(this.dateTitle);
    return text.toLowerCase();
  }
  async typingDestination() {
    const textInDestination = await $("#destination_form_field");
    return textInDestination.setValue(text);
  }

  async intoGoingToField(text) {
    const autoSuggestionElements = await $$("//div[@class='truncate']//strong");
    for (const autoSuggestionElement of autoSuggestionElements) {
      const suggestionText = await autoSuggestionElement.getText();
      if (
        suggestionText.toLowerCase().localeCompare(text.toLowerCase()) === 0
      ) {
        await autoSuggestionElement.click();
        break;
      }
    }
  }
  async september2022(data) {
    const allSepDateElements = await $$(
      '//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]'
    );
    for (const dateElement of allSepDateElements) {
      const date = await dateElement.getAttribute("data-day");
      if (date.localeCompare(data) === 0) {
        await dateElement.click();
        break;
      }
    }
  }
  async august2022fromTodayEnabled(data) {
    await $$(
      '//h2[text()="August 2022"]/following-sibling::table//button[not(@disabled)]'
    );
    let now = moment();
    let newNumber = now.date() + data;
    let enabled = await $("//button[@data-day=" + newNumber + "]");
    return enabled.isEnabled();
  }
  async august2022fromToday(data) {
    const allAugDateElements = await $$(
      '//h2[text()="August 2022"]/following-sibling::table//button[not(@disabled)]'
    );
    let now = moment();
    let newNumber = now.date() + data;
    for (const dateElement of allAugDateElements) {
      const date = await dateElement.getAttribute("data-day");
      if (date.localeCompare(newNumber) === 0) {
        await dateElement.click();
        break;
      }
    }
  }
  async intoGoingToFieldandClick(text) {
    const textInDestination = await $("#destination_form_field");
    textInDestination.setValue(text);
    await browser.pause(2000);
    const autoSuggestionElements = await $$("//div[@class='truncate']//strong");
    for (const autoSuggestionElement of autoSuggestionElements) {
      const suggestionText = await autoSuggestionElement.getText();
      if (
        suggestionText.toLowerCase().localeCompare(text.toLowerCase()) === 0
      ) {
        await autoSuggestionElement.click();
        break;
      }
    }
  }
  async pastMonthsEnabled() {
    '//h2[text()="August 2022"]/following-sibling::table//button[not(@disabled)]';
  }
  async comparingFirstDate() {
    this.lCommands.smallerWindow();
    let str = await $(
      '//span[@data-test-id = ("playback-date-range")]'
    ).getText();
    let index = str.search(/[0-9]/);
    let firstNum = Number(str[index] + str[index + 1]);
    return firstNum;
  }
  async comparingSecondDate() {
    this.lCommands.smallerWindow();
    let str = await $(
      '//span[@data-test-id = ("playback-date-range")]'
    ).getText();
    let lastNum = Number(str[str.length - 2] + str[str.length - 1]);
    return lastNum;
  }
}
module.exports = homework_5_hotels;