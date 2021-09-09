///<reference types="cypress"/>

describe ('Esperas..', ()=>{

    before(()=>{
        cy.visit('http://wcaquino.me/cypress/componentes.html')

    })

    it('Using jquery selector', () =>{

      cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
      cy.get('table#tabelaUsuarios tbody  > tr td:nth-child(3) > input')
      cy.get("[onClick*='Francisco']")

    })



    it('Using Xpath..',()=>{
        
        cy.xpath("//input[contains(@onclick,'Francisco')]")
    })

})