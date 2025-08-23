// Example custom Cypress commands

// Login command
Cypress.Commands.add('login', (username, password) => {
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})

// Add product to cart
Cypress.Commands.add('addProductToCart', (productName) => {
  cy.contains('.inventory_item_name', productName)
    .parents('.inventory_item')
    .find('button').click()
})
