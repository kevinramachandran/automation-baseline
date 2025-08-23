import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";

describe('Product Sorting Test', () => {
  beforeEach(() => {
    cy.fixture('users').then(user => {
      cy.visit('/');
      LoginPage.login(user.validUser.username, user.validUser.password);
    });
  });

  it('Sort products by price low to high', () => {
    ProductsPage.elements.sortDropdown().select('lohi');
    cy.get('.inventory_item_price').then($prices => {
      const priceArray = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')));
      const sortedArray = [...priceArray].sort((a, b) => a - b);
      expect(priceArray).to.deep.equal(sortedArray);
    });
  });

  it('Logout from application', () => {
    ProductsPage.logout();
    cy.url().should('include', 'saucedemo.com/');
  });
});
