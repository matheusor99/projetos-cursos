// neste script irei mostrar um exemplo de operador ternario

const resultado = nota => nota>=7 ? 'Aprovado' : 'Reprovado';
//aqui com a arrow function eu passo o parametro nota e faço uma condição se ela for true vai retornar
// o valor de aprovado se ela for false ela trara o valor de reprovado

console.log(resultado(8));
console.log(resultado(5.7));
