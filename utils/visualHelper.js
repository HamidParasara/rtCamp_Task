import { expect } from '@playwright/test';

/**
 * Takes a screenshot and compares it with the baseline snapshot.
 * @param {Page} page - Playwright page object
 * @param {string} name - Snapshot filename
 */
export async function compareScreenshot(page, name) {
  await expect(page).toHaveScreenshot(`${name}.png`, {
    fullPage: true,
    threshold: 0.2 
  });
}
