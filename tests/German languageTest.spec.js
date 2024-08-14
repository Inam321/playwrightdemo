import { test, expect } from '@playwright/test';
const { CommonMethodsClass } = require('./Call');
//const { qwqwqwqwqwq } = require('../Tested/ftt');
test('User', async ({ page }) => {
await CommonMethodsClass.login(page);
const hold= ms => new Promise(resolve => setTimeout(resolve, ms))
await hold(5000)
const selectLanguageVisible = await page.isVisible('text=Select Language');
const spracheWahlenVisible = await page.isVisible('text=Sprache wählen');

if (selectLanguageVisible) {
  // Perform actions if 'Select Language' is found
  await page.getByRole('button', { name: 'English Select Language' }).click();
  await page.getByRole('button', { name: 'German German' }).click();
} else if (spracheWahlenVisible) {
  // Print 'proceed' if 'Sprache wählen' is found
  console.log('proceed');
}
await page.getByRole('link', { name: 'Datenbibliothek' }).click();
await page.getByText('German Language Documents').click();
const Mac7=await page.locator('#root-component > div > main > div > div > div > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-undefined.MuiGrid-direction-xs-column.css-aqd2yu > div.MuiBox-root.css-19i6vay > div > div > div > div:nth-child(2) > div')
await Mac7.hover()
await page.getByRole('button', { name: 'Chat starten' }).click();
await page.getByLabel('Open', { exact: true }).click();
await page.getByText('GPT-3.5 Turbo').click();
await page.getByPlaceholder('Fragen Sie.').fill('Wie tragen die SIPROTEC 5-Geräte zur Erhöhung der Netzauslastung bei?');
await page.keyboard.press('Enter');
const questions = [

      "Welche Installationsarten gibt es bei Amarex KRT?",
      "Welches Kühlmittel wird dafür empfohlen und in welcher Menge fur Amarex KRT?",
      "Was sind die Geräuscheigenschaften von Amarex KRT?",
      "Standardverfahren zur Inbetriebnahme von Amarex KRT?",
      "Welche Cybersecurity-Funktionalitäten sind in den SIPROTEC 5-Geräten integriert, um die Netzsicherheit zu gewährleisten?"
  
    ];
    
for (let question of questions) {
// Fill the input field with the question
await page.getByPlaceholder('Fragen Sie.').fill(question);
// Press Enter to submit the question
await page.keyboard.press('Enter');  
    ////----- Function to check for the phrase-----//
      await hold(20000) 
      const phrase = 'Generiere Antwort'; 
    
        const content = await page.content();
        if (content.includes(phrase)) {
          console.log('Chat Stuck during Generating response.');
        await browser.close();
        } else {
          console.log('Chat Response come within 10 seconds');
          // You can continue with additional actions here
        }
      // Wait for 12 seconds before moving to the next question
      await page.waitForTimeout(15000);
    }
await page.getByRole('button', { name: 'Dutch Sprache wählen' }).click();
await page.getByRole('button', { name: 'English English' }).click();
  
});