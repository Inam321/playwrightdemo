import { test, expect } from '@playwright/test';
const { CommonMethodsClass } = require('./Call');


test.describe('test',async()=>{
test('REPORT01', async ({ page }) => {
  // await CommonMethodsClass.removedata(page);
  // await CommonMethodsClass.deletehistorydata(page); //// if we need  histrical trends then disable this row
  await page.goto('https://stg.empowergpt.ai/chat');
  await page.goto('https://www.google.com/');
  await page.getByPlaceholder('Enter Email').fill('Admin');
  await page.getByPlaceholder('Enter Password').click();
  await page.getByPlaceholder('Enter Password').fill('@#Intech123');
  await page.getByRole('button', { name: 'Login' }).click();
});
 
// test('REPORT02', async ({ page }) => {
//   await page.goto('https://stg.empowergpt.ai/chat');
//   //await page.goto('https://staging.empowergpt.ai/chat');
//   await page.getByPlaceholder('Enter Email').fill('Admin');
//   await page.getByPlaceholder('Enter Password').click();
//   await page.getByPlaceholder('Enter Password').fill('@#Intech123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   });

//   test('REPORT03', async ({ page }) => {
//     await page.goto('https://stg.empowergpt.ai/chat');
//     //await page.goto('https://staging.empowergpt.ai/chat');
//     await page.getByPlaceholder('Enter Email').fill('Admin');
//     await page.getByPlaceholder('Enter Password').click();
//     await page.getByPlaceholder('Enter Password').fill('@#Intech123');
//     await page.getByRole('button', { name: 'Login' }).click();
//     });
//     test('REPORT19', async ({ page }) => {
//       await page.goto('https://stg.empowergpt.ai/chat');
//       //await page.goto('https://staging.empowergpt.ai/chat');
//       await page.getByPlaceholder('Enter Email').fill('Admin');
//       await page.getByPlaceholder('Enter Password').click();
//       await page.getByPlaceholder('Enter Password').fill('@#Intech123');
//       await page.getByRole('button', { name: 'Login' }).click();
//       });
//       test('REPORT04', async ({ page }) => {
//         test.setTimeout(240000);
//         await page.goto('https://stg.empowergpt.ai/chat');
//         //await page.goto('https://staging.empowergpt.ai/chat');
//         await page.getByPlaceholder('Enter Email').fill('Admin');
//         await page.getByPlaceholder('Enter Password').click();
//         await page.getByPlaceholder('Enter Password').fill('@#Intech123');
//         await page.getByRole('button', { name: 'Login' }).click();
//         });
//         test('REPORT05', async ({ page }) => {
//           await page.goto('https://stg.empowergpt.ai/chat');
//           //await page.goto('https://staging.empowergpt.ai/chat');
//           await page.getByPlaceholder('Enter Email').fill('Admin');
//           await page.getByPlaceholder('Enter Password').click();
//           await page.getByPlaceholder('Enter Password').fill('@#Intech123');
//           await page.getByRole('button', { name: 'Login' }).click();
//           });
//           test('REPORT06', async ({ page }) => {
//             test.setTimeout(240000);
//             await page.goto('https://stg.empowergpt.ai/chat');
//         //await page.goto('https://staging.empowergpt.ai/chat');
//         await page.getByPlaceholder('Enter Email').fill('Admin');
//         await page.getByPlaceholder('Enter Password').click();
//         await page.getByPlaceholder('Enter Password').fill('@#Intech123');
//         await page.getByRole('button', { name: 'Login' }).click();
//             });
//             test('REPORT07', async ({ page }) => {
//               test.setTimeout(240000);
//               await page.goto('https://stg.empowergpt.ai/chat');
//               //await page.goto('https://staging.empowergpt.ai/chat');
//               await page.getByPlaceholder('Enter Email').fill('Admin');
//               await page.getByPlaceholder('Enter Password').click();
//               await page.getByPlaceholder('Enter Password').fill('@#Intech123');
//               await page.getByRole('button', { name: 'Login' }).click();
//               });
//               test('REPORT08', async ({ page }) => {
//                 test.setTimeout(240000);
//                 await page.goto('https://stg.empowergpt.ai/chat');
//                 //await page.goto('https://staging.empowergpt.ai/chat');
//                 await page.getByPlaceholder('Enter Email').fill('Admin');
//                 await page.getByPlaceholder('Enter Password').click();
//                 await page.getByPlaceholder('Enter Password').fill('@#Intech123');
//                 await page.getByRole('button', { name: 'Login' }).click();
//                 });
//                 test('REPORT09', async ({ page }) => {
//                   await page.goto('https://stg.empowergpt.ai/chat');
//                   //await page.goto('https://staging.empowergpt.ai/chat');
//                   await page.getByPlaceholder('Enter Email').fill('Admin');
//                   await page.getByPlaceholder('Enter Password').click();
//                   await page.getByPlaceholder('Enter Password').fill('@#Intech123');
//                   await page.getByRole('button', { name: 'Login' }).click();
//                   });
//                   test('REPORT10', async ({ page }) => {
//                     await page.goto('https://stg.empowergpt.ai/chat');
//                     //await page.goto('https://staging.empowergpt.ai/chat');
//                     await page.getByPlaceholder('Enter Email').fill('Admin');
//                     await page.getByPlaceholder('Enter Password').click();
//                     await page.getByPlaceholder('Enter Password').fill('@#Intech123');
//                     await page.getByRole('button', { name: 'Login' }).click();
//                     });
//                     test('REPORT11', async ({ page }) => {
//                       await page.goto('https://stg.empowergpt.ai/chat');
//                       //await page.goto('https://staging.empowergpt.ai/chat');
//                       await page.getByPlaceholder('Enter Email').fill('Admin');
//                       await page.getByPlaceholder('Enter Password').click();
//                       await page.getByPlaceholder('Enter Password').fill('@#Intech123');
//                       await page.getByRole('button', { name: 'Login' }).click();
//                       });
                      // test('REPORT12', async ({ page }) => {
                      //   await page.goto('https://stg.empowergpt.ai/chat');
                      //   //await page.goto('https://staging.empowergpt.ai/chat');
                      //   await page.getByPlaceholder('Enter Email').fill('Admin');
                      //   await page.getByPlaceholder('Enter Password').click();
                      //   await page.getByPlaceholder('Enter Password').fill('@#Intech123');
                      //   await page.getByRole('button', { name: 'Login' }).click();
                      //   });
                      //   // test('REPORT13', async ({ page }) => {
                      //   //   test.setTimeout(2400);
                      //   //   await page.goto('https://stg.empowergpt.ai/chat');
                      //   //   //await page.goto('https://staging.empowergpt.ai/chat');
                      //   //   await page.getByPlaceholder('Enter Email').fill('Admin');
                      //   //   await page.getByPlaceholder('Enter Password').click();
                      //   //   await page.getByPlaceholder('Enter Password').fill('@#Intech123');
                      //   //   await page.getByRole('button', { name: 'Login' }).click();
                      //     // });
                      //     test('REPORT14', async ({ page }) => {
                      //       await page.goto('https://stg.empowergpt.ai/chat');
                      //       //await page.goto('https://staging.empowergpt.ai/chat');
                      //       await page.getByPlaceholder('Enter Email').fill('Admin');
                      //       await page.getByPlaceholder('Enter Password').click();
                      //       await page.getByPlaceholder('Enter Password').fill('@#Intech123');
                      //       await page.getByRole('button', { name: 'Login' }).click();
                      //       });
                      //       test('REPORT15', async ({ page }) => {
                      //         test.setTimeout(240000000);
                      //         await page.goto('https://stg.empowergpt.ai/chat');
                      //         //await page.goto('https://staging.empowergpt.ai/chat');
                      //         await page.getByPlaceholder('Enter Email').fill('Admin');
                      //         await page.getByPlaceholder('Enter Password').click();
                      //         await page.getByPlaceholder('Enter Password').fill('@#Intech123');
                      //         await page.getByRole('button', { name: 'Login' }).click();
                      //         });


});
