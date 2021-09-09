///<reference types="cypress"/>
 
describe('Cypress basic', () => {

        it('Should visit a page and assert title', () => {
            cy.visit('http://wcaquino.me/cypress/componentes.html')
             
            cy.title()
            .should('be.equal','Campo de Treinamento')
            .and('contain', 'Campo').debug()
        })
        

        it('Should find and interact with an element', () => {
            cy.visit('http://wcaquino.me/cypress/componentes.html')
             
         cy.get('#buttonSimple').click()
         cy.get('#buttonSimple').should('have.value','Obrigado!')
        })
 })