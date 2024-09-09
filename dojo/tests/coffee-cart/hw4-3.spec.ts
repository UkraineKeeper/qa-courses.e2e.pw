import {test, expect} from "@playwright/test";

// Can I verify specific 3 orders are the same on Cart page (drinks names)

test.beforeEach( async ( {page})   => {
    await page.goto('https://coffee-cart.app/');
})

test.afterEach( async ({page}) => {
    await page.goto('https://playwright.dev/')
})

test.afterAll (async ({page}) => {
    await page.goto('https://google.com')
})

test.describe('Coffee App Test Complect', async() => {
    
    test('Remove from total', async ({ page }) => {
        await page.locator('[data-test="Cappuccino"]').click();
        await page.locator('[data-test="Espresso_Macchiato"]').click();
        await expect(page.locator('#app')).toContainText('cart (2)');
        await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $31.00');
        await page.locator('[data-test="checkout"]').hover();
        await page.getByLabel('Remove one Cappuccino').click();
        await page.getByLabel('Remove one Espresso Macchiato').click();
        await page.locator('[data-test="checkout"]').click();
      });

      test('No coffee state on cart page', async ({ page }) => {
        await page.getByLabel('Cart page').click();
        await expect(page.getByRole('paragraph')).toContainText('No coffee, go add some.');
      });

      test('Cart page with ordered details', async ({ page }) => {
        await page.locator('[data-test="Mocha"]').click();
        await page.locator('[data-test="Flat_White"]').click();
        await page.locator('[data-test="Americano"]').click();
        await page.getByLabel('Cart page').click();
        await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $33.00');
        await page.getByRole('button', { name: 'Add one Americano' }).click();
        await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $40.00');
      });

      test('Remove orders from Cart page', async( {page}) => {
        await page.locator('[data-test="Espresso"]').click();
        await page.locator('[data-test="Espresso_Macchiato"]').click();
        await page.locator('[data-test="Cappuccino"]').click();
        await page.locator('li').filter({ hasText: 'Espresso $10.00espresso' }).locator('div').nth(4).click(); // what?
        await page.locator('[data-test="Flat_White"]').click();
        await page.locator('[data-test="Americano"]').click();
        await page.getByLabel('Cart page').click();
        await page.getByLabel('Remove all Flat White').click();
        await page.getByLabel('Remove all Espresso Macchiato').click();
        await page.getByLabel('Remove all Espresso').click();
        await page.getByLabel('Remove all Cappuccino').click();
        await page.getByLabel('Remove all Americano').click();
        await expect(page.getByRole('paragraph')).toContainText('No coffee, go add some.');
      })

      test('Modal after 3rd selected drink', async( {page}) => {
        await page.locator('[data-test="Espresso"]').click();
        await page.locator('[data-test="Espresso_Macchiato"]').click();
        await page.locator('[data-test="Cappuccino"]').click();
        await expect(page.getByRole('button', { name: 'Nah, I\'ll skip.' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Yes, of course!' })).toBeVisible();
        await expect(page.locator('.promo > div').first()).toBeVisible();
        await expect(page.locator('#app')).toContainText('It\'s your lucky day! Get an extra cup of Mocha for $4.');
        await page.getByRole('button', { name: 'Yes, of course!' }).click();
        await page.getByLabel('Cart page').click();
        await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $45.00');
      })

      test('Redirection from cart & github wont drop total', async( {page} ) => {
        await page.locator('[data-test="Espresso"]').click();
        await page.locator('[data-test="Espresso_Macchiato"]').click();
        await page.locator('[data-test="Cappuccino"]').click();
        await page.locator('li').filter({ hasText: 'cart (3)' }).click();
        await page.locator('li').filter({ hasText: 'github' }).click();
        await page.getByLabel('Menu page').click();
        await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $41.00');
      })

      test('Removing from cart from first to last', async({page}) => { // (seems like bug in generator (multiple click needed))
        await page.locator('[data-test="Espresso"]').click();
        await page.locator('[data-test="Espresso_Macchiato"]').click();
        await page.locator('[data-test="Cappuccino"]').click();
        await page.locator('[data-test="Mocha"]').click();
        await page.locator('[data-test="Flat_White"]').click();
        await page.locator('[data-test="Americano"]').click();
        await page.locator('[data-test="Cafe_Latte"]').click();
        await page.locator('[data-test="Espresso_Con Panna"]').click();
        await page.locator('[data-test="Cafe_Breve"]').click();
        await page.getByLabel('Cart page').click();
        await page.getByLabel('Remove all Americano').click();
        await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $112.00');
        await page.getByLabel('Remove all Cafe Breve').click();
        await page.getByLabel('Remove all Cafe Latte').click();
        await page.getByLabel('Remove all Cappuccino').click();
        await page.getByLabel('Remove all Espresso', { exact: true }).click();
        await page.getByLabel('Remove all Espresso Con Panna').click();
        await page.getByLabel('Remove all Espresso Macchiato').click();
        await page.getByLabel('Remove all Flat White').click();
        await page.getByLabel('Remove all Mocha').click();
      })

      test('Submit order', async({page}) => {
        await page.locator('[data-test="Espresso"]').click();
        await page.locator('[data-test="Espresso_Macchiato"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.getByLabel('Name').fill('alex');
        await page.getByLabel('Name').press('Tab');
        await page.getByLabel('Email').fill('alex@alex.alex');
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.locator('#app')).toContainText('Thanks for your purchase. Please check your email for payment.');
      })

      test('Check from generator, exceeded', async ( {page}) => {
        await expect(page.locator('[data-test="Espresso"]')).toBeVisible();
        await expect(page.locator('[data-test="Espresso_Macchiato"]')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Espresso $' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Espresso Macchiato $' })).toBeVisible();
        await page.locator('[data-test="Cappuccino"]').click();
        await page.locator('[data-test="Cappuccino"]').click();
        await page.locator('[data-test="Americano"]').click();
        await page.getByRole('button', { name: 'Nah, I\'ll skip.' }).click();
        await page.locator('[data-test="checkout"]').click();
        await page.getByLabel('Name').fill('Alex');
        await page.getByLabel('Name').press('Tab');
        await page.getByLabel('Email').fill('alex@alex.alex');
        await page.getByLabel('Promotion message').click();
        await page.getByLabel('Promotion checkbox').click();
        await page.getByRole('button', { name: 'Submit' }).click();
    });
})
