import { test, expect } from '@playwright/test';

test('check all hover menu items', async ({ page }) => {
  await page.goto('https://demoqa.com/menu');

  // Main Item 1
  const item1 = page.locator('text=Main Item 1');
  await item1.hover();
  await expect(item1).toBeVisible();

  // Main Item 2
  const item2 = page.locator('text=Main Item 2');
  await item2.hover();
  await expect(page.locator('text=SUB SUB LIST »')).toBeVisible();

  // Main Item 3
  const item3 = page.locator('text=Main Item 3');
  await item3.hover();
  await expect(item3).toBeVisible();
});