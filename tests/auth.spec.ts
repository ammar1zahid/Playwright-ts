import { test, expect, Page, Browser, BrowserContext } from '@playwright/test';
import { chromium } from '@playwright/test';

//Testing Authentication Pop up

test('Valid Auth', async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const browserContext: BrowserContext = await browser.newContext();
  const page: Page = await browserContext.newPage();

//URL of website with basic auth
// await page.goto('https://the-internet.herokuapp.com/basic_auth');

        // Corrected URL format with basic authentication 
        //hard code username and password (NOT RECOMMENDED)
        //await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');

  // Recommended Method using btoa 
    //Because JS use BTOA method to store our username and password 

        const username = 'admin'
        const password = 'admin'
        const authHeader='Basic '+btoa(username+':'+password)

        page.setExtraHTTPHeaders({Authorization : authHeader})

        await page.goto('https://the-internet.herokuapp.com/basic_auth');


        //await new Promise(()=>{}); 
  await browser.close();
});
