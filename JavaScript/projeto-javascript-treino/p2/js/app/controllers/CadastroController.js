class CadastroController {
    constructor() {
        this._nome = document.querySelector("#nome");
        this._idade = document.querySelector("#idade");
        this._data = document.querySelector("#dataNasc");
        this._tbody = document.querySelector('#cadastros');
        this._cadastro = new Cadastro();
        this._cadastroView = new CadastroView('#cadastros');
        this._listaCadastros = new ListaCadastro();
    }

    cadastro(){
        return this._cadastro;
    }

    cadastroView() {
        return this._cadastroView;
    }

    ListaCadastro() {
        return this._listaCadastros;
    }

    cadastrar() {
        let cadastro = this.cadastro();
        let cadastroView = this.cadastroView();
        let listaCadastro = this.ListaCadastro();
        cadastro.adicionarDado(this.valorNome(), this.valorIdade(), this.valorDataNascimento());
        listaCadastro.adicionar(cadastro);
        cadastroView.update(listaCadastro.lista());
        this.limparCampo();
    }

    limparCampo(){
        this._nome.value = "";
        this._idade.value = 0;
        this._data.value = "";
        this._nome.focus();
    }
}