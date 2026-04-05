import { test, expect, request } from '@playwright/test'
test('Test for web input', async ({page}) =>{

    await page.goto('https://practice.expandtesting.com/inputs');

})