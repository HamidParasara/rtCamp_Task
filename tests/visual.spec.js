import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login_page';
import { InventoryPage } from '../pages/inventory_page';
import { credentials, webUrls  } from '../utils/testData';

test('Visual regression test for Inventory page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await page.goto(webUrls.pageUrl);
  await loginPage.login(credentials.valid.username, credentials.valid.password);

  
  await expect(inventoryPage.sortDropdown).toBeVisible();

  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('inventory-page.png');
});
