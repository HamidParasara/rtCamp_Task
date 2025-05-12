import { test } from '@playwright/test';
import { LoginPage } from '../pages/login_page';
import { InventoryPage } from '../pages/inventory_page';
import { credentials, webUrls  } from '../utils/testData';

test('Accessibility check for Inventory page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await page.goto(webUrls.pageUrl);
  await loginPage.login(credentials.valid.username, credentials.valid.password);

  // Capture and log the accessibility tree snapshot
  const snapshot = await page.accessibility.snapshot();
  console.dir(snapshot, { depth: null });
});
