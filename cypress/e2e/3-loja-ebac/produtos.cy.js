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
    
   it.only('Deve buscar um produto com sucesso', () => {
      let produto = 'Troy Yoga Short';
      produtosPage.buscarProduto(produto);
      cy.get('.product_title').should('contain',produto)
    });

    it('Deve visitar a página do produto', () => {
      
    });

    it('Deve adicionar produto ao carrinho', () => {
      
    });
});