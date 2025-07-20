describe('Add a product to the cart', () => {
    
    it('Adds a product to the cart and verifies it', () => {

        cy.login('standard_user', 'secret_sauce');

        // Check if the inventory container is visible
        cy.get('[data-test="inventory-container"]').should('be.visible');

        // Verify the inventory list is visible and contains items
        cy.get('[data-test="inventory-list"]').should('be.visible').and('not.be.empty');

        // Click the 'Add to cart' button for the backpack
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        // Check if the 'Remove' button is visible
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');

        // Check if the cart badge shows 1 item
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');

        // Click to cart icon and check if product is listed
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="inventory-item"]').should('have.length', 1);
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack');

    })
})