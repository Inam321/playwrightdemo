import { test, expect } from '@playwright/test';


test('email', async ({ page }) => {
    //Application URL
    await page.goto('https://www.google.com/');
    //await page.pause()
    await page.getByLabel('Sign in').click();
    await page.getByLabel('Email or phone').click();
    await page.getByLabel('Email or phone').fill('engrinam73@gmail.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('Enter your password').fill('sepl@123');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('Gmail', { exact: true }).click();
    await page.getByRole('button', { name: 'Compose' }).click();
    await page.getByLabel('To recipients').fill('engrinam73@gmail.com');
    await page.getByLabel('To recipients').press('Enter');
    await page.getByLabel('To recipients').fill('inam.rehman@intechww.com');
    await page.getByLabel('To recipients').press('Enter');
    await page.getByPlaceholder('Subject').click();
    await page.getByPlaceholder('Subject').fill('playwright');
    await page.getByRole('textbox', { name: 'Message Body' }).click();
    await page.getByRole('textbox', { name: 'Message Body' }).fill('www.google.com\n');
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.click('div[command="Files"]') // this selector might change, ensure it points to the "Attach files" button
    ]);
    await fileChooser.setFiles('./allure-report/index.html');
    await page.click('div[aria-label="Send ‪(Ctrl-Enter)‬"]');
    await page.getByRole('link', { name: 'View message' }).click();
    await page.getByLabel('Show details').click();

})




