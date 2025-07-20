describe('Back to products button', () => {

    it('Verifies if Back to products button works properly', () => {

        cy.login('standard_user', 'secret_sauce');
        cy.get('[data-test="inventory-container"]').should('be.visible'); 

        // Go to the product details page
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click();

        // Check if the Back to products button works
        cy.get('[data-test="back-to-products"]').should('be.visible').click();

        // Check if the URL includes '/inventory.html'
        cy.url().should('include', '/inventory.html'); 

        // Check if the main inventory container is visible on the page
        cy.get('[data-test="inventory-container"]').should('be.visible');
    })

})