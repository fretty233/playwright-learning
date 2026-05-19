const { test, expect } = require('@playwright/test');

test('take screenshot', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.screenshot({ path: 'home.png', fullPage: true
   });
});