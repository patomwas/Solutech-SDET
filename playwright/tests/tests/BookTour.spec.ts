import { test, expect } from '@playwright/test';
import { BookTourPage } from '../pages/BookTourPage';

test('User can successfully book a tour', async ({ page }) => {
  await page.goto('https://sdet.solutechlabs.com/');
  
  const bookTourPage = new BookTourPage(page);

  await bookTourPage.bookTour('6', '54test', 'patomwas31@gmail.com');

});

