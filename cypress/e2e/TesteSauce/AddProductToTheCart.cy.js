describe('Add a product to the cart', () => 
{
    it('Adds a product to the cart and verifies it', () =>{
        // Visit the website
        cy.visit('https://www.saucedemo.com/');

        // Log in with valid credentials
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // Check if the inventory container is visible
        cy.get('[data-test="inventory-container"]').should('be.visible');

        // Check if the inventory list is visible
        cy.get('[data-test="inventory-list"]').should('be.visible');

        // Check if the list is not empty
        cy.get('[data-test="inventory-list"]').should('not.be.empty');

        // Click the 'Add to cart' button for the backpack
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        //  Check if the 'Add to cart' button no longer exists
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('not.exist');

        // Check if the 'Remove' button appears instead
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');

        // Check if the cart badge shows 1 item
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');

        // Click to cart icon and check if product is listed
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="inventory-item"]').should('have.length', 1);
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack');

    })
})