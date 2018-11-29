describe('Displaying a warning message in case of too many ryans', () => {
    it('should open main page', () => {
        cy.visit('');
    });
    it('should add 50 ryans for the message to be displayed', () => {
        for (let i = 0; i < 50; i++) {
            cy.get('#addRyan').click();
        }
    });
    it('should update the counter', () => {
        cy.get('#ryanCounter').should('have.text', '50');
    });
    it('should display right text', () =>
        cy.get('.tooManyRyans')
            .should('be.visible')
            .should('have.text', 'number of ryansis too damnhigh')
    );
    it('should remove the message when 1 ryan is removed', () => {
        cy.get('#removeRyan').click();
        cy.get('.tooManyRyans')
            .should('not.be.visible');
    });
});