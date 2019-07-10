class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        
        this.negociacoes.push(negociacao);
    }

    getNegociacoes() {
        return this.negociacoes;
    }
}