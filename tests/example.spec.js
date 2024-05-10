const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test', async ({ page }) => {
  await page.goto('https://demo.serenity.is/Account/Login/?ReturnUrl=%2F');
  await page.getByPlaceholder('admin').click();
  await page.getByPlaceholder('admin').fill('admin');
  await page.getByPlaceholder('admin').press('Tab');
  await page.getByPlaceholder('serenity').fill('serenity');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: ' Organization ' }).click();
  await page.getByRole('link', { name: ' Business Units' }).click();
  await page.getByText('New Business Unit').click();
  await page.getByLabel('*Name').fill('hola');
  await page.getByRole('link', { name: '--select-- ' }).click();
  await page.getByRole('option', { name: 'Administration', exact: true }).click();
  await page.getByText('Save').click();
  await expect(page.locator('div').filter({ hasText: /^hola$/ })).toBeVisible();
});
