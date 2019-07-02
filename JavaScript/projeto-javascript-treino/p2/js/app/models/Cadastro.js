class Cadastro {
    constructor() {
        this._nome;
        this._idade;
        this._dataNasc;
    }

    get nome() {
        return this._nome;
    }

    get idade() {
        return this._idade;
    }

    get dataNasc() {
        return this._dataNasc;
    }

    adicionarDado(nome, idade, dataNasc) {
        this._nome = nome;
        this._idade = idade;
        this._dataNasc = dataNasc;
    }
}