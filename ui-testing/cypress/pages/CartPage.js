class CartPage {
  elements = {
    checkoutBtn: () => cy.get('[data-test="checkout"]')
  };

  checkout() {
    this.elements.checkoutBtn().click();
  }
}
module.exports = new CartPage();
