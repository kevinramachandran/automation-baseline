import { test, expect } from '@playwright/test';

test.describe('Parabank Fund Transfer Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Go to Parabank login
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // Perform login (use a valid user created earlier)
    await page.fill('input[name="username"]', 'john');
    await page.fill('input[name="password"]', 'demo');
    await page.click('input[value="Log In"]');

    // Assert login successful
    await expect(page.locator('text=Accounts Overview')).toBeVisible();

    // Navigate to Transfer Funds page
    await page.click('a[href*="transfer.htm"]');
    await expect(page.locator('text=Transfer Funds')).toBeVisible();
  });

  test('Successful fund transfer', async ({ page }) => {
    // Fill form
    await page.fill('input[name="amount"]', '100');
    await page.selectOption('select#fromAccountId', { index: 0 });
    await page.selectOption('select#toAccountId', { index: 1 });

    // Submit
    await page.click('input[value="Transfer"]');

    // Verify success
    await expect(page.locator('text=Transfer Complete!')).toBeVisible();
  });

  test('Fund transfer with invalid amount', async ({ page }) => {
    // Leave invalid input
    await page.fill('input[name="amount"]', '-50');
    await page.selectOption('select#fromAccountId', { index: 0 });
    await page.selectOption('select#toAccountId', { index: 1 });

    // Submit
    await page.click('input[value="Transfer"]');

    // Verify failure message
    await expect(page.locator('text=The amount cannot be negative')).toBeVisible();
  });
});
