const { test, expect } = require('@playwright/test');

test('Check about page', async ({ page }) => {
  await page.goto('http://localhost:8080/about');

  const footer = await page.waitForSelector('footer', { state: 'attached' });
  const text = await footer.textContent();
  expect(text).toContain('Software Engineering and DevOps Retake Exam');
});
