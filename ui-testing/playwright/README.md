# Playwright Testing Setup

This project uses **Playwright** for end-to-end UI testing.

##  Installation

1. Navigate to the `ui-testing/playwright` directory:
   ```bash
   cd ui-testing/playwright
   ```

2. Initialize a Node.js project:
   ```bash
   npm init -y
   ```

3. Install Playwright:
   ```bash
   npm install -D @playwright/test
   ```

4. Install Playwright Browsers:
   ```bash
   npx playwright install
   ```

---

##  Running Tests

Run all tests:
```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test tests/example.spec.js
```

Run tests in headed mode:
```bash
npx playwright test --headed
```

---

##  Project Structure

```
playwright/
 ├── tests/                 # Test files
 │    └── example.spec.js   # Sample test
 ├── package.json           # Node.js project file
 ├── playwright.config.js   # Playwright configuration
 └── README.md              # Documentation
```

---

##  Sample Test

```javascript
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = await page.title();
  expect(title).toContain('Playwright');
});
```

---

##  References

- [Playwright Official Docs](https://playwright.dev/docs/intro)
- [Playwright GitHub](https://github.com/microsoft/playwright)
