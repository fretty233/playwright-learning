import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // wait until product list is loaded
  await expect(page.locator('.inventory_list')).toBeVisible({ timeout: 10000 });
});

test('sort product A to Z', async ({ page }) => {
  await page.selectOption('.product_sort_container', 'az');

  const products = await page.locator('.inventory_item_name').allTextContents();
  expect(products).toEqual([...products].sort());
});

test('sort product Z to A', async ({ page }) => {
  await page.selectOption('.product_sort_container', 'za');

  const products = await page.locator('.inventory_item_name').allTextContents();
  expect(products).toEqual([...products].sort().reverse());
});

test('sort product Low to High', async ({ page }) => {
  await page.selectOption('.product_sort_container', 'lohi');

  const prices = await page.locator('.inventory_item_price').allTextContents();
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));

  expect(numericPrices).toEqual([...numericPrices].sort((a, b) => a - b));
});

test('sort product High to Low', async ({ page }) => {
  await page.selectOption('.product_sort_container', 'hilo');

  const prices = await page.locator('.inventory_item_price').allTextContents();
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));

  expect(numericPrices).toEqual([...numericPrices].sort((a, b) => b - a));
});