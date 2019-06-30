var campoInput = document.querySelector("#filtrar");

// evento do tipo input é para cada digitada naquele componente
campoInput.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        pacientes.forEach((paciente) => {
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            //usei a expressao RegExp e o "i" e para dizer que não importa se é letra minuscula ou maiuscula
            var expressao = new RegExp(this.value, "i");

            // o metodo text da expressão regex serve para fazer um text se oque esta sendo digitado na expressao regex e igual a algum elemento do nome
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        })
    } else {
        pacientes.forEach((paciente) => {
            paciente.classList.remove("invisivel");
        })
    }
})