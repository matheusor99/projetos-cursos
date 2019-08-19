function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

const prod1 = criarProduto('leite', 3.50);
console.log(prod1);