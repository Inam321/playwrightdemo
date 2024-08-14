import { test, expect } from '@playwright/test';
// this test enabale trends.id history table not copied it will show empty folder

test('copy  history(allure result) to allure result history', async ({ page }) => {




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



})