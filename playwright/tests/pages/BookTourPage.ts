import { Page, Locator } from '@playwright/test';

export class BookTourPage {
  readonly page: Page;
  readonly tourCard: Locator;
  readonly ticketsInput: Locator;
  readonly ticketCodeInput: Locator;
  readonly emailInput: Locator;
  readonly bookButton: Locator;
  readonly confirmationMessage: Locator; 

  constructor(page: Page) {
    this.page = page;
    this.tourCard = page.locator('div').filter({
      hasText: /^Book Tour Destination: BaliTour name: Tempore ut vel\.25 slots available$/,
    }).getByRole('button');
    this.ticketsInput = page.getByPlaceholder('Please enter the number of');
    this.ticketCodeInput = page.getByRole('textbox', { name: 'Please enter the ticket' });
    this.emailInput = page.getByRole('textbox', { name: 'Please enter your email' });
    this.bookButton = page.locator('button').filter({ hasText: /^Book Tour$/ });
    this.confirmationMessage = page.locator('.booking-confirmation'); // Update this selector if needed
  }

  async bookTour(tickets: string, code: string, email: string) {
    await this.tourCard.click();
    await this.ticketsInput.fill(tickets);
    await this.ticketCodeInput.fill(code);
    await this.emailInput.fill(email);
    await this.bookButton.click();
  }
}
