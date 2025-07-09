
describe('On Linkedin', () => {

    it('I can login', () => {
        cy.visit('https://linkedin.com');

        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('alicemanaila000@gmail.com');
        cy.get('#password').type('1234'); 
        cy.get('.btn__primary--large').click();
        cy.get('#ember16').should('exist');
    })
})