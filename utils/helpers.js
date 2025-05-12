/**
 * Compares two arrays of strings to check if one is a sorted version of the other.
 */
export function isSorted(array, order = 'asc') {
    const sorted = [...array].sort((a, b) => a.localeCompare(b));
    return order === 'asc'
      ? JSON.stringify(array) === JSON.stringify(sorted)
      : JSON.stringify(array) === JSON.stringify(sorted.reverse());
  }
  
  /**
   * Converts NodeList/locator list to array of text
   */
  export async function getTextArrayFromLocators(locatorList) {
    const count = await locatorList.count();
    const texts = [];
    for (let i = 0; i < count; i++) {
      texts.push(await locatorList.nth(i).textContent());
    }
    return texts;
  }
  