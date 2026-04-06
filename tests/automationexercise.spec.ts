import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Test case 1: Register New User', async ({ page }) => {
    {
        await page.goto('http://automationexercise.com/');

    })