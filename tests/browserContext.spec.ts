import { test, expect, Page,Browser,Locator, BrowserContext } from '@playwright/test';
import { webkit,chromium, firefox } from '@playwright/test';


// To successfully visit a login page, enter the correct email and password, login, then logout
test('Valid Login', async ({ page }: { page: Page }) => {
  
  const browser:Browser = await chromium.launch({headless:false ,channel:'chrome'})


//Browser no.1 

  const browserContext_1: BrowserContext = await browser.newContext()
    
  const page_1:Page = await browserContext_1.newPage()
  
  
  await page_1.goto('https://customer.ntgs.pk/');

  await page_1.waitForTimeout(2000);

  // Find the input field by its placeholder text and type into it
  await page_1.fill('input[placeholder="Enter your email"]', 'ammar@mail.com');

  // Fill in the password field using the input's type attribute
  await page_1.fill('input[type="password"]', '123456');

  // Click the login button using its CSS class
  await page_1.click('button.btn.w100.mt-4.btn-block.btn-info');

  // Check that the URL contains "/home"
  await expect(page_1).toHaveURL(/.*\/home/);


//Browser no.2 

  const browserContext_2: BrowserContext = await browser.newContext()
    
  const page_2:Page = await browserContext_2.newPage()
  
  
  await page_2.goto('https://customer.ntgs.pk/');

  await page_2.waitForTimeout(2000);

  // Find the input field by its placeholder text and type into it
  await page_2.fill('input[placeholder="Enter your email"]', 'zahid@mail.com');

  // Fill in the password field using the input's type attribute
  await page_2.fill('input[type="password"]', '123456');

  // Click the login button using its CSS class
  await page_2.click('button.btn.w100.mt-4.btn-block.btn-info');

  // Check that the URL contains "/home"
  await expect(page_2).toHaveURL(/.*\/home/);

  // Click the profile picture to open the dropdown
//   await page_1.click('a.d-flex.align-items-center.nav-link.dropdown-toggle.dropdown-toggle-nocaret');

//   // Click the dropdown item using the href attribute
//   await page_1.click('a[href="https://customer.ntgs.pk/login/logout"]');

//   // Check that the URL contains "/login"
//   await expect(page).toHaveURL(/.*\/login/);
});
