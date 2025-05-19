import { Page, Locator } from '@playwright/test';

export class ViewAllTicketsPage {
  readonly page: Page;
  readonly ticketsLink: Locator;
  readonly ticketsRows: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ticketsLink = page.getByRole('link', { name: 'Tickets' });
    this.ticketsRows = page.locator('.ticket-row'); 
  }

  async goto() {
    await this.ticketsLink.click();
  }

  async getTicketsCount(): Promise<number> {
    return await this.ticketsRows.count();
  }
}
