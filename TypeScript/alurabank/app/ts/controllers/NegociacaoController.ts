class NegociacaoController {

    private data: HTMLInputElement;
    private quantidade: HTMLInputElement;
    private valor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacaoView = new NegociacaoView("#negociacaoView");
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        /* estou fazendo um casting usando esses <> e inserindo um valor ou seja eu estou transformando um elemento genreico em algo mais especifico
           que no caso seria a transformação de algo do tipo Element para o tipo HTMLInputElement 
        */
        this.data = <HTMLInputElement> document.querySelector("#data");
        this.quantidade = <HTMLInputElement> document.querySelector("#quantidade");
        this.valor = <HTMLInputElement> document.querySelector("#valor");
        this.negociacaoView.update(this.negociacoes);

    }

    adiciona() {
        const negociacao = new Negociacao(
            new Date(this.data.value.replace(/-/g, ',')),
            parseInt(this.quantidade.value),
            parseFloat(this.valor.value)
        );

        this.negociacoes.adiciona(negociacao);

        this.negociacaoView.update(this.negociacoes);
        this.mensagemView.update('negociacao realizada com sucesso');
    }
}