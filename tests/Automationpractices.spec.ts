import { test, expect } from '@playwright/test';

test('Test input Field', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/inputs');

  // Input Number

  const numberInput = page.getByRole('spinbutton', { name: 'Input: Number' })
  await numberInput.fill('100');
  await expect(numberInput).toHaveValue('100');
  
    // Input Number click arrowup + check each time press arrowUp
    const numberArrowUp =page.getByRole('spinbutton', { name: 'Input: Number' })
    await numberArrowUp.press('ArrowUp');
    await expect(numberArrowUp).toHaveValue('101')
    for (let i = 0; i < 10; i++) {
    await numberArrowUp.press('ArrowUp');
    await page.waitForTimeout(500);
    await expect(numberArrowUp).toHaveValue(String(102 + i));
  }
      await expect(numberArrowUp).toHaveValue('111');

 // Input Number click arrowup + check each time press arrowDown
    const numberArrowDown =page.getByRole('spinbutton', { name: 'Input: Number' })
    await numberArrowDown.press('ArrowDown');
    await expect(numberArrowDown).toHaveValue('110')
    for (let i = 0; i < 10; i++) {
    await numberArrowDown.press('ArrowDown');
    await page.waitForTimeout(500);
    await expect(numberArrowDown).toHaveValue(String(109 - i));
  }
      await expect(numberArrowDown).toHaveValue('100');

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