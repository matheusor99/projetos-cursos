var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#dados-paciente");

    var paciente = formularioPaciente(form);

    var pacienteTr = montarTr(paciente);
    
    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }

    var tbody = document.querySelector("#tabela-pacientes");

    tbody.appendChild(pacienteTr);

    form.reset();

})

function formularioPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
}

function montarTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montarTd(paciente.nome, "info"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montarTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente (paciente) {
    var erros = [];
    
    if (!validaPeso(paciente.peso)) {
        erros.push("O Peso é inválido!");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("A altura é invalida!");
    }
    if (paciente.nome.length <= 0){
        erros.push("O nome não pode estar vazio!");
    }
    if (paciente.gordura == 0){
        erros.push("Valor de gordura inválido!")
    }

    return erros;
}


function exibeMensagemDeErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });    

}