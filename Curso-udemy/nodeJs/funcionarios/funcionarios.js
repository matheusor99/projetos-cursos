const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios');


axios.get(url).then(response => {

    let funcionariaBarata;

    response.data.forEach(funcionario => {
        if (funcionario.pais == 'China' && funcionario.genero == 'F') {
            
            if (funcionariaBarata == null || funcionariaBarata == undefined) {
                funcionariaBarata = funcionario;
            }
            if(funcionario.salario < funcionariaBarata.salario){
                funcionariaBarata = funcionario;
            }           
        }
    });

    console.log(funcionariaBarata);
})