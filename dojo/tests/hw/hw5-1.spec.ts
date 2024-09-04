import { expect, test } from "@playwright/test";
import { before, beforeEach } from "node:test";

test.beforeEach(async({page}) => {
    await page.goto('https://demo.learnwebdriverio.com/')
})

test.describe('Xpath lesson on learn webdriver', async() => {
    const randomValue = Math.floor(Math.random() * 999 )

    test.skip('Sign up', async({page}) => {
        await page.locator('//a[@href="/register"]').click()
        await page.locator('//input[@placeholder="Username"]').fill('sashko')
        await page.locator('//input[@placeholder="Email"]').fill('oleksandr@test.js')
        await page.locator('//input[@placeholder="Password"]').fill('sashko911')
        await page.locator('//button[@class="btn btn-lg btn-primary pull-xs-right"]').click()
    })
    
    test('Create article', async ({page}) => {
        await page.locator('//a[@href="/login"]').click()
        await page.locator('//input[@placeholder="Email"]').fill('oleksandr@test.js')
        await page.locator('//input[@placeholder="Password"]').fill('sashko911')
        await page.locator('//button[@class="btn btn-lg btn-primary pull-xs-right"]').click()
        await page.locator('//a[@href="/editor"]').click()
        await page.locator('//input[@data-qa-id="editor-title"]').fill(`Test${randomValue}`)
        await page.locator('//input[@data-qa-id="editor-description"]').fill(`Description Test${randomValue}`)
        await page.locator('//textarea[@class="auto-textarea-input no-border no-resize"]').fill(`text area ${randomValue}`)
        await page.locator('//button[@data-qa-id="editor-publish"]').click()
        await expect(page.locator('//h1[@data-qa-id="article-title"]')).toHaveText(`Test${randomValue}`)
    })

    test('Expected title', async ({page}) => {
        await expect(page.locator('(//h1[@data-qa-type="preview-title"])[1]')).toHaveText(`Test${randomValue}`)
    })
})



//input[@data-qa-id="editor-tags"]
//button[@class="op-icon fa fa-mavon-bold"]
//button[@class="op-icon fa fa-mavon-italic"]
//button[@class="op-icon fa fa-mavon-underline"]
//button[@class="op-icon fa fa-mavon-strikethrough"]

// 1) goto https://demo.learnwebdriverio.com/
// 2) авторизуйтесь під юзером (якого ви створили в ручну і використовуєте для подальшого тестування) 
// 3) Переходьте на сторінку New Article 
// 4) Створіть Артікл (заповнюйте всі поля) 
// 5) Перевірте що артікл створився 

// ВИКОРИСТОВУЙТЕ ЛИШЕ XPATH для знаходження елементів
// шпаргалка по XPATH: https://github.com/qa-senpai/test-automation-example/blob/main/cheat-sheets/xpath.md