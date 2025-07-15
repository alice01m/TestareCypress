describe('Logout functionality', () => {

    it('Logs out successfully', () => {

        cy.visit('https://www.saucedemo.com/');

        // Log in with valid credentials
        cy.login('standard_user', 'secret_sauce');

        // Check if the user is redirected to the inventory page
        cy.url().should('include', '/inventory.html');

        // Open the sidebar menu
        cy.get('#react-burger-menu-btn').click();

        // Click the Logout button in the side menu
        cy.get('[data-test="logout-sidebar-link"]').click();

        // Check if the login form is visible again
        cy.get('#login_button_container').should('be.visible');

        // Check if the user is redirected to the login page
        cy.url().should('eq', 'https://www.saucedemo.com/')

    })
})