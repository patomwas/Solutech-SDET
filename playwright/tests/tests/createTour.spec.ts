import { test } from '@playwright/test';
import { loginAsAdmin } from '../utils/auth';
import { AdminToursPage } from '../pages/AdminToursPage';

test('Admin creates tour after login', async ({ page }) => {
  // Login as admin
  await loginAsAdmin(page);

  // Navigate to the Tours page
  await page.getByRole('link', { name: 'Tours' }).click();

  // Create a new tour
  const adminTours = new AdminToursPage(page);
  await adminTours.createTour({
    name: 'Jerusalem',
    description: 'jerusalem',
    destination: 'Freetown',
    price: '15000',
    slots: '4'
  });
});
