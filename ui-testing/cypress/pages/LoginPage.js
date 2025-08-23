class LoginPage {
  elements = {
    username: () => cy.get('[data-test="username"]'),
    password: () => cy.get('[data-test="password"]'),
    loginBtn: () => cy.get('[data-test="login-button"]'),
    errorMsg: () => cy.get('[data-test="error"]')
  };

  login(username, password) {
    this.elements.username().type(username);
    this.elements.password().type(password);
    this.elements.loginBtn().click();
  }
}
module.exports = new LoginPage();
