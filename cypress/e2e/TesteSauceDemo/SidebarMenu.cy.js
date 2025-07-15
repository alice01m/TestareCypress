describe('Sidebar Menu', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.login('standard_user', 'secret_sauce');
    });

    it('Opens and closes the sidebar menu', () => {

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