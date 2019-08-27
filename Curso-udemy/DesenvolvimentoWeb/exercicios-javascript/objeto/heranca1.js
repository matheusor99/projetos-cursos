const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

/** com esse __proto__ eu posso ver quem é a classe protipa do meu objeto ou
 *  seja o objeto pai o super*/
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__)