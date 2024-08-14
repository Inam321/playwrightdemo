import { test, expect } from '@playwright/test';


test('Del History folder', async ({ page }) => {



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


})