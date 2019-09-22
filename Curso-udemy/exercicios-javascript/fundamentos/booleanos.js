let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

console.log(!!isAtivo); //quando eu coloco ! que é o sinal de negação em javascript, quando colocado
//2 vezes como nesse caso ele esta colocando o valor de isAtivo como true

console.log(!isAtivo); // com apenas um ! isAtivo sera imprimido no console como false

// o sinal de ! é bem importante nos casos boleanos inclusive em condiçoes de if else

//tbm pode ser usado o numero 1 para dizwer que algo é true e o 0 para dizer que é false


let nome = '';
console.log(nome || 'Desconhecido'); //como  avariavel nome é false, pois '' é falso entao eu coloquei
// || que significa ou entao ele viu se nome era true ja que não era ele imprime o outro resultado que
// é a string 'desconhecido', ja que era um || outro