var botao = document.querySelector("#adicionar");

botao.addEventListener("click", function() {
    var requisicao = new XMLHttpRequest();

    requisicao.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    requisicao.addEventListener("load", function() {
        var textoRequisitado = requisicao.responseText;     
        var pacientes = JSON.parse(textoRequisitado);

        var tabela = document.querySelector("#tabela-pacientes");

        pacientes.forEach(paciente => {
            tabela.appendChild(criarTr(paciente));
        });

        
    });
    requisicao.send();
});

function criarTr(paciente) {
    var pacienteTr = document.createElement("tr");
    var nomeTd = criarTd(paciente.nome);
    var pesoTd = criarTd(paciente.peso);
    var alturaTd = criarTd(paciente.altura);
    var gorduraTd = criarTd(paciente.gordura);
    var imcTd = criarTd(paciente.imc);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}

function criarTd(dado) {
    var Td = document.createElement("td");
    Td.textContent = dado;
    return Td;
}