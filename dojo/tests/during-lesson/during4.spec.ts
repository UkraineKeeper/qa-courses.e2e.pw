import {test, expect} from "@playwright/test";

test('Sign in with wrong credentials', async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/');
    await page.locator('//a[@href="/login"]').click()
    // await page.locator('//input[@type="email"]').click()
    await page.locator('//input[@type="email"]').fill("gogo@gmail.com")
    await page.locator('//input[@type="password"]').fill("start123")
    await page.locator('//button').click()

})