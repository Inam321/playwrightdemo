npx playwright test .\tests\PDF EXCEL.spec.js --project=chromium --headed & allure generate allure-results -o allure-report --clean & npx playwright test .\tests\small f.spec.js --project=chromium --headed & allure generate --single-file allure-results --clean & npx playwright test .\tests\email g.spec.js --project=firefox --headed

