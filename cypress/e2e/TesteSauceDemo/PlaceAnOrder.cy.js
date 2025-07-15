describe('Place an order', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.login('standard_user', 'secret_sauce');
        // Verificăm că suntem pe pagina de inventar
        cy.url().should('include', '/inventory.html');
        cy.get('[data-test="inventory-container"]').should('be.visible');
    });
    
    it('Adds a product to the cart and completes the checkout process', () => {

        // Click the 'Add to cart' button for the backpack
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

         // Check if the cart badge shows 1 item
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');

        // Go to the cart page
        cy.get('[data-test="shopping-cart-link"]').click();

        // Check if the product is listed in the cart
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack');

        // Click to 'Checkout' button
        cy.get('[data-test="checkout"]').click();

        // Fill in checkout information
        cy.get('[data-test="firstName"]').type('Monica');
        cy.get('[data-test="lastName"]').type('Munteanu');
        cy.get('[data-test="postalCode"]').type('100100');

        // Click to 'Continue' button
        cy.get('[data-test="continue"]').click();

        // Check if the details of the order are displayed 
        cy.get('[data-test="payment-info-label"]').should('be.visible');
        cy.get('[data-test="shipping-info-label"]').should('be.visible');
        cy.get('[data-test="total-info-label"]').should('be.visible');
        cy.get('[data-test="finish"]').should('be.visible');

        // Click the "Finish" button to complete the order
        cy.get('[data-test="finish"]').click();

        // Check if the checkout is completed
        cy.get('[data-test="title"]').should('contain', 'Checkout: Complete!');

        // Check if the confirmation message is displayed
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!');
    
    })
})