import { test, expect, Page, Browser, BrowserContext } from '@playwright/test';
import { chromium } from '@playwright/test';

// Testing different types of clicks
test('Clicks', async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const browserContext: BrowserContext = await browser.newContext();
  const page: Page = await browserContext.newPage();

  await page.goto('https://demo.guru99.com/test/simple_context_menu.html');


  //double click
  //await page.getByText('Double-Click Me To See Alert').dblclick()


  // Double-click using a more specific selector
   const button = await page.locator('button[ondblclick="myFunction()"]');
   const testTEXT= await button.textContent();

   await console.log(testTEXT)

  // // Wait for the alert to be visible
  // const alert = await page.waitForEvent('dialog');

  // // Optionally, you can handle the alert
  // console.log('Alert message:', alert.message());
  // await alert.accept();

  await page.waitForTimeout(10000);
  //await browser.close();
});
