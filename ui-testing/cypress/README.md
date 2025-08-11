# Cypress UI Testing

This folder contains a basic Cypress setup for automated UI testing.

##  Prerequisites
Before you start, make sure you have:
- **Node.js** (v14 or higher) installed
- **npm** (comes with Node.js)

You can check your versions by running:
```bash
node -v
npm -v
```

##  Installation
1. Navigate to the `ui-testing/cypress` folder:
```bash
cd ui-testing/cypress
```

2. Install dependencies:
```bash
npm install
```

3. Install Cypress:
```bash
npm install cypress --save-dev
```

##  Running Tests

- **Open Cypress Test Runner**:
```bash
npx cypress open
```

- **Run tests in headless mode**:
```bash
npx cypress run
```

##  Folder Structure
```
cypress/
  ├── e2e/               # Test specifications
  ├── fixtures/           # Test data
  ├── support/            # Commands & hooks
cypress.config.js         # Cypress configuration file
package.json              # Node dependencies & scripts
```

##  Writing Your First Test
Example test file (`cypress/e2e/sample.cy.js`):
```javascript
describe('Sample Test', () => {
  it('Visits the example page', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
  });
});
```

##  Learn More
- [Cypress Documentation](https://docs.cypress.io/)
