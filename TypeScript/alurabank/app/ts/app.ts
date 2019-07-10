const negociacao = new NegociacaoController();

function adiciona(event: Event) {
    event.preventDefault();

    negociacao.adiciona();
    limparInput();
}

function limparInput() {
    let data:any = document.querySelector("#data");
    let quantidade: any = document.querySelector("#quantidade");
    let valor: any = document.querySelector("#valor");

    quantidade.value = 0;
    valor.value = 0,0;
    data.value =  ""; 
    data.focus();
}