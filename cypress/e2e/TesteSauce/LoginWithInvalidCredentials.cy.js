describe('Login with invalid credentials', () => {

    // Error message for incorrect username 
    it('Error message for incorrect username', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user1');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Username and password do not match any user in this service');
    })

    // Error message for incorrect password
    it('Error message for incorrect password', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('1234');
        cy.get('[data-test="login-button"]').click();
        
        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Username and password do not match any user in this service');
    })
})