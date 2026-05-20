const { test, expect } = require('@playwright/test');

test('remove from cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page).toHaveURL(/inventory/);
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('#shopping_cart_container').click();
  await page.locator('#remove-sauce-labs-backpack').click();
  await expect(page).toHaveURL(/cart/);
});