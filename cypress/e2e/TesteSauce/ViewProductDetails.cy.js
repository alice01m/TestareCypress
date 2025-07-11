describe('View product details', () =>
{
    it('Displays the product details', () => {
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

        // Check if the product details are displayed
        cy.get('.inventory_details_desc_container').should('be.visible');

        // Check if the product name is displayed
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack');

        // Check if the description and the price are visible
        cy.get('[data-test="inventory-item-desc"]').should('be.visible');
        cy.get('[data-test="inventory-item-price"]').should('be.visible');

        // Check if the 'Add to cart' button is visible
        cy.get('[data-test="add-to-cart"]').should('be.visible');

    })
})