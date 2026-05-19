const { test, expect } = require('@playwright/test');

test('invalid login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('wrong');
  await page.locator('#password').fill('wrong');
  await page.locator('#login-button').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});