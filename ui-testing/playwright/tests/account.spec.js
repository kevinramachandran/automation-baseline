import { test, expect } from '@playwright/test';
import { users } from '../utils/testData.js';

test.describe('Account Overview', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.fill('input[name="username"]', users.validUser.username);
    await page.fill('input[name="password"]', users.validUser.password);
    await page.click('input[value="Log In"]');
    await expect(page.locator('text=Accounts Overview')).toBeVisible();
  });

  test('Check accounts overview page', async ({ page }) => {
    await page.click('a[href*="overview"]');
    await expect(page.locator('h1.title')).toContainText('Accounts Overview');
    const accounts = await page.locator('table tbody tr').count();
    expect(accounts).toBeGreaterThan(0);
  });

});
