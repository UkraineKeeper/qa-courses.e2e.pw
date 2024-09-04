import { test, expect } from '@playwright/test';

// Playwrite code generator issues:
// Space isn't working
// Watch youtube can't be verified

test.describe('Home Work Lesson 2', async() => {
  test('Assert menu page text elements on Get Started page', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page.getByLabel('Main', { exact: true })).toContainText('Docs');
    await expect(page.getByLabel('Main', { exact: true })).toContainText('API');
    await expect(page.getByLabel('Main', { exact: true })).toContainText('Node.js');
    await expect(page.getByLabel('Main', { exact: true })).toContainText('Community');
    await expect(page.getByLabel('Main', { exact: true }).locator('b')).toContainText('Playwright');
  });

  test('Verify sidebar elements clickable on Installation page', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await page.getByRole('main').locator('div').filter({ hasText: 'Getting StartedInstallationOn' }).nth(2).click();
    await page.getByRole('heading', { name: 'Installation' }).click();
    await page.getByRole('link', { name: 'Installing Playwright', exact: true }).click();
    await page.getByRole('link', { name: 'What\'s Installed' }).nth(2).click();
    await page.getByRole('link', { name: 'Running the Example Test', exact: true }).click();
    await page.getByRole('link', { name: 'HTML Test Reports', exact: true }).click();
    await page.getByRole('link', { name: 'Running the Example Test in UI Mode', exact: true }).click();
    await page.getByRole('link', { name: 'Updating Playwright', exact: true }).click();
    await page.getByRole('link', { name: 'System requirements', exact: true }).click();
    await page.getByRole('link', { name: 'What\'s next', exact: true }).click();
  });

  test('Verify left sidebar expandability on Docs page', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await page.getByRole('button', { name: 'Playwright Test' }).click();
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
    await page.getByLabel('Search').click();
    await page.getByPlaceholder('Search docs').fill('ci');
    await page.getByRole('link', { name: 'Reporters on CI​ Reporters' }).click();
    await expect(page.locator('#third-party-reporter-showcase')).toContainText('Third party reporter showcase');
  });

  test('Verify redirection forward & back on Getting Started', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
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
    await page.getByRole('link', { name: 'Get started' }).click();
    await page.getByRole('link', { name: 'Community' }).click();
    await page.getByRole('link', { name: 'Conference Videos' }).click();
    await page.locator('li').filter({ hasText: 'BreizhCamp2023Playwright : l\'' }).getByLabel('Watch Playwright : l\'outil').click();await page.frameLocator('iframe[title="Playwright \\: l\\\'outil qui va révolutionner les tests end-to-end"]').locator('video').click();
    await page.frameLocator('iframe[title="Playwright \\: l\\\'outil qui va révolutionner les tests end-to-end"]').getByLabel('Full screen keyboard shortcut').click();
    await page.frameLocator('iframe[title="Playwright \\: l\\\'outil qui va révolutionner les tests end-to-end"]').locator('.ytp-progress-bar-padding').click();
    await page.frameLocator('iframe[title="Playwright \\: l\\\'outil qui va révolutionner les tests end-to-end"]').locator('.ytp-progress-bar-padding').click();
    await page.frameLocator('iframe[title="Playwright \\: l\\\'outil qui va révolutionner les tests end-to-end"]').locator('.ytp-timed-markers-container').click();
  });
})

