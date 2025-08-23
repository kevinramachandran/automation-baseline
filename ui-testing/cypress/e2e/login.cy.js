import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Login with valid credentials', () => {
    cy.fixture('users').then(user => {
      LoginPage.login(user.validUser.username, user.validUser.password);
      ProductsPage.elements.title().should('contain', 'Products');
    });
  });

  it('Login with invalid credentials should show error', () => {
    cy.fixture('users').then(user => {
      LoginPage.login(user.invalidUser.username, user.invalidUser.password);
      LoginPage.elements.errorMsg().should('be.visible');
    });
  });
});
