describe('Site-ul Google.com', () => {

// Testul numarul 1
    it('Functioneaza cu o cautare obisnuita', () => {
        cy.visit('https://google.com');
        cy.get('#L2AGLb > .QS5gu').click();
        cy.get('.gLFyf').type('vlog de it').type('{enter}');


        // Verific daca exista caseta cu numarul aproximativ al rezultatelor cautarii
        //cy.get('#result-stats').should('exist');
    })

})