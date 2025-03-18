/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('joao_teste@teste.com.br')
        cy.get('#password').type('senhateste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, joao_teste (não é joao_teste? Sair)')
    })
})