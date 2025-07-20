describe('Login with valid credentials', () => {

    it('Should log in successfully with valid credentials', () => {
        
        cy.login('standard_user', 'secret_sauce');

        // Check if the user is redirected to the inventory page after login 
        cy.url().should('include', '/inventory.html');

        // Check if the inventory container is visible, indicating a successful login
        cy.get('[data-test="inventory-container"]').should('be.visible');
        
    })
})