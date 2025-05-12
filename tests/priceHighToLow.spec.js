import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login_page';
import { InventoryPage } from '../pages/inventory_page';
import { credentials, webUrls  } from '../utils/testData';
import { isSorted, getTextArrayFromLocators } from '../utils/helpers';

let inventoryPage;

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);

  await page.goto(webUrls.pageUrl);
  await loginPage.login(credentials.valid.username, credentials.valid.password);
});

test('Verify items are sorted by Price High to Low', async ({ page }) => {
  await inventoryPage.sortItems('Price (high to low)');

  const priceElements = await inventoryPage.getPriceLocators();
  const pricesText = await getTextArrayFromLocators(priceElements);
  const prices = pricesText.map(p => parseFloat(p.replace('$', '')));

  const sorted = [...prices].sort((a, b) => b - a);
  expect(prices).toEqual(sorted);
});
