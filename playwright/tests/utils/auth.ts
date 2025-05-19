// utils/auth.ts
import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export async function loginAsAdmin(page: Page) {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('admin@account.com', 'password');
}
