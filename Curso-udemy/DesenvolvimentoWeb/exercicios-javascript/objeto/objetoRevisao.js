const condutores = [{
    preco: 209,
    imposto: 1
}];

const carro = {
    marca: 'fiat',
    modelo: 'uno',
    cor: 'vermelho',
    condutores
};

carro.condutores;

console.log(carro.condutores.length);

delete carro.condutores;
console.log(carro);

class Pessoa {

    constructor() {
        this.nome = 'Matheus';
        this.sobrenome = 'Oliveira';
        this.dataNasc = new Date('1999-06-28');
    }
}

const pessoa = new Pessoa();
console.log(pessoa.sobrenome);
console.log(`${pessoa.dataNasc.getDate()+1}/${pessoa.dataNasc.getMonth()} /${pessoa.dataNasc.getFullYear()}`);