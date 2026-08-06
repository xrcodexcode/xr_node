import { test, expect } from '@playwright/test';

test.describe('Piyush Wiki E2E Health Check', () => {
  test('homepage loads and renders system status', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Piyush Wiki Engine');
    await expect(page.getByText('System Foundation Active')).toBeVisible();
  });
});
