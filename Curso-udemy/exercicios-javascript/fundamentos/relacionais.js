console.log('01)', '1' == 1);// os dois são iguais independente do tipo aqui a comparação é de valor
console.log('02)', '1' === 1 );// aqui a comparação é de valor e tipo ou seja não é igual
console.log('03)', '3' != 3); // aqui esta comparando se os valores são diferentes mas os dois são 3
console.log('04)', '3' !== 3);// aqui esta vendo se o valor e o tipo são diferentes oque é verdadeiro

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);

console.log('09)', d1 === d2);
console.log('10)', d1 == d2);
console.log('11)', d1.getTime() === d2.getTime());