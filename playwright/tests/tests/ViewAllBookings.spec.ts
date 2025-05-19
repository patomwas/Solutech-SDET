import { test, expect } from '@playwright/test';
import { ViewAllBookingsPage } from '../pages/ViewAllBookingsPage'; // adjust path if needed
import { loginAsAdmin } from '../utils/auth';
test.describe('View All Bookings Page', () => {
  let viewAllBookingsPage: ViewAllBookingsPage;

  test.beforeEach(async ({ page }) => {
    viewAllBookingsPage = new ViewAllBookingsPage(page);
    await page.goto('https://sdet.solutechlabs.com/'); 
    await loginAsAdmin(page);
  });

  test('should navigate to bookings page and display bookings', async () => {
    await viewAllBookingsPage.goto();

    /*Ensuring  we are on the bookings page */
    await expect(viewAllBookingsPage.page).toHaveURL(/.*bookings/i); 

  });
});
