import { test, expect } from '@playwright/test';

test.describe('tba', async() => {
    test('tba', async ({ page }) => {
      await page.goto('https://telemart.ua/ua/');
    });

});