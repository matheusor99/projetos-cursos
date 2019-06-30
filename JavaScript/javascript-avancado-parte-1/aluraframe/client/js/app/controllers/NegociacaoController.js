class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade").value;
        this._inputValor = $("#valor").value ;
        this._listaNegociacoes = new ListaNegociacao();
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        console.log(this._listaNegociacoes.negociacoes);
        this._limpaCampo();

    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade,
            this._inputValor);
    }

    _limpaCampo() {
        this._inputData.value = "";
        this._inputQuantidade.value = "1";
        // this._inputValor.value = 0.0;        

        this._inputData.focus();
    }
}