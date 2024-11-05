/// <reference types="cypress" />

describe('Testes para a pagina de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })
    
    it('Deve ir a pagina de formulario da candidatura', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()

        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })
    it('Deve preecher o formulário de inscriçao', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Daniel Félix')
        cy.get('input[name="email"]').type('carlosdanielfelixfarias@gmail.com')
        cy.get('input[name="telefone"]').type('95 999294024')
        cy.get('input[name="endereco"]').type('rua teste bairro: bairro: Ebac cidade: Ebac')
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('#linux').check()
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
        cy.screenshot('tela-inscricao-preenchido')
    })
}) 