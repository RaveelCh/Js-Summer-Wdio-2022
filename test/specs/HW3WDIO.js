const { expect } = require("chai");

describe('HW3', () => {

// Due - Aug 19 (Friday eod)
/**
 * 
 * Launch darksky.net
 * Get all the timeline data in an array
 * Then print array in the console
 * 
 *   Given I am on darksky.net
 *   Then I print timeline data in an array in the console
 * 
 */
it('Timeline data in Array', async () => {
    
    await browser.url('https://darksky.net');        
    await browser.pause(4000);

    const timeline = await $$("//div[@id='timeline']//div[@class='timeline']//div[@class='hours']//span[not(contains(@class,'hour'))]");
    const array = [];

    for (const hour of timeline){
        array.push(await hour.getText());
    }
    console.log(array)

});

/**
 * Verify destination and check-in/ and check-out dates are as user selected
 * 
 * 1. Launch hotels.com
 * 2. Type "man" in destination
 * 3. Select "Manila" from auto-suggestion
 * 4. Select Aug 20 to Sep-5 as check-in and check-out respectively
 * 5. Click Search button
 * 6. Verify destination has Manila
 * 7. Verify check-in date in Aug-20
 * 8. Verify check-out date in Sep-5
 * 
 * 
 *  Given I am on Hotels.com
 *  When I type "man" in destination
 *      And I select "Manila" from auto-suggestion
 *      And I select Aug 20 to Sep-5 as check-in and check-out respectively
 *      And I click Search button
 *  Then I verify destination has Manila
 *      And I verify check-in date in Aug-20
 *      And I verify check-out date in Sep-5
 * 
 */
it('Verify destination and check-in/ and check-out dates are as user selected', async () => {
   
    await browser.url('https://www.hotels.com/');
    await browser.pause(4000);

    await $("//button[@aria-label='Going to']").click();
    await browser.pause(4000);

    await $('#destination_form_field').setValue('Man');
    await browser.pause(4000);

    const autoSuggestionCities = await $$("//div[@class='truncate']//strong");
    for (const clickCity of autoSuggestionCities) {
        const suggText = await clickCity.getText();
        if (suggText.toLowerCase().localeCompare('manIla'.toLowerCase()) === 0) {
            await clickCity.click();
            break;
        }
    }
    await browser.pause(4000);

    await $('#date_form_field-btn').click();
    await browser.pause(4000);
    
    await $('//button[@data-stid="date-picker-paging"]').click();
    await browser.pause(4000);

    const allAugDateElements = await $$('//h2[text()="August 2022"]/following-sibling::table//button[not(@disabled)]');
    for (const dateElement of allAugDateElements) {
        const date = await dateElement.getAttribute('data-day');
        if (date.localeCompare("20") === 0) {
            await dateElement.click();
            break;
        }
    }
    await browser.pause(4000);


    const allSepDateElements = await $$('//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]');
    for (const dateElement of allSepDateElements) {
        const date = await dateElement.getAttribute('data-day');
        if (date.localeCompare("5") === 0) {
            await dateElement.click();
            break;
        }
    }
    await browser.pause(4000);

    await $('//button[@data-stid="apply-date-picker"]').click();
    await browser.pause(4000);
    
    await $('//button[@id="submit_button"]').click();
    await browser.pause(4000);
    
    const destination = await $("//div[@data-stid='hotels-destination']//div//button[@type='button']").getText();
    console.log(`Destination -> ${destination}`);
 
    const checkInDate = await $('button[data-name=startDate]').getText();
    console.log(`Check in date -> ${checkInDate}`);

    const checkOutDate = await $('button[data-name=endDate').getText();
    console.log(`Check out date -> ${checkOutDate}`);

});
});
