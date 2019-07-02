class CadastroController {
    constructor() {
        this._nome = document.querySelector("#nome");
        this._idade = document.querySelector("#idade");
        this._data = document.querySelector("#dataNasc");
        this._cadastro = new Cadastro();
    }

    cadastrar() {
        this._cadastro.adicionarDado(this._nome.value, this._idade.value, this._data.value);
        this.limparCampo();
    }

    limparCampo(){
        this._nome.value = "";
        this._idade.value = 0;
        this._data.value = "";
        this._nome.focus();
    }
}