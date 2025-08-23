import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";

describe('Cart Tests', () => {
  beforeEach(() => {
    cy.fixture('users').then(user => {
      cy.visit('/');
      LoginPage.login(user.validUser.username, user.validUser.password);
    });
  });

  it('Add product to cart', () => {
    ProductsPage.addBackpack();
    ProductsPage.elements.cartBadge().should('contain', '1');
  });

  it('Remove product from cart', () => {
    ProductsPage.addBikeLight();
    ProductsPage.removeBikeLight();
    ProductsPage.elements.cartBadge().should('not.exist');
  });
});
