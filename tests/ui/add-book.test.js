const { test, expect } = require('@playwright/test');


test('Check add book page', async ({ page }) => {
  await page.goto('http://localhost:8080/add-book');

  // Check if the form element exists
  const form = await page.waitForSelector('form', { state: 'attached' });
  expect(form).toBeTruthy();
});