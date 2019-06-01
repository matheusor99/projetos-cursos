var titulo = document.querySelector("#titulo");
titulo.textContent = 'Aparecida Nutricionista';


var paciente = document.querySelector("#primeiro_paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);

tdImc.textContent = imc;

if (tdPeso.textContent < 0 || tdPeso.textContent > 200 ) {
    console.log('Peso Inválido');
    tdPeso.textContent = 'Peso Inválido';
}
if (tdImc.textContent < 0 || tdImc.textContent > 200 ) {
    console.log('Peso Inválido');
}
if (tdImc.textContent < 0 || tdImc.textContent > 200 ) {
    console.log('Peso Inválido');
}