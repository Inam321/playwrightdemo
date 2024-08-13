import { test, expect } from '@playwright/test';
const { CommonMethodsClass } = require('./Call');
test('test', async ({ page }) => {
 //Application URL
 await page.goto('https://stg.empowergpt.ai/');
//s await page.goto('https://staging.empowergpt.ai/auth/realms/expertadvisor/protocol/openid-connect/auth?client_id=expertadvisor&redirect_uri=https%3A%2F%2Fstaging.empowergpt.ai%2F&state=8eb53f0b-6fcf-4f5e-861e-bc4e376e7b9c&response_mode=fragment&response_type=code&scope=openid&nonce=653d6a0f-e76e-4382-bc47-e910144daeda');
await CommonMethodsClass.login(page);
 // 2- //             Create New Roles        // //
 //----------------------------------------------------//
  await page.getByRole('button', { name: 'Admin' }).click();
  await page.getByRole('link', { name: 'Roles' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('input[name="name"]').fill('QA_');
  await page.locator('input[name="name"]').press('CapsLock');
  await page.locator('input[name="name"]').fill('QA_IIS_MI');
  await page.locator('input[name="permissions\\.0\\.value"]').check();
  await page.locator('input[name="permissions\\.1\\.value"]').check();
  await page.locator('input[name="permissions\\.2\\.value"]').check();
  await page.locator('input[name="permissions\\.3\\.value"]').check();
  await page.locator('textarea[name="description"]').click();
  await page.locator('textarea[name="description"]').fill('M');
  await page.locator('textarea[name="description"]').press('CapsLock');
  await page.getByText('M', { exact: true }).fill('Muhammad Inam');
  await page.getByRole('button', { name: 'Confirm' }).click();
  //
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').press('CapsLock');
  await page.getByPlaceholder('Search').fill('QA_IIS_MI');
  await page.getByPlaceholder('Search').press('Enter');
  //await page.pause()
  await page.getByRole('row', { name: 'Sort Sort' }).getByRole('checkbox').check();
  const desktop3=await page.locator('//td[1]')
  await desktop3.hover()
  await page.getByRole('button', { name: 'Edit row' }).click({ force: true });
  await page.locator('input[name="permissions\\.7\\.value"]').check();
  await page.locator('input[name="permissions\\.9\\.value"]').check();
  await page.getByRole('button', { name: 'Confirm' }).click();

                    //--------------Delete Single User Process-------------//

  // await page.getByPlaceholder('Search').click();
  // await page.getByPlaceholder('Search').press('CapsLock');
  // await page.getByPlaceholder('Search').fill('QA_IIS_MI');
  // await page.getByPlaceholder('Search').press('Enter');
  // //await page.pause()
  // await page.getByRole('row', { name: 'Sort Sort' }).getByRole('checkbox').check();
  // const desktop6=await page.locator('//td[1]')
  // await desktop6.hover()
  // await page.getByRole('button', { name: 'Delete row' }).click({ force: true });
  // await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('main').getByRole('button').first().click();
                  
                  //--------------Delete Double User Process-------------//

  //await page.pause()
  //add user1
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('input[name="name"]').fill('QA_');
  await page.locator('input[name="name"]').press('CapsLock');
  await page.locator('input[name="name"]').fill('SQA_IIS_MI_1');
  await page.locator('input[name="permissions\\.0\\.value"]').check();
  await page.locator('input[name="permissions\\.1\\.value"]').check();
  await page.locator('input[name="permissions\\.2\\.value"]').check();
  await page.locator('input[name="permissions\\.3\\.value"]').check();
  await page.locator('textarea[name="description"]').click();
  await page.locator('textarea[name="description"]').fill('M');
  await page.locator('textarea[name="description"]').press('CapsLock');
  await page.getByText('M', { exact: true }).fill('Muhammad Inam');
  await page.getByRole('button', { name: 'Confirm' }).click();
   //add user2
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('input[name="name"]').fill('QA_');
  await page.locator('input[name="name"]').press('CapsLock');
  await page.locator('input[name="name"]').fill('SQA_IIS_MI_2');
  await page.locator('input[name="permissions\\.0\\.value"]').check();
  await page.locator('input[name="permissions\\.1\\.value"]').check();
  await page.locator('input[name="permissions\\.2\\.value"]').check();
  await page.locator('input[name="permissions\\.3\\.value"]').check();
  await page.locator('textarea[name="description"]').click();
  await page.locator('textarea[name="description"]').fill('M');
  await page.locator('textarea[name="description"]').press('CapsLock');
  await page.getByText('M', { exact: true }).fill('Muhammad Inam');
  await page.getByRole('button', { name: 'Confirm' }).click();
  //Delete
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').press('CapsLock');
  await page.getByPlaceholder('Search').fill('SQA_IIS_MI');
  await page.getByPlaceholder('Search').press('Enter');
  //await page.pause()
  await page.goto('https://stg.empowergpt.ai/roles');
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('SQA_IIS_MI');
  await page.getByPlaceholder('Search').press('Enter');
  await page.getByRole('row', { name: 'Sort Sort' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  //--------------------Refresh button Testing-------//
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('input[name="name"]').fill('Refresh');
  await page.locator('input[name="permissions\\.0\\.value"]').check();
  await page.locator('textarea[name="description"]').click();
  await page.locator('textarea[name="description"]').fill('M');
  await page.locator('textarea[name="description"]').press('CapsLock');
  await page.getByText('M', { exact: true }).fill('Muhammad Inam');
  await page.getByRole('button', { name: 'Confirm' }).click();
  //await page.pause()
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('SQA_IIS_MIuoiuo');
  await page.getByPlaceholder('Search').press('Enter');
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('refresh');
  await page.getByPlaceholder('Search').press('Enter');
  await page.getByRole('row', { name: 'Sort Sort' }).getByRole('checkbox').check();
  // const desktop11=await page.locator('//td[1]')
  // await desktop11.hover()
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();




});