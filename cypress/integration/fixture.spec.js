///<reference types="cypress"/>

describe('Fixture tests',() =>{
    it('Get data from fixture file',function (){
        cy.visit('http://wcaquino.me/cypress/componentes.html')

        cy.fixture('userData').as('usuario').then(()=>{
            cy.get('#formNome').type(this.usuario.nome)
            cy.get('#formSobrenome').type(this.usuario.sobrenome)
            cy.get('[name=formSexo][value=F]').click()
            cy.get(`[name=formComidaFavorita][value=${this.usuario.comida}]`).click()
            cy.get('#formEscolaridade').select(this.usuario.escolaridade)
            cy.get(`[data-testid]`).select(this.usuario.esportes)
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')

        })

    })
})