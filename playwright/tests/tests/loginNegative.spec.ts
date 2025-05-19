import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login with invalid credentials shows error message', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('patomwas@example.com', 'wrongpassword123');
  await expect(loginPage.errorMessage).toBeVisible();
});
