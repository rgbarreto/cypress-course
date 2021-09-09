///<reference types="cypress"/>

 


describe('Helpers...', () =>{

it('Wrap', () =>{
    const obj = {nome:'User', idade:20}
    expect (obj).to.have.property('nome')

    cy.wrap(obj).should('have.property','nome')

     cy.visit('http://wcaquino.me/cypress/componentes.html')

    // // cy.get('#formNome').then($el=> { 

    // //     cy.wrap($el).type('funciona???')
    // // })

    const promise = new Promise ((resolve,reject) => {
        setTimeout(()=> {
            resolve(10)
        }, 500)
    })

    cy.get('#buttonSimple').then(()=> console.log("Encontrei o primeiro"))
    //promise.then(num =>console.log(num))
    cy.wrap(promise).then(ret => console.log(ret))
    cy.get('#buttonSimple').then(()=> console.log('Encontrei o segundo'))


} )


})