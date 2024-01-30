describe('home page', () => {
  
  
  
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('the h1 contain correct text', () => {
    cy.getByData("hero-heading").contains('Testing Next.js Applications with Cypress')
  })

  it('the feature on home are correct', () => {
    cy.get('dt').eq(0).contains('4 Courses')
    cy.get('dt').eq(1).contains('25+ Lessons')
    cy.get('dt').eq(2).contains('Free and Open Source')
  })
})