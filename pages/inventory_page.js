import { inventoryLocators } from '../locators/inventory_locators.js';

export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.sortDropdown = page.locator(inventoryLocators.sortDropdown);
    this.inventoryItems = page.locator(inventoryLocators.inventoryItems);
    this.priceElements = page.locator(inventoryLocators.priceElements);
    this.cartIcon = page.locator(inventoryLocators.cartIcon);
    this.itemNames = page.locator(inventoryLocators.itemNames); 
  }

  async sortItems(optionText) {
    await this.sortDropdown.selectOption({ label: optionText });
  }

  async getPriceLocators() {
    return this.priceElements;
  }

  async getItemNames() {
    const count = await this.itemNames.count();
    const names = [];
    for (let i = 0; i < count; i++) {
      names.push(await this.itemNames.nth(i).textContent());
    }
    return names;
  }

  async addItemToCart(itemName) {
    const itemCard = this.page.locator(`.inventory_item:has-text("${itemName}")`);
    await itemCard.locator('button').click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}
