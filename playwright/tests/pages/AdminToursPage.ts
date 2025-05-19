import { Page, Locator } from '@playwright/test';

export class AdminToursPage {
  readonly page: Page;
  readonly addTourButton: Locator;
  readonly nameInput: Locator;
  readonly descriptionInput: Locator;
  readonly destinationDropdown: Locator;
  readonly destinationOption: (destination: string) => Locator;
  readonly priceInput: Locator;
  readonly slotsInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addTourButton = page.getByRole('button', { name: 'Create Tour' });
    this.nameInput = page.getByRole('textbox', { name: 'Enter tour name' });
    this.descriptionInput = page.getByRole('textbox', { name: 'Enter Tour description' });
    this.destinationDropdown = page.locator('span', { hasText: 'Choose Destination' });
    this.destinationOption = (destination: string) =>
      page.getByRole('listitem').filter({ hasText: destination });
    this.priceInput = page.getByPlaceholder('Enter the price per slot');
    this.slotsInput = page.getByPlaceholder('Enter the number of slots');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async createTour(tour: {
    name: string;
    description: string;
    destination: string;
    price: string;
    slots: string;
  }) {
    await this.addTourButton.click();
    await this.nameInput.fill(tour.name);
    await this.descriptionInput.fill(tour.description);
    await this.destinationDropdown.click();
    await this.destinationOption(tour.destination).click();
    await this.priceInput.fill(tour.price);
    await this.slotsInput.fill(tour.slots);
    await this.submitButton.click();
  }
}
