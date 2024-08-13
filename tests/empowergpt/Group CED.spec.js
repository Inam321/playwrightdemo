import { test, expect } from '@playwright/test';
const { CommonMethodsClass } = require('./Call');

test('User', async ({ page }) => {
    //Application URL
    await CommonMethodsClass.login(page);
        
    // 2- //             Create New User Group         // //
    //----------------------------------------------------//
    await page.getByRole('button', { name: 'Admin' }).click();
    await page.getByRole('link', { name: 'User Groups' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.locator('input[name="name"]').fill('Testing_Inam_05');
    await page.getByPlaceholder('Search Users').click();
    await page.getByPlaceholder('Search Users').click();
    await page.getByPlaceholder('Search Users').fill('inam');
    await page.getByRole('checkbox').nth(0).check();
    await page.getByRole('button', { name: 'Confirm' }).click();
      //---------------Edit Exisiting User Group-------------//
    //await page.evaluate(() => { window.scrollBy(0,100);});
    const delay1 = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay1(1000)
    await page.getByPlaceholder('Search').click();
    const delay2 = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay2(1000)
    await page.getByPlaceholder('Search').fill('Testing_Inam');
    await page.getByPlaceholder('Search').press('Enter');
    
    //await page.getByRole('cell', { name: 'Testing_Inam_05 MI Muhammad Inam Edit row Delete row' }).nth(0).getByRole('checkbox').check();
    await page.getByRole('row', { name: 'Sort Sort Sort' }).getByRole('checkbox').check();
    const desktop=await page.locator('tbody')
    await desktop.hover()
    await page.getByRole('button', { name: 'Edit row' }).click({ force: true })
    
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="name"]').fill('Testing_Inam_Edit');
    await page.getByRole('button', { name: 'Confirm' }).click();   
                //-----------------Delete User Group----------//
    const delay5 = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay5(2000)
   await page.goto('https://stg.empowergpt.ai/user-groups');
   await delay5(5000)
    await page.getByPlaceholder('Search').fill('Testing_Inam_Edit');
    await page.getByPlaceholder('Search').press('Enter');
    await page.getByRole('row', { name: 'Testing_Inam_Edit' }).getByRole('checkbox').check();
    const Mac1=await page.locator('tbody')
    await Mac1.hover()
    await page.getByRole('button', { name: 'Delete row' }).click({ force: true })
    //await page.pause()
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.goto('https://stg.empowergpt.ai/user-groups');
    const delay6 = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay6(2000)

               //--------------Delete Multiple User Groups------------------//
    await page.getByRole('button', { name: 'Add' }).click();
    await page.locator('input[name="name"]').fill('Inam_IIS_01');
    await page.getByPlaceholder('Search Users').click();
    await page.getByPlaceholder('Search Users').fill('inam');
    await page.getByRole('checkbox').nth(0).check();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.locator('input[name="name"]').fill('Inam_IIS_02');
    await page.getByPlaceholder('Search Users').click();
    await page.getByPlaceholder('Search Users').fill('inam');
    await page.getByRole('checkbox').nth(0).check();
    await page.getByRole('button', { name: 'Confirm' }).click();
    const delay8 = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay8(3000)
    await page.getByPlaceholder('Search').fill('Inam_IIS');
    await page.getByPlaceholder('Search').press('Enter');
    await page.getByRole('row', { name: 'Sort Sort Sort' }).getByRole('checkbox').check();
    //await page.pause()
    const delay9 = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay9(3000)
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();

})




