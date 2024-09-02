import { expect, test } from "@playwright/test";
import RegisterPage from "../Pages/registerPage"
import LoginPage from "../Pages/loginPage"
import HomePage from "../Pages/homePage"
import SpecialHotPage from "../Pages/specialHotPage"


const baseURL= "https://ecommerce-playground.lambdatest.io/index.php?"

const myEmail = "ammar@mail.com";
const myPassword = "Ammar@123";
test.describe("Page object test demo", async () => {

    test("Register test_01", async ({ page }, testInfo) => {

        console.log('TITLE: ' + testInfo.title);

        const register = new RegisterPage(page);
        
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("Ammar");
        await register.enterLastName("Zahid")
        await register.enterEmail(myEmail);
        await register.enterTelephone("1234567890")
        await register.enterPassword(myPassword);
        await register.enterConfirmPassword(myPassword);
        expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTermandConditon();
        await register.clickContinueToRegister();
        console.log('STATUS: ' + testInfo.status);


    })

    
})