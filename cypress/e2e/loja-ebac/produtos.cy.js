/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl();
    });

    it('Deve selecionar um produto da lista', () => {
      produtosPage.buscarProdutoLista('Arcadio Gym Short');
      cy.get('.product_title').should('contain','Arcadio Gym Short')
    });
    
   it('Deve buscar um produto com sucesso', () => {
      let produto = 'Troy Yoga Short';
      produtosPage.buscarProduto(produto);
      cy.get('.product_title').should('contain',produto)
    });

    it('Deve visitar a página do produto', () => {
      produtosPage.visitarProduto('Erica Evercool Sports Bra');
      cy.get('.product_title').should('contain','Erica Evercool Sports Bra') 
    });

    it('Deve adicionar produto ao carrinho', () => {
      let qtd = 7;
      produtosPage.buscarProduto('Selene Yoga Hoodie');
      produtosPage.addProdutoCarrinho('M','Orange',qtd);
      cy.get('.woocommerce-message').should('contain',`${qtd} × “Selene Yoga Hoodie” foram adicionados no seu carrinho.`);
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
      cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[0].nomeProduto);
        produtosPage.addProdutoCarrinho(
          dados[0].tamanho,
          dados[0].cor,
          dados[0].quantidade);
        cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto);
      })
    });
});