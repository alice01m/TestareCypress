describe('Login with invalid credentials', () => {

    // Verify error message for invalid username at login
    it('Displays an error message when the username is incorrect', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user1');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Username and password do not match any user in this service');
    })

    // Verify error message for invalid password at login
    it('Displays an error message when the password is incorrect', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('1234');
        cy.get('[data-test="login-button"]').click();
        
        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Username and password do not match any user in this service');
    })
})