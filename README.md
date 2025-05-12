# Playwright Automation Framework – rtCamp Assignment

This is a modular, scalable end-to-end automation framework built with **Playwright**, designed to meet the requirements of the **rtCamp Senior QA Engineer assignment**. It uses the **Page Object Model (POM)** and includes features like automatic per-step screenshots, video recording, HTML reporting, CI/CD via GitHub Actions, and more.

---

## Project Structure

```
├── .github/
│ └── workflows/
│ └── playwright-schedule.yml
├── pages/
│ ├── login_page.js
│ ├── inventory_page.js
│ ├── cart_page.js
│ └── checkout_page.js
├── locators/
│ ├── login_locators.js
│ ├── inventory_locators.js
│ ├── cart_locators.js
│ └── checkout_locators.js
├── tests/
│ ├── sorting.spec.js
│ ├── priceHighToLow.spec.js
│ ├── cartCheckout.spec.js
│ ├── visual.spec.js
│ └── accessibility.spec.js
├── utils/
│ ├── testData.js
│ ├── helpers.js
│ ├── logger.js
│ ├── visualHelper.js
├── reports/ 
├── test-results/
├── playwright.config.js
├── package.json
└── README.md

```

## Setup Instructions

1. **Install dependencies**  
```bash
npm install

```
2. **Install Playwright browsers**

npx playwright install --with-deps

npx playwright install 

npm i playwright

npm install --save-dev @playwright/test


```
```
## **Running Tests**

Run All Test - npx playwright test

Run a specific test - npx playwright test tests/cartCheckout.spec.js

Run test in headed - npx playwright test --headed

```
