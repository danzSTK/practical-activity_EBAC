/// <reference types="cypress" />

describe('Testando toda a pagina de adiçao e ediçao de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    }) 

    it('Testando a adiçao de um novo contato',() => {
        cy.get('input[type="text"]').type('Contato adicionado via cypress')
        cy.get('input[type="email"]').type('testeViaCypress@gmail.com')
        cy.get('input[type="tel"]').type('85 9 99294024')
        cy.get('.adicionar').click()

        cy.get('.cTVgex > li').should('contain', 'Contato adicionado via cypress')
    })

    it('Deve editar o ultimo contato para "Contato editado via cypress"', () => {
        cy.get('.edit').last().click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Contato editado via cypress')
        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('EditadotesteViaCypress@gmail.com')
        cy.get('.alterar').click()

        cy.get('.cTVgex > li').should('contain', 'Contato editado via cypress')
    })

    it('Deve Deletar o contato com o nome "Contato que será deletado via cypress"', () => {
        cy.get('input[type="text"]').type('Contato que será deletado via cypress')
        cy.get('input[type="email"]').type('testeViaCypress@gmail.com')
        cy.get('input[type="tel"]').type('85 9 99294024')
        cy.get('.adicionar').click()

        cy.get('.cTVgex > li').should('contain', 'Contato que será deletado via cypress')

        cy.contains('.contato', 'Contato que será deletado via cypress').find('.delete').click()

        cy.contains('.contato', 'Contato que será deletado via cypress').should('not.exist')
    })
})