const { test, expect } = require('@playwright/test');

test('Open website', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});