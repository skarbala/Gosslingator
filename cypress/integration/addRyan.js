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
    it('should update the counter', () => {
        cy.get('#ryanCounter').should('have.text', '1');
    });
    it('should have correct counter description', ()=> {
        cy.get('.ryan-counter h3').should('have.text', 'ryan')
    });
    it('should remove ryan', () => {
        cy.get('#removeRyan')
            .click()
            .should('be.disabled');
        cy.get('img').should('not.exist');
    });
    it('should update the counter', () => {
        cy.get('#ryanCounter').should('have.text', '0');
    });
});