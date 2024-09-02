import { test, expect, Page,Browser,Locator, BrowserContext } from '@playwright/test';
import { webkit,chromium, firefox } from '@playwright/test';

//testing Chaining locators of playwright

test("Chain Locator", async function()
{
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const browserContext: BrowserContext = await browser.newContext();
    const page: Page = await browserContext.newPage();
  
    await page.goto("https://www.orangehrm.com/30-day-free-trial/")

            // await page.locator('form#Form_getForm >> #Form_getForm_Name').fill('Ammar')
            
            // await page.locator('form#Form_getForm >> text=Get Your Free Trial').click()

        //instead of directly clicking on button , this approach allows us to click specifically
        //button in form 

        const form = page.locator('form#Form_getForm');
        const getYourFreeButton= page.getByRole('button',{name:'Get Your Free Trial'})

        await page.locator('form#Form_getForm >> #Form_getForm_Name').fill('Ammar')
        
        await form.locator(getYourFreeButton).click()
      

})