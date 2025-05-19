import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly bookTourBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bookTourBtn = page.locator('text=Book a Tour');
  }

  async goto() {
    await this.page.goto('https://example.com');
  }

  async startTourBooking() {
    await this.bookTourBtn.click();
  }
}
