describe('Sidebar Menu', () => {

    it('Opens and closes the sidebar menu', () => {

        // Visit the website
        cy.visit('https://www.saucedemo.com/');

        // Log in with valid credentials
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // Click the sidebar menu button
        cy.get('#react-burger-menu-btn').click();

        // Check if the sidebar menu is visible
        cy.get('.bm-menu-wrap').should('be.visible');

        // Click the close button on the sidebar menu
        cy.get('#react-burger-cross-btn').click();

        // Check if the sidebar menu is no longer visible
        cy.get('.bm-menu-wrap').should('not.be.visible');
    })
})