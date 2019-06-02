var pacientes = document.querySelectorAll(".paciente");
var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");   
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if (!pesoEhValido) {
        tdPeso.textContent = "Peso inválido";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaEhValida) {
        tdAltura.textContent = "Altura inválida";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }
    if (pesoEhValido && alturaEhValida) {
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!";
    }
}

function calculaImc (peso, altura) {
    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso (peso) {
    if (peso > 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura (altura) {
    if (altura > 0 && altura < 3) {
        return true;
    } else {
        return false;
    }
}







