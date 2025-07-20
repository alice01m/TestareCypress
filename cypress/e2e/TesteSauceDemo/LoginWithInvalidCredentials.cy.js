describe('Login with invalid credentials', () => {

    const ERROR_MSG = 'Username and password do not match any user in this service';
    
    // Verify error message for invalid username at login
    it('Displays an error message when the username is incorrect', () => {
        cy.login('standard_user1', 'secret_sauce');
        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', ERROR_MSG);
    })

    // Verify error message for invalid password at login
    it('Displays an error message when the password is incorrect', () => {
        cy.login('standard_user', '1234');
        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', ERROR_MSG);
    })
})