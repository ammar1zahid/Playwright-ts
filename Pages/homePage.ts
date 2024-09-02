import { Page } from "@playwright/test";

export default class HomePage {


    constructor(public page: Page) {

    }

    async clickOnSpecialHotMenu() {

            
        //await    this.page.click("(//span[contains(text(),'Special')]/../..)[2]")
        await this.page.waitForLoadState('networkidle'); // Wait for no network activity
        await this.page.click("(//span[contains(text(),'Special')]/../..)[2]");
        
    }
}