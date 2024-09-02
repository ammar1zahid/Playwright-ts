import { test, expect, Page, Browser, BrowserContext } from '@playwright/test';
import { chromium } from '@playwright/test';

//Testing Mouse Hover

test('Mouse Hover', async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const browserContext: BrowserContext = await browser.newContext();
  const page: Page = await browserContext.newPage();

    await page.goto('https://www.spicejet.com/');

    page.getByText('Add-ons').first().hover();
    page.getByText('Taxi').first().click();

        await new Promise(()=>{}); 
  //await browser.close();
});
