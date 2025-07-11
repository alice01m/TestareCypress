describe('Back to products button', () => {

    it('Verifies if Back to products button works properly', () => {

        // Visit the website
        cy.visit('https://www.saucedemo.com/');

        // Log in with valid credentials
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // Check if the inventory container is visible
        cy.get('[data-test="inventory-container"]').should('be.visible');

        // Go to the product details page
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click();

        // Check if the Back to products button works
        cy.get('[data-test="back-to-products"]').should('be.visible');
        cy.get('[data-test="back-to-products"]').click();

        // Check if the URL includes '/inventory.html'
        cy.url().should('include', '/inventory.html'); 

        // Check if the main inventory container is visible on the page
        cy.get('[data-test="inventory-container"]').should('be.visible');
    })

} )