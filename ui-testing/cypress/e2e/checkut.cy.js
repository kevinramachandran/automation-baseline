import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

describe('Checkout Tests', () => {
  beforeEach(() => {
    cy.fixture('users').then(user => {
      cy.visit('/');
      LoginPage.login(user.validUser.username, user.validUser.password);
    });
  });

  it('Complete checkout process', () => {
    ProductsPage.addBackpack();
    ProductsPage.openCart();
    CartPage.checkout();

    cy.fixture('checkout').then(data => {
      CheckoutPage.fillForm(data);
    });

    CheckoutPage.finishOrder();
    CheckoutPage.elements.successMsg().should('contain', 'THANK YOU FOR YOUR ORDER');
  });
});
