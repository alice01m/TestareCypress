describe('Login with valid credentials', () =>{

    it('Should log in successfully with valid credentials', () =>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // Check if the inventory container is visible, indicating a successful login
        cy.get('[data-test="inventory-container"]').should('be.visible');

        // Check if the user is redirected to the inventory page after login 
        cy.url().should('include', '/inventory.html');
        
    })
})