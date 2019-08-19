function somar() {
    let soma = 0;
    // o arguments é um array feito com os argumentos passados como parametros da funcao
    // por mais que ela não tenha expecificada que recebe parametros
    for(i in arguments) {
        soma += arguments[i];
    }
    return soma;
}


console.log(3,5,6);
console.log('teste ', 'concatenacao');
console.log(1, ' concatenou');