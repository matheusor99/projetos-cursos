const negociacao = new NegociacaoController();
function adiciona(event) {
    event.preventDefault();
    negociacao.adiciona();
    limparInput();
}
function limparInput() {
    let data = document.querySelector("#data");
    let quantidade = document.querySelector("#quantidade");
    let valor = document.querySelector("#valor");
    quantidade.value = 0;
    valor.value = 0, 0;
    data.value = "";
    data.focus();
}
