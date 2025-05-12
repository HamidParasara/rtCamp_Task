import { cartLocators } from '../locators/cart_locators.js';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator(cartLocators.cartItems);
    this.checkoutButton = page.locator(cartLocators.checkoutButton);
  }

  async getCartItemNames() {
    const count = await this.cartItems.count();
    const names = [];
    for (let i = 0; i < count; i++) {
      names.push(await this.cartItems.nth(i).locator('.inventory_item_name').textContent());
    }
    return names;
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
