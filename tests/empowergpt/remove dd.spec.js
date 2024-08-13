import { test, expect } from '@playwright/test';


test('Remove All data except  history folder', async ({ page }) => {



// const fs = require('fs');
// const path = require('path');

// const allureResultsPath = path.join('allure-results');

// // Function to delete all files in a directory
// function cleanAllureResults() {
// fs.readdir(allureResultsPath, (err, files) => {
//     if (err) throw err;

//     for (const file of files) {
//         fs.unlink(path.join(allureResultsPath, file), err => {
//             if (err) throw err;
//         });
//     }

//     console.log('Allure results folder cleaned!');
// });
// }

// // Call the function to clean up the folder
// cleanAllureResults();

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

})