 function getPreco(imposto = 0, moeda = 'R$') {
       return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    // se eu colocar um atributo com o mesmo nome de uma função ele automaticamente assume o valor daquela funcao
    getPreco
}

global.preco = 10;
global.desc = 0.10;
console.log(getPreco());
console.log(produto.getPreco())

// com o metodo call eu passo para a funcao getPreco como aprametro algo que possua
// os parametros que a funcao estava pedindo como desc e preco e deposi eu passo os paramentros
// definidos la na propria função
console.log(getPreco.call(produto, 10, 'R$'));
// o metodo apply ele é bem parecido com o call a diferença é que os parametros que foram
// definidos na funcao para serem passados devem ser pasados em forma de array
console.log(getPreco.apply(produto, [10, 'R$']));

