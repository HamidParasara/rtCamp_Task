import { checkoutLocators } from '../locators/checkout_locators.js';
import { expect } from '@playwright/test';

export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator(checkoutLocators.firstNameInput);
    this.lastNameInput = page.locator(checkoutLocators.lastNameInput);
    this.postalCodeInput = page.locator(checkoutLocators.postalCodeInput);
    this.continueButton = page.locator(checkoutLocators.continueButton);
    this.finishButton = page.locator(checkoutLocators.finishButton);
    this.orderCompleteHeader = page.locator(checkoutLocators.orderCompleteHeader);
  }

  async fillInformation(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async verifyOrderComplete() {
    await expect(this.orderCompleteHeader).toBeVisible({ timeout: 10000 });
    await expect(this.orderCompleteHeader).toHaveText('Thank you for your order!');
  }
  
}
