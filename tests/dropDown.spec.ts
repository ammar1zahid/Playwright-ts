import { test, expect, Page,Browser,Locator, BrowserContext } from '@playwright/test';
import { webkit,chromium, firefox } from '@playwright/test';

// To successfully visit a login page, enter the correct email and password, login, then logout
test('Drop down', async () => {
  
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const browserContext: BrowserContext = await browser.newContext();
    const page: Page = await browserContext.newPage();
  
  
    await page.goto('https://customer.ntgs.pk/');

     await page.waitForTimeout(2000);

    // Find the input field by its placeholder text and type into it
    await page.fill('input[placeholder="Enter your email"]', 'ammar@mail.com');

    // Fill in the password field using the input's type attribute
    await page.fill('input[type="password"]', '123456');

  // Click the login button using its CSS class
  await page.click('button.btn.w100.mt-4.btn-block.btn-info');

  // Check that the URL contains "/home"
  await expect(page).toHaveURL(/.*\/home/);

  // Click the profile picture to open the dropdown
  await page.click('a.d-flex.align-items-center.nav-link.dropdown-toggle.dropdown-toggle-nocaret');

  // Click the dropdown item using the href attribute
  await page.click('a[href="https://customer.ntgs.pk/login/logout"]');

  // Check that the URL contains "/login"
  await expect(page).toHaveURL(/.*\/login/);
});
