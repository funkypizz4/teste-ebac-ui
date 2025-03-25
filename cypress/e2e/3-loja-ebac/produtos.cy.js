/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });
    
    it('Deve selecionar o primeiro produto da lista', () => {
        var nomeProduto
        cy.get('.post-2559 > .product-block > .caption > .meta > .infor > .name').invoke('text').then((text) => {
            nomeProduto = text;
            cy.log(nomeProduto)
          });
        cy.get('.product-block').first().click()
        cy.get('.product_title').should('exist')
        cy.get('.product_title').invoke('text').then((text) => {
            expect(text).to.eq(nomeProduto);
          });
    });

    it('Deve selecionar o ultimo produto da lista', () => {
        var nomeProduto
        cy.get('.post-3680 > .product-block > .caption > .meta > .infor > .name').invoke('text').then((text) => {
            nomeProduto = text;
            cy.log(nomeProduto)
          });
        cy.get('.product-block').last().click()
        cy.get('.product_title').should('exist')
        cy.get('.product_title').invoke('text').then((text) => {
            expect(text).to.eq(nomeProduto);
          });
    });

    it('Deve selecionar o terceiro produto da lista', () => {
        var nomeProduto
        cy.get('.post-3073 > .product-block > .caption > .meta > .infor > .name').invoke('text').then((text) => {
            nomeProduto = text;
            cy.log(nomeProduto)
          });
        cy.get('.product-block').eq(2).click()
        cy.get('.product_title').should('exist')
        cy.get('.product_title').invoke('text').then((text) => {
            expect(text).to.eq(nomeProduto);
          });
    });

    it('Deve selecionar produto pelo nome', () => {
        cy.get('.product-block').contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.product_title').should('exist')
        cy.get('.product_title').invoke('text').then((text) => {
            expect(text).to.eq('Ajax Full-Zip Sweatshirt');
          });
    });
});