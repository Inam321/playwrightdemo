import { test, expect, errors } from '@playwright/test';
const { CommonMethodsClass } = require('./Call');
//test.describe('test',async()=>{

test('User Created & Delete Test', async ({ page }) => {
 //Application URL
 await page.goto('https://stg.empowergpt.ai/');
 await CommonMethodsClass.login(page);
const hold = ms => new Promise(resolve => setTimeout(resolve, ms))

////----------------- GPT-4 --------------------------////

 await page.getByRole('link', { name: 'New Chat' }).nth(0).click();
 await page.getByLabel('Open', { exact: true }).click();
 await page.getByText('GPT-4', { exact: true }).click();
 await page.getByPlaceholder('Ask').click();
 await page.getByPlaceholder('Ask').fill('What is the designation of Muhammad Inam ');
 await page.locator('#chat-send-msg-button').click();
 await hold(9000);await page.reload();
 for (let i = 0; i < 3; i++) {
 await CommonMethodsClass.inputtext(page);
 await CommonMethodsClass.querytimeout(page,'enhancing productivity');
 }
 ////----------------- GPT-4 Turbo --------------------------////

 await page.getByRole('link', { name: 'New Chat' }).nth(0).click();
 await page.getByLabel('Open', { exact: true }).click();
 await page.getByText('GPT-4 Turbo').click();
 await page.getByPlaceholder('Ask').click();
 await page.getByPlaceholder('Ask').fill('What is the designation of Muhammad Inam ');
 await page.locator('#chat-send-msg-button').click();
 await hold(9000);await page.reload();
 for (let i = 0; i < 3; i++) {
 await CommonMethodsClass.inputtext(page);
 await CommonMethodsClass.querytimeout(page,'enhancing productivity');
 }
 ////----------------- GPT-4oFast & Accurate --------------------------////
 await page.getByRole('link', { name: 'New Chat' }).nth(0).click();
 await page.getByLabel('Open', { exact: true }).click();
 await page.getByText('GPT-4oFast & Accurate').click();
 await page.getByPlaceholder('Ask').click();
 await page.getByPlaceholder('Ask').fill('What is the designation of Muhammad Inam ');
 await page.locator('#chat-send-msg-button').click();
 await hold(9000);await page.reload();
 for (let i = 0; i < 3; i++) {
 await CommonMethodsClass.inputtext(page);
 await CommonMethodsClass.querytimeout(page,'enhancing productivity');
 }
 ////----------------- Mistral Large --------------------------////
 await page.getByRole('link', { name: 'New Chat' }).nth(0).click();
 await page.getByLabel('Open', { exact: true }).click();
 await page.getByText('Mistral Large').click();

 await page.getByPlaceholder('Ask').click();
 await page.getByPlaceholder('Ask').fill('What is the designation of Muhammad Inam ');
 await page.locator('#chat-send-msg-button').click();
 await hold(9000);await page.reload();
 for (let i = 0; i < 3; i++) {
 await CommonMethodsClass.inputtext(page);
 await CommonMethodsClass.querytimeout(page,'enhancing productivity');
 }
 ////----------------- Command R⁺ --------------------------////
 await page.getByRole('link', { name: 'New Chat' }).nth(0).click();
 await page.getByLabel('Open', { exact: true }).click();
 await page.getByText('Command R⁺').click();
 await page.getByPlaceholder('Ask').click();
 await page.getByPlaceholder('Ask').fill('What is the designation of Muhammad Inam ');
 await page.locator('#chat-send-msg-button').click();
 await hold(9000);await page.reload();
 for (let i = 0; i < 3; i++) {
 await CommonMethodsClass.inputtext(page);
 await CommonMethodsClass.querytimeout(page,'enhancing productivity');
 }
 ////----------------- GPT-3.5 Turbo --------------------------////
 await page.getByRole('link', { name: 'New Chat' }).nth(0).click();
 await page.getByLabel('Open', { exact: true }).click();
 await page.getByText('GPT-3.5 Turbo').click();
 await page.getByPlaceholder('Ask').click();
 await page.getByPlaceholder('Ask').fill('What is the designation of Muhammad Inam ');
 await page.locator('#chat-send-msg-button').click();
 await hold(9000);await page.reload();
 for (let i = 0; i < 3; i++) {
 await CommonMethodsClass.inputtext(page);
 await CommonMethodsClass.querytimeout(page,'enhancing productivity');
 }
  ////----------------- Llama-3-70B--------------------------////
 await page.getByRole('link', { name: 'New Chat' }).nth(0).click();
 await page.getByLabel('Open', { exact: true }).click();
 await page.getByText('Llama-3-70B').click();
 await page.getByPlaceholder('Ask').click();
 await page.getByPlaceholder('Ask').fill('What is the designation of Muhammad Inam ');
 await page.locator('#chat-send-msg-button').click();
 await hold(9000);await page.reload();
 for (let i = 0; i < 3; i++) {
 await CommonMethodsClass.inputtext(page);
 await CommonMethodsClass.querytimeout(page,'enhancing productivity');
 }

});