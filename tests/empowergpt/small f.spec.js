import { test, expect } from '@playwright/test';
const { CommonMethodsClass } = require('./Call');

test('Small program', async ({ page }) => {


await CommonMethodsClass.deletehistorydata(page);
const hold = ms => new Promise(resolve => setTimeout(resolve, ms))
await hold(3000)
await CommonMethodsClass.copyhistoryreportdata(page);

})