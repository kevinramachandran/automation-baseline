// tests/login.spec.js
import { test, expect } from '@playwright/test';

test.describe('Parabank Login Tests', () => {

  test('Valid login', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.fill('input[name="username"]', 'john');
    await page.fill('input[name="password"]', 'demo');
    await page.click('input[value="Log In"]');
    await expect(page.locator('text=Accounts Overview')).toBeVisible();
  });

  test('Invalid login - account fetch failed', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.fill('input[name="username"]', 'invalidUser');
    await page.fill('input[name="password"]', 'wrongPass');
    await page.click('input[value="Log In"]');
    await expect(page.locator('.error')).toHaveText('The username and password could not be verified.');
  });

});
