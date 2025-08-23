class CheckoutPage {
  elements = {
    firstName: () => cy.get('[data-test="firstName"]'),
    lastName: () => cy.get('[data-test="lastName"]'),
    postalCode: () => cy.get('[data-test="postalCode"]'),
    continueBtn: () => cy.get('[data-test="continue"]'),
    finishBtn: () => cy.get('[data-test="finish"]'),
    successMsg: () => cy.get('.complete-header')
  };

  fillForm(data) {
    this.elements.firstName().type(data.firstName);
    this.elements.lastName().type(data.lastName);
    this.elements.postalCode().type(data.postalCode);
    this.elements.continueBtn().click();
  }

  finishOrder() {
    this.elements.finishBtn().click();
  }
}
module.exports = new CheckoutPage();
