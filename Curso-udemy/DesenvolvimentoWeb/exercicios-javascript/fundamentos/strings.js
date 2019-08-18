const escola = "Cod3r";

console.log(escola.charAt(4)); // com charAt é possivel trazer alguma letra na localização pasado
// que neste caso é a letra na posição 4 na string da constante escola ira tazer r, pois ela começa do indice 0

console.log(escola.indexOf('3')); // com indexoff eu pesquiso dentro da string se tem o valor que eu passei e retorna ele

console.log(escola.substring(1)); // apartir do indice que eu passei ele vai trazer a string daquele ponto pra frente
// neste caso a indice 0 que é o 'C' não vira

console.log(escola.substring(0, 3)); // com esses parametros estou dizendo pra trazer a string da indice 0 até
// a indice antes de 3

console.log('Escola '.concat(escola)); // com a função concat eu estou concatenando os valores

console.log(escola.replace(3, 'e')); //com o comando replace eu indico a possição do elemento na string e depois oque eu
//quero repassar em cima daquele elemento na posição selecionada aqui ira imprimir no console "Coder" ao inves de "Cod3r"

console.log('ana,matheus,milena'.split(",")); //com o metodo split eu crio um array com os elementos na string onde 
//eu estou falando para separar a string por vigulas nela e oque foi separado vira um elemento do array

console.log('3' + 2); // neste caso não sera feito o calculo, pois o simbolo de mais serve para concatenar string e numeros