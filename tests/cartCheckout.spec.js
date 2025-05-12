import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login_page';
import { InventoryPage } from '../pages/inventory_page';
import { CartPage } from '../pages/cart_page';
import { CheckoutPage } from '../pages/checkout_page';
import { credentials, checkoutInfo, webUrls  } from '../utils/testData';

let inventoryPage, cartPage, checkoutPage;

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);

  await page.goto(webUrls.pageUrl);
  await loginPage.login(credentials.valid.username, credentials.valid.password);
});

test('Add multiple items and validate checkout flow', async ({ page }) => {
  await inventoryPage.addItemToCart('Sauce Labs Backpack');
  await inventoryPage.addItemToCart('Sauce Labs Bolt T-Shirt');
  await inventoryPage.goToCart();

  const itemsInCart = await cartPage.getCartItemNames();
  expect(itemsInCart).toContain('Sauce Labs Backpack');
  expect(itemsInCart).toContain('Sauce Labs Bolt T-Shirt');

  await cartPage.checkout();
  await checkoutPage.fillInformation(checkoutInfo.firstName, checkoutInfo.lastName, checkoutInfo.postalCode);
  await checkoutPage.finishCheckout();

  await checkoutPage.verifyOrderComplete();
});
