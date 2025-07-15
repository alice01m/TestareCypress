describe('Remove a product from the cart', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.login('standard_user', 'secret_sauce');
    });

    it('Removes a product from the cart and verifies the cart is empty', () => {

        // Check if the inventory container is visible
        cy.get('[data-test="inventory-container"]').should('be.visible');

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

        // Click the remove button
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();

        // Verify if the product is no longer in the cart
        cy.get('[data-test="inventory-item"]').should('not.exist');

        // Check if the cart badge disappears
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist');

    })
})