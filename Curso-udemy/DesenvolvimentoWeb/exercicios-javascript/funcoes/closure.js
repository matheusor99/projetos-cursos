// Closure é o escopo criado quando uma função é declarada  
// clousure é o escopo de uma funcao

const x = 'Global';

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao())