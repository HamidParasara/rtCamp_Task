import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login_page.js';
import { InventoryPage } from '../pages/inventory_page.js';
import { credentials,webUrls  } from '../utils/testData';


let inventoryPage;

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
  
    await page.goto(webUrls.pageUrl);
    await page.waitForLoadState('networkidle');
    await loginPage.login(credentials.valid.username, credentials.valid.password);
  });

test('Verify Z-A sorting on All Items page', async () => {
  await inventoryPage.sortItems('Name (Z to A)');
  const itemNames = await inventoryPage.getItemNames();
  const sortedNames = [...itemNames].sort().reverse();

  expect(itemNames).toEqual(sortedNames);
});
