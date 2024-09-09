import { test, expect } from '@playwright/test';

// Playwrite code generator issues:
// Space isn't working
// Watch youtube can't be verified

test.describe('Home Work Lesson 4', async() => {
  test('Assert menu page text elements on Get Started page', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page.locator('a.navbar__item[href="/docs/intro"]')).toContainText('Docs');
    await expect(page.locator('a.navbar__item[href="/docs/api/class-playwright"]')).toContainText('API');
    await expect(page.locator('.navbar__item.dropdown.dropdown--hoverable')).toContainText('Node.js');
    await expect(page.locator('a.navbar__item[href="/community/welcome"]')).toContainText('Community');
    await expect(page.locator('.navbar__title')).toContainText('Playwright');
  });

  test('Verify sidebar elements clickable on Installation page', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.locator('.getStarted_Sjon').click();
    // await page.getByRole('main').locator('div').filter({ hasText: 'Getting StartedInstallationOn' }).nth(2).click();
    await page.locator('li > a[href="#introduction"]').click();
    await page.locator('li > a[href="#installing-playwright"]').click();
    await page.locator('li > a[href="#whats-installed"]').click();
    await page.locator('li > a[href="#running-the-example-test"]').click();
    await page.locator('li > a[href="#html-test-reports"]').click();
    await page.locator('li > a[href="#running-the-example-test-in-ui-mode"]').click();
    await page.locator('li > a[href="#updating-playwright"]').click();
    await page.locator('li > a[href="#system-requirements"]').click();
    await page.locator('li > a[href="#whats-next"]').click();
  });

  test('Verify left sidebar expandability on Docs page', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.locator('.getStarted_Sjon').click();
    await page.getByRole('button', { name: 'Playwright Test' }).click(); // 
    await page.getByRole('button', { name: 'Getting Started' }).click();
    await page.getByRole('button', { name: 'Guides' }).click();
    await page.getByRole('button', { name: 'Integrations' }).click();
    await page.getByRole('button', { name: 'Migration' }).click();
    await page.getByRole('button', { name: 'Guides' }).click();
    await page.getByRole('button', { name: 'Integrations' }).click();
    await page.getByRole('button', { name: 'Migration' }).click();
    await page.getByRole('button', { name: 'Guides' }).click();
  });

  test('Verify search CI article', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.locator('.DocSearch-Button-Container').click();
    await page.locator('.DocSearch-Input').fill('ci');
    await page.locator('a[href="/docs/test-reporters#reporters-on-ci"]').click();
    await expect(page.locator('#third-party-reporter-showcase')).toContainText('Third party reporter showcase');
  });

  test('Verify redirection forward & back on Getting Started', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.locator('.getStarted_Sjon').click();
    await page.getByRole('link', { name: 'What\'s next', exact: true }).click();
    await page.getByRole('link', { name: 'Next Writing tests »' }).click();
    await page.getByRole('link', { name: 'Next Generating tests »' }).click();
    await page.getByRole('link', { name: 'Next Running and debugging' }).click();
    await page.getByRole('link', { name: 'Next Trace viewer »' }).click();
    await page.getByRole('link', { name: 'Next CI GitHub Actions »' }).click();
    await page.getByRole('link', { name: 'Previous « Trace viewer' }).click();
    await page.getByRole('link', { name: 'Previous « Running and' }).click();
    await page.getByRole('link', { name: 'Previous « Generating tests' }).click();
    await page.getByRole('link', { name: 'Previous « Writing tests' }).click();
    await page.getByRole('link', { name: 'Previous « Installation' }).click();
  });

  test('Verify video replaying from the website', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.locator('.getStarted_Sjon').click();
    await page.locator('a.navbar__item[href="/community/welcome"]').click();
    await page.locator('li > a[href="/community/conference-videos"]').click();
    await page.locator('[aria-label*="End to End"]').click();
  });
})

