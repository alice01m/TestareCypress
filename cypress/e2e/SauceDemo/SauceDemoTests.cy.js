describe('Login Tests', () => {

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

    it('Should log in successfully with valid credentials', () => {
        
        cy.login('standard_user', 'secret_sauce');

        // Check if the user is redirected to the inventory page after login 
        cy.url().should('include', '/inventory.html');

        // Check if the inventory container is visible, indicating a successful login
        cy.get('[data-test="inventory-container"]').should('be.visible');
        
    })

})

describe('Logout Test', () => {

    it('Logs out successfully', () => {

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

describe('Sidebar Menu Test', () => {

    it('Opens and closes the sidebar menu', () => {

        cy.login('standard_user', 'secret_sauce'); 
        
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

describe('Cart Functionality', () => {

    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce');
    });

    it('Adds a product to the cart and verifies it', () => {

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

describe('Checkout Process', () => {

    it('Adds a product to the cart and completes the checkout process', () => {

        cy.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html');
        cy.get('[data-test="inventory-container"]').should('be.visible'); 

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

describe('Product Page Tests', () => {

    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce');
        cy.get('[data-test="inventory-container"]').should('be.visible'); 
    }); 

    it('Displays the product details', () => {

        // Go to the product details page
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click();

        // Check if the product details are displayed
        cy.get('.inventory_details_desc_container').should('be.visible');

        // Check if the product name is displayed
        cy.get('[data-test="inventory-item-name"]').should('contain.text', 'Sauce Labs Backpack');

        // Check if the description and the price are visible
        cy.get('[data-test="inventory-item-desc"]').should('be.visible');
        cy.get('[data-test="inventory-item-price"]').should('be.visible');

        // Check if the 'Add to cart' button is visible
        cy.get('[data-test="add-to-cart"]').should('be.visible');

    })

    it('Verifies if Back to products button works properly', () => {

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
  
