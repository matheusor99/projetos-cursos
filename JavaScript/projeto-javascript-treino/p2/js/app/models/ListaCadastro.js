class ListaCadastro {
    constructor() {
        this._lista = [];
    }

    lista() {
        return this._lista;
    }

    adicionar(cadastro) {
        console.log(this.lista());
        this.lista().push(cadastro);
        console.log(this.lista());
    }
}