const { test, expect } = require('@playwright/test');

test('cancel checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page).toHaveURL(/inventory/);
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('#shopping_cart_container').click();
  await expect(page.locator('.cart_item')).toBeVisible();
  await page.locator('#checkout').click();
  await expect(page).toHaveURL(/checkout-step-one/);
  await page.locator('#first-name').fill('firstName');
  await page.locator('#last-name').fill('lastName');
  await page.locator('#postal-code').fill('postalCode');
  await page.locator('#continue').click();
  await expect(page).toHaveURL(/checkout-step-two/);
  await page.locator('#cancel').click();
  await expect(page).toHaveURL(/inventory/);
});