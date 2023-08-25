"use strict";
class Produtos {
    constructor(codigo, nome, preco, quantidade) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}
class Estoque {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        console.log(produto);
    }
}
const estoque = new Estoque();
const produto1 = new Produtos(1, "Camiseta", 25, 10);
estoque.adicionarProduto(produto1);
