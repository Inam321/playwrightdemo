import { test, expect, errors } from '@playwright/test';

test('User Created & Delete Test', async ({ page }) => {
 //Application URL
 await page.goto('https://stg.empowergpt.ai/');
 await page.getByPlaceholder('Enter Email').fill('Admin');
 await page.getByPlaceholder('Enter Password').click();
 await page.getByPlaceholder('Enter Password').fill('@#Intech123');
 await page.getByRole('button', { name: 'Login' }).click();
 await page.reload()

});