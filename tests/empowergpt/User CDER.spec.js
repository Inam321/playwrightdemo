import { test, expect, errors } from '@playwright/test';
const { CommonMethodsClass } = require('./Call');
//test.describe('test',async()=>{

test('User Created & Delete Test', async ({ page }) => {
 //Application URL
 await page.goto('https://stg.empowergpt.ai/');
 await CommonMethodsClass.login(page);
 await page.getByRole('button', { name: 'Admin' }).click();
 await page.getByRole('link', { name: 'Users' }).click();

/////////////////---------------Single USer Create & Delete-------------------------/////////////////////

 await page.getByRole('button', { name: 'Invite' }).click();
 await page.getByPlaceholder('Search').nth(1).fill('Usertest01@gmail.com');
 await page.getByLabel('Regular Users').click();
 await page.locator('#menu-').getByText('Organization Administrators').click();
 await page.getByRole('button', { name: 'Confirm' }).click();
 await page.goto('https://stg.empowergpt.ai/users');
 await page.getByPlaceholder('Search').click();
 await page.getByPlaceholder('Search').fill('usertest01');
 await page.getByPlaceholder('Search').press('Enter');
 await page.getByRole('row', { name: 'usertest01@gmail.com' }).getByRole('checkbox').check();
 await page.getByRole('table').getByText('Organization Administrators').dblclick();
 await page.getByLabel('Organization Administrators').click();
 await page.getByText('Workspace Administrators').click();
 await page.getByRole('button', { name: 'Save' }).click();
 await page.goto('https://stg.empowergpt.ai/users');
 await page.getByPlaceholder('Search').click();
 await page.getByPlaceholder('Search').fill('usertest01');
 await page.getByPlaceholder('Search').press('Enter');
 await page.getByRole('row', { name: 'UG usertest01@gmail.com' }).getByRole('checkbox').check();
 await page.getByRole('button', { name: 'Delete' }).click();
 await page.getByRole('button', { name: 'Confirm' }).click();
/////////////////---------------multiple Users Create & Delete-------------------------/////////////////////

 await page.goto('https://stg.empowergpt.ai/users');
 await page.getByRole('button', { name: 'Invite' }).click();
 await page.getByPlaceholder('Search').nth(1).click();
 await page.getByPlaceholder('Search').nth(1).fill('usertest02@gmail.com');
 await page.getByLabel('Regular Users').click();
 await page.locator('#menu-').getByText('Regular Users', { exact: true }).click();
 await page.getByRole('button', { name: 'Confirm' }).click();
 await page.getByRole('button', { name: 'Invite' }).click();
 await page.getByPlaceholder('Search').nth(1).click();
 await page.getByPlaceholder('Search').nth(1).fill('usertest03@gmail.com');
 await page.getByLabel('Regular Users').click();
 await page.locator('#menu-').getByText('Workspace Administrators').click();
 await page.getByPlaceholder('Search').nth(1).click();
 await page.getByRole('button', { name: 'Confirm' }).click();
 //await page.pause()
 await page.goto('https://stg.empowergpt.ai/users');
 await page.getByPlaceholder('Search').click();
 await page.getByPlaceholder('Search').fill('usertest');
 await page.getByPlaceholder('Search').press('Enter');
 await page.getByRole('row', { name: 'UG usertest02@gmail.com' }).getByRole('checkbox').check();
 const Mac3=await page.locator('tbody')
 await Mac3.hover()
 await page.getByRole('cell', { name: 'Delete' }).getByTitle('Delete').click();
 await page.getByRole('button', { name: 'Confirm' }).click();
 await Mac3.hover()
 await page.getByRole('button', { name: 'Delete' }).click();
 await page.getByRole('button', { name: 'Confirm' }).click();


});