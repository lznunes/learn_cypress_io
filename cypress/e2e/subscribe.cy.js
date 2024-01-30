describe ('Subscribe page', () => {
    

    beforeEach(() => {
        cy.visit('localhost:3000');
      })
        
      it('Allow user subscribe newsletter', () => {
        cy.getByData("email-input").type('teste@teste.com');
        cy.getByData("submit-button").should("be.visible").click();
        cy.getByData("success-message").should("be.visible").contains('teste@teste.com has been successfully subscribed');
      })

})
