import { test, expect, firefox } from '@playwright/test';

test.describe('test',async()=>{
const { CommonMethodsClass } = require('./Call');
 ///////////--------------Chat Reponse Accuracy Test---------------///////////
test('Chat Response Accuracy', async ({ page }) => {
    await CommonMethodsClass.login(page);
    const hold = ms => new Promise(resolve => setTimeout(resolve, ms))
    await hold(2000)
    await page.getByRole('link', { name: 'Data Library' }).click();
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('public');
    await page.getByPlaceholder('Search').press('Enter');
    await page.getByText('Public').click();
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('chat response accuracy');
    await page.getByPlaceholder('Search').press('Enter');
    await page.getByText('Chat Response Accuracy Test').click();
    await page.getByPlaceholder('Search').fill('');
    await page.getByPlaceholder('Search').press('Enter');
    await page.getByRole('row', { name: 'Chat Files' }).getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Start Chat' }).click();
    await page.getByPlaceholder('Ask').click();
    await page.getByPlaceholder('Ask').fill('What is the designation of Muhammad Inam ');
    await page.locator('#chat-send-msg-button').click();
    await hold(9000);

    //----------------------------------------- 1.  Word.docx---------------------------------------//
    await page.reload();
    await CommonMethodsClass.querytimeout(page,'QA'); 
    await hold(5000);
   // await CommonMethodsClass.statment(page,'QA'); // Replace with the word you're looking for
    await CommonMethodsClass.statment(page,'Word File.docx'); // Replace with the document you're looking for
  
    //---------------------------------------- 2. Pdf File.pdf-------------------------------------//
    await page.getByPlaceholder('Ask').click();
    await page.getByPlaceholder('Ask').fill('What industries does Intech Process Automation serve?');
    await page.locator('#chat-send-msg-button').click();
    await hold(8000);
    await CommonMethodsClass.querytimeout(page,'Food'); 

   // await CommonMethodsClass.statment(page,'Beverage'); // Replace with the word you're looking for
    await CommonMethodsClass.statment(page,'Pdf File.pdf'); // Replace with the document  you're looking for

    //---------------------------------------- 3. Excel File.xlsx---------------------------------//
    await page.getByPlaceholder('Ask').click();
    await page.getByPlaceholder('Ask').fill('In which city is Dove produced?');
    await page.locator('#chat-send-msg-button').click();
    await CommonMethodsClass.querytimeout(page,'Rahim'); 
   // await CommonMethodsClass.statment(page,'Rahim Yar Khan'); // Replace with the word you're looking for 
    await CommonMethodsClass.statment(page,'Excel File.xlsx'); // Replace with the document you're looking for
    //await page.pause()
});
         ///////////--------------Chat Reponse Test---------------///////////
test('Response Test', async ({ page }) => {
    //Application URL
    await CommonMethodsClass.login(page);
    //Delay for page load 
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay(6000)
    //----------------- QuestionS--------------//
    await CommonMethodsClass.inputtext(page);
    await CommonMethodsClass.querytimeout(page,'enhancing productivity');
    await page.getByRole('button', { name: 'Copy' }).click();
    for (let i = 0; i < 7; i++) {
    await CommonMethodsClass.inputtext(page);
    await CommonMethodsClass.querytimeout(page,'enhancing productivity');
    }
});

});
