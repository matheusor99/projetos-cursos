const soma = function(a,b) {
    return a + b;
}

const imprimir = function(a,b, operacao = soma) {
    console.log(operacao(a, b));
}

console.log(imprimir(3,4, (x,y) => x*y)); 