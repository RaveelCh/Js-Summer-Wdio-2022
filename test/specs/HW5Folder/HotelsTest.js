const { expect, assert } = require("chai");
const commands = require("./commands");
const homework_5_hotels = require("./HotelsPOM");

new commands = lcommands

new homework_5_hotels = commands

describe("Hotels.com", () => {


    it(" Verify past dates of the current month is not enabled", async () => {
    
        await browser.url("https://www.hotels.com");
        await browser.pause(2000);
    
        await commands.dateFormClick();
        await browser.pause(2000);
    
        expect(await commands.august2022fromTodayEnabled(-2), "it is enabled").to.be
      .false;
  
    });
  


    it("Verify destination and check-in and check-out dates are as user selected", async () => {
    
        await browser.url("https://www.hotels.com");
        await browser.pause(2000);
    
        await commands.goingToClick();
    
        await commands.emptyGoingToText("man");
        await browser.pause(2000);
    
        await commands.intoGoingToField("manila");
        await browser.pause(2000);
    
        await commands.dateFormClick();
    
        await commands.august2022fromToday(1);
        await browser.pause(2000);
    
        await commands.august2022fromToday(6);
        await browser.pause(2000);
    
        await commands.doneButtonClick();
        await browser.pause(2000);
        
        await commands.searchButtonHotelsClick();
        await browser.pause(2000);
    
        await lcommands.smallerWindow();
        await browser.pause(2000);
    
    expect(
      await commands.locationTitleText(),
      "this does not contain it"
    ).to.contain("mAnILa".toLowerCase());
    expect(
      (await commands.comparingSecondDate()) -
        (await commands.comparingFirstDate()),
      "this does not equal 5 "
    ).to.equal(5);
 
 
    });


});