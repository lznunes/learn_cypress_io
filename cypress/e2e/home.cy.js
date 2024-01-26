describe('home page', () => {
  it('the h1 contain correct text', () => {
    cy.visit('localhost:3000')
    cy.get('[data-test="hero-heading"]').contains('Testing Next.js Applications with Cypress')
  })
})