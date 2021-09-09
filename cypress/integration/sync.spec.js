///<reference types="cypress"/>

describe ('Esperas..', ()=>{

    before(()=>{
        cy.visit('http://wcaquino.me/cypress/componentes.html')

    })

    beforeEach(()=>{

        cy.reload()

    })

    it('Deve aguardar elemento estar diponivel', () =>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')

    })

    it('Deve fazer retry', () =>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')              
                .should('exist')

    })


    it('Uso do find', ()=>{

        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain','Item 1')
            
        cy.get('#lista li span')
              .should('contain','Item 2')

    })

    it ('Uso do Timeout', ()=>{
      
        // cy.get('#buttonDelay').click()
        //cy.get('#novoCampo', {timeout:1000}).should('exist')

        // cy.get('#buttonListDOM').click()
        // cy.wait(5000)
        // cy.get('#lista li span')
        //     .should('contain','Item 2')


        cy.get('#buttonListDOM').click()
        cy.get('#lista li span',{timeout:3000})
             .should('have.length',1)
             
    
    })
    
    it.only('Click retry',()=>{

        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value','111')
    })


})