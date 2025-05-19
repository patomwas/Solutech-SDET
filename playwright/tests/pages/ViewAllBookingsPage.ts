import { Page, Locator } from '@playwright/test';

export class ViewAllBookingsPage {
  readonly page: Page;
  readonly bookingsLink: Locator;
  readonly bookingRows: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bookingsLink = page.getByRole('link', { name: 'Bookings' });
    this.bookingRows = page.locator('.booking-row'); 
  }

  async goto() {
    await this.bookingsLink.click();
  }

  async getBookingsCount(): Promise<number> {
    return await this.bookingRows.count();
  }
}
