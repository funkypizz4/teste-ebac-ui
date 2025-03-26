/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
/*
    afterEach(() => {
        cy.screenshot()
    });
*/
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('joao_teste@teste.com.br')
        cy.get('#password').type('senhateste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, joao_teste (não é joao_teste? Sair)')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('testejao@teste.com.br')
        cy.get('#password').type('senhateste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('joao_teste@teste.com.br')
        cy.get('#password').type('senhaerrada')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail joao_teste@teste.com.br está incorreta. Perdeu a senha?')
    });

    it('Deve fazer login com sucesso usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, joao_teste (não é joao_teste? Sair)')
    });

    it('Deve fazer login com sucesso usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, {log: false})
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, joao_teste (não é joao_teste? Sair)')
        })
    });

    it('Deve fazer login com sucesso - Usando comandos customizados', () => {
        cy.login('joao_teste@teste.com.br','senhateste')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, joao_teste (não é joao_teste? Sair)')
    });
})