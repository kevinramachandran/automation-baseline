describe('Sample Cypress Test', () => {
  it('Visits example.com', () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain').should('be.visible')
  })
})
