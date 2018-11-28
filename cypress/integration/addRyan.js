before('open main page', () => cy.visit(''));
describe('Adding ryans', () => {
    it('should add one ryan ', () => {
        cy.get('#addRyan').click();
        cy.get('img').should('be.visible');
    });
    it('should enable remove button', () => {
        cy.get('#removeRyan')
            .should('be.enabled');
    });
    it('should remove ryan', () => {
        cy.get('#removeRyan')
            .click()
            .should('be.disabled');
        cy.get('img').should('not.exist');
    });
});