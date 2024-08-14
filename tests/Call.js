export class CommonMethodsClass {
 
    static async login (page){
        await page.goto('https://stg.empowergpt.ai/chat');
        //await page.goto('https://staging.empowergpt.ai/chat');
        await page.getByPlaceholder('Enter Email').fill('Admin');
        await page.getByPlaceholder('Enter Password').click();
        await page.getByPlaceholder('Enter Password').fill('@#Intech123');
        await page.getByRole('button', { name: 'Login' }).click();
    }



    static async inputtext (page){
        await page.getByPlaceholder('Ask.').click();
        await page.getByPlaceholder('Ask.').fill('What are the vision and mission of Intech Process Automation?');
        await page.locator('#chat-send-msg-button').click();
    }


  
    // static async statment(page,Comparetext){
    //     const paragraphText = await page.textContent('body'); // Replace with your paragraph selector
    //     // Define the word to search for
    //     const wordToCheck = Comparetext; // Replace with the word you're looking for
      
    //     // Check if the word is present in the paragraph
    //     if (paragraphText.includes(wordToCheck)) {
    //       console.log(`The word "${wordToCheck}" is present in the paragraph.`);
    //       // Continue with your operations
    //       // ...
    //     } else {
    //       console.log(`The word "${wordToCheck}" is not present in the paragraph. Breaking the operation.`);
    //       // Break the operation
    //       // You can exit or perform some other action
    //       await browser.close();
    //       return;
    //     } 
    // }
    

    static async  querytimeout(page,timersbase){
    
      const keyword = timersbase;
      const timeout = 35000; // 15 seconds in milliseconds
    
      try {
        // Wrap the search in a promise with a timeout
        await Promise.race([
          (async () => {
            // Perform the action that includes the keyword
            await page.waitForSelector(`text=${keyword}`);
            console.log(keyword,'response found within 15 seconds.');
          })(),
          new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout))
        ]);
      } catch (error) {
        if (error.message === 'Timeout') {
          console.log(keyword,'response took longer than 15 seconds.');
          await browser.close();
        } 
      } 
    }
      
 
    static async FillInput(page){
      await page.locator('.MuiButton-root').first().click();
      await page.getByPlaceholder('Ask').click();
      await page.getByPlaceholder('Ask').fill('What is the brand of the Walls product?');
      await page.locator('#chat-send-msg-button').click();
    }    


    static async chatdelete(page){

             //--------for STG----------//

      await page.locator('.MuiListItem-root > div > .MuiButton-root').first().click();
      await page.locator('.chat-action-buttons > button').first().click();
      await page.getByRole('button', { name: 'Confirm' }).click();
  
             // -------- for staging-------//
            
      // await page.locator('.MuiListItem-root > div > .MuiButton-root').first().click();
      // await page.locator('.css-1xhj18k > button:nth-child(2)').click();
      // await page.getByRole('button', { name: 'Confirm' }).click();
      
        
    }    

    static async removedata(page){
      const fs = require('fs');
      const path = require('path');
      
      const allureResultsPath = path.join('allure-results');
      const historyFolderName = 'history';
      
      // Function to delete all files and folders in a directory except the 'history' folder
      function cleanAllureResults() {
          fs.readdir(allureResultsPath, (err, files) => {
              if (err) {
                  console.error('Error reading allure-results directory:', err);
                  return;
              }
      
              files.forEach((file) => {
                  const filePath = path.join(allureResultsPath, file);
      
                  // Skip the 'history' folder
                  if (file === historyFolderName) {
                      return;
                  }
      
                  fs.stat(filePath, (err, stats) => {
                      if (err) {
                          console.error('Error getting file stats:', err);
                          return;
                      }
      
                      if (stats.isDirectory()) {
                          fs.rmdir(filePath, { recursive: true }, (err) => {
                              if (err) {
                                  console.error('Error removing directory:', err);
                              } else {
                                  console.log(`Directory ${file} removed.`);
                              }
                          });
                      } else {
                          fs.unlink(filePath, (err) => {
                              if (err) {
                                  console.error('Error removing file:', err);
                              } else {
                                  console.log(`File ${file} removed.`);
                              }
                          });
                      }
                  });
              });
          });
      }
      
      // Call the function to clean up the folder
      cleanAllureResults();
    }  



    static async deletehistorydata(page){
      const fs = require('fs');
      const path = require('path');
      
      const allureResultsPath = path.join('./allure-results/history');
      
      // Function to delete all files in a directory
      function cleanAllureResults() {
      fs.readdir(allureResultsPath, (err, files) => {
          if (err) throw err;
      
          for (const file of files) {
              fs.unlink(path.join(allureResultsPath, file), err => {
                  if (err) throw err;
              });
          }
      
          console.log('Allure results history folder cleaned!');
      });
      }
      
      // Call the function to clean up the folder
      cleanAllureResults();
    }    



    static async copyhistoryreportdata(page){
      const fs = require('fs');
      const path = require('path');
      
      // Define source and destination folders
      const sourceFolder = './allure-report/history';
      const destinationFolder = './allure-results/history';
      
      // Create the destination folder if it doesn't exist
      if (!fs.existsSync(destinationFolder)) {
          fs.mkdirSync(destinationFolder);
      }
      
      // Function to copy a file from source to destination
      function copyFile(sourceFile, destinationFile) {
          fs.copyFileSync(sourceFile, destinationFile);
          console.log(`Copied ${sourceFile} to ${destinationFile}`);
      }
      
      // Read all files from the source folder
      fs.readdirSync(sourceFolder).forEach(file => {
          const sourceFile = path.join(sourceFolder, file);
          const destinationFile = path.join(destinationFolder, file);
          
          // Copy the file
          copyFile(sourceFile, destinationFile);
      });
    }    





}

