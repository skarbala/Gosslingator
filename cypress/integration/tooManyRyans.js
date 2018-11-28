describe('Displaying a warning message in case of too many ryans', () => {
    it('should open main page', () => {
        cy.visit('');
    });
    it('should add 50 ryans for the message to be displayed', () => {
        for (let i = 0; i < 50; i++) {
            cy.get('#addRyan').click();
        }
        cy.get('.tooManyRyans').should('be.visible');
    });
    it('should display right text', () => {
        cy.get('.tooManyRyans').should('have.text','number of ryansis too damnhigh')
    });
});