var campoInput = document.querySelector("#filtrar-tabela");

//add evento de input
campoInput.addEventListener("input", function(){
    //array com os trs que possuem a classe paciente
    var pacientes = document.querySelectorAll(".paciente");
    // se o valor do campoInput.length for > 0
    if( this.value.length > 0){
        for (var i = 0 ; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            //nomeTd = os tds com a classe info-nome dentro dos trs que estão no array pacientes
            var nomeTd = paciente.querySelector(".info-nome");
            var nome = nomeTd.textContent;

            //expressao regular que faz o filtro a cada letra que vc digita no input
            var expressao = new RegExp(this.value, "i");
            
            // se oque eu digitar for diferente aquilo que eu to digitando
            if(!expressao.test(nome)){
                //adiciono a classe invisivel 
                paciente.classList.add("invisivel")
            } else{
                // se for igual eu retiro a classe invisivel
                paciente.classList.remove("invisivel");
            }
        };
        // if o valor de campo input for == 0 eu so removo a classe invisivel
    } else {
        for (var i = 0 ; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        };
    }   
})