import { test, expect } from '@playwright/test';

test('Input fields should accept values correctly', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/inputs');

  // Input Number
  const numberInput = page.locator('input[type="number"]');
  await numberInput.fill('123');
  await expect(numberInput).toHaveValue('123');

  // Input Text
  const textInput = page.locator('input[type="text"]').nth(0);
  await textInput.fill('hello automation');
  await expect(textInput).toHaveValue('hello automation');

  // Input Password
  const passwordInput = page.locator('input[type="password"]');
  await passwordInput.fill('abc123');
  await expect(passwordInput).toHaveValue('abc123');

  // Input Date
  const dateInput = page.locator('input[type="date"]');
  await dateInput.fill('2025-04-10');
  await expect(dateInput).toHaveValue('2025-04-10');
});