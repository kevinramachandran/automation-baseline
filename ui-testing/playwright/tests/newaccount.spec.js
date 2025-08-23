const { test, expect } = require('@playwright/test');

test.describe('Parabank New Account', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.fill('input[name="username"]', 'john');
    await page.fill('input[name="password"]', 'demo');
    await page.click('input[value="Log In"]');
  });

  test('should open new account successfully', async ({ page }) => {
    await page.click('a[href*="openaccount"]');
    await page.selectOption('#fromAccountId', { index: 0 });
    await page.click('input[value="Open New Account"]');

    await expect(page.locator('#newAccountId')).toBeVisible();
  });

});
