const { test, expect } = require('@playwright/test');

test.describe('Parabank Bill Payment', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.fill('input[name="username"]', 'john');
    await page.fill('input[name="password"]', 'demo');
    await page.click('input[value="Log In"]');
  });

  test('should pay bill successfully', async ({ page }) => {
    await page.click('a[href*="billpay"]');
    await page.fill('input[name="payee.name"]', 'Utility Company');
    await page.fill('input[name="payee.address.street"]', '123 Main St');
    await page.fill('input[name="payee.address.city"]', 'New York');
    await page.fill('input[name="payee.address.state"]', 'NY');
    await page.fill('input[name="payee.address.zipCode"]', '10001');
    await page.fill('input[name="payee.phoneNumber"]', '1234567890');
    await page.fill('input[name="payee.accountNumber"]', '11111');
    await page.fill('input[name="verifyAccount"]', '11111');
    await page.fill('input[name="amount"]', '150');
    await page.selectOption('select[name="fromAccountId"]', { index: 0 });
    await page.click('input[value="Send Payment"]');

    await expect(page.locator('#rightPanel')).toContainText('Bill Payment Complete');
  });

});
