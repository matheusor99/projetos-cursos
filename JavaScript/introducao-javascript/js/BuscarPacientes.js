var botao = document.querySelector("#buscar-pacientes")

botao.addEventListener("click", function() {
   
    // criando um objeto para fazer requisição http
   var xhr = new XMLHttpRequest();

    // abrindo uma requisição do tipo GET para este endereço
   xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    // criando um evento de quando carregar os dados da requisição acima ele inprima no console o texto da resposta 
   xhr.addEventListener("load", function() {
        // console.log(xhr.responseText);

        // atribui a resposta para a variavel resposta e este TYPEOF ira retornar o tipo da resposta 
        // e imprime no console que no caso será uma string
        var resposta = xhr.responseText;
        console.log(typeof resposta);

        //criando um tradutor de Json aonde eu passo um texto do tipo Json e ele me devolve um objeto javascript para interpretar
        var pacientes = JSON.parse(resposta);
        console.log(pacientes);
        console.log(criarPacienteTr(pacientes[1]))
         
        //adicionando cada paciente que a api me retornou para a tabela
        var tabela = document.querySelector("#tabela-pacientes");

        pacientes.forEach((paciente) => {
            tabela.appendChild(criarPacienteTr(paciente));
        });
   });

   // envia a requisição
   xhr.send();
});