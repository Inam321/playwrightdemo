import { test, expect } from '@playwright/test';

test.describe('test',async()=>{

test('Non AD User Login & Logout', async ({ page }) => {
    //Application URL
    await page.goto('https://stg.empowergpt.ai/');
    //await page.goto('https://stg.empowergpt.ai/auth/realms/expertadvisor/protocol/openid-connect/auth?client_id=expertadvisor&redirect_uri=https%3A%2F%2Fstaging.empowergpt.ai%2F&state=8eb53f0b-6fcf-4f5e-861e-bc4e376e7b9c&response_mode=fragment&response_type=code&scope=openid&nonce=653d6a0f-e76e-4382-bc47-e910144daeda');
    await CommonMethodsClass.login(page);
    await expect(page.getByText('Data Library')).toBeVisible('Invalid email or password.');
    await page.getByRole('button', { name: 'Logout' }).click();
})



})



