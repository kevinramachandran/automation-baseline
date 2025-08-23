class ProductsPage {
  elements = {
    title: () => cy.get('.title'),
    cartBadge: () => cy.get('.shopping_cart_badge'),
    sortDropdown: () => cy.get('[data-test="product_sort_container"]'),
    backpackAdd: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    bikeLightAdd: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
    bikeLightRemove: () => cy.get('[data-test="remove-sauce-labs-bike-light"]'),
    cartLink: () => cy.get('.shopping_cart_link'),
    menuBtn: () => cy.get('#react-burger-menu-btn'),
    logoutBtn: () => cy.get('#logout_sidebar_link')
  };

  addBackpack() {
    this.elements.backpackAdd().click();
  }

  addBikeLight() {
    this.elements.bikeLightAdd().click();
  }

  removeBikeLight() {
    this.elements.bikeLightRemove().click();
  }

  openCart() {
    this.elements.cartLink().click();
  }

  logout() {
    this.elements.menuBtn().click();
    this.elements.logoutBtn().click();
  }
}
module.exports = new ProductsPage();
