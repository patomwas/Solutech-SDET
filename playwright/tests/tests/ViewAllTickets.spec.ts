import { test, expect } from '@playwright/test';
import {ViewAllTicketsPage } from '../pages/ViewAllTickectsPage';
import { loginAsAdmin } from '../utils/auth';
test.describe('View All tickets Page', () => {
  let viewAllTicketsPage: ViewAllTicketsPage;

  test.beforeEach(async ({ page }) => {
    viewAllTicketsPage = new ViewAllTicketsPage(page);
    await page.goto('https://sdet.solutechlabs.com/'); 
    await loginAsAdmin(page);
  });

  
  test('should navigate to tickets page and display tickets', async () => {
    await viewAllTicketsPage.goto();

    /*Ensuring  we are on the tickets page */

    await expect(viewAllTicketsPage.page).toHaveURL(/.*tickets/i); 
  });
});
