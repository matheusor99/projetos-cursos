const peso1 = 2;
const peso2 = Number('2.8'); //pasando uma string dentro dos parentes de number converte o texto para numero

console.log(Number.isInteger(peso2)); // aqui esta perguntando se peso2 é um numero inteiro ou real no cao é false
console.log(Number.isInteger(peso1)); // aqui é true

console.log(peso2, typeof peso2);

const avaliacao1 = 9.182;
const avaliacao2 = 6.827;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(total);
console.log(media); // esta conta ira dar o numero 7.80825 que tem muitos numeros depois do ponto
console.log(media.toFixed(2)); //com o toFixed eu dewtermino quantos numeros seram expostos depois do ponto nesse caso 2
