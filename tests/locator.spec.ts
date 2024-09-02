import { test, expect, Page,Browser,Locator, BrowserContext } from '@playwright/test';
import { webkit,chromium, firefox } from '@playwright/test';

//testing different locators
//to successfully visit a login page, enter correct email pwd, login , then logout
test("Valid Login", async function({page})
{
    await page.goto("https://customer.ntgs.pk/")

    // await page.getByPlaceholder("Please enter your Phone Number or Email").type(Ammar)

        await page.waitForTimeout(2000)

        // Find the input field by its placeholder text and type into it
        await page.fill('input[placeholder="Enter your email"]', 'ammar@mail.com');

        // Find the input field by its placeholder text and type into it slowly
        //await page.type('input[placeholder="Enter your email"]', 'ammar@mail.com', { delay: 100 });


        // Fill in the password field using the input's type attribute
        await page.fill('input[type="password"]', '123456');

            //few other ways to access this password input field
            //<input type="password" name="password" id="password" class="form-control" placeholder="Enter your password" aria-label="">

                //by id attribute
                //await page.fill('#password', '123456');
                    //await page.locator('id=password').fill( '123456');

                    // const password:Locator=page.locator('id=password')
                    // await password.fill('123456')

                //by name attribute
                //await page.fill('input[name="password"]', '123456');

                //by class attribute
                //await page.fill('input.form-control', '123456');

                //by aria-label attribute
                //await page.fill('input[aria-label=""]', '123456');

                //by placeholder attribute
                //await page.fill('input[placeholder="Enter your password"]', '123456');

                //by combing attributes
                //await page.fill('input[type="password"][id="password"]', '123456');

                //by css selectors (hierarchy)

                //by Xpath selector

                //const password:Locator=page.locator('xpath=//input[@id="password"')
                //  const password:Locator=page.locator('xpath=//input[@id="password" and @type="password"]')
                // await password.fill('123456')


                //by TestId 
                
                //by default page.getByTestId() will locate element based on data-testid attribute only
                //if you have custom name you can configure in playwright.config.ts

                //await page.getByTestId('password').fill('123456')


                // by ARIA Role

                await expect(page.getByRole('heading',{name:'Sign In'})).toBeVisible();

        // Click the login button using its CSS class
        await page.click('button.btn.w100.mt-4.btn-block.btn-info');

            //assertion for checking with full url
            // await expect(page).toHaveURL("https://customer.ntgs.pk/home")

        // Check that the URL contains "/home"
        await expect(page).toHaveURL(/.*\/home/);

         // Click the profile picture to open the dropdown
        await page.click('a.d-flex.align-items-center.nav-link.dropdown-toggle.dropdown-toggle-nocaret');
        
        // Click the dropdown item using the href attribute
        await page.click('a[href="https://customer.ntgs.pk/login/logout"]');

        await expect(page).toHaveURL(/.*\/login/)      

})