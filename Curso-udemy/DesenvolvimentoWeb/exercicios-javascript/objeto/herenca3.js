const pai = {
    nome: 'Matheus',
    corCabelo: 'preto'
}

/**criei um objeto com o objeto pai ja como prototipo */
const filha = Object.create(pai);
filha.nome = 'Julia';
console.log(filha.nome);

/**agora criei outro objeto filha só que agora alem de passar pai como prototipo
 * inseri outros atributos no meu objeto como o nome 
 */
const filha2 = Object.create(pai, {
    nome: {value: 'Milena', writable: false, enumerable: true}
});

for( let key in filha2 ) {
    /** vou verificar se a chave da propriedade é dela ou do prototipo se 
     * for dela so exibe a chave se não for exibe a chave dixendo que pertence
     * ao prototipo
     */
    filha2.hasOwnProperty(key) ? 
    console.log(key) : console.log(`prototipo: ${key}`);
}

const funcionario = {
    nome: '',
    salario: 0,
}

const gerente = Object.create(funcionario, {
    cargo: {value: "gerente", writable: true, enumerable: true},
    nome: {value:'Matheus', writable: false, enumerable:true}
});

gerente.salario = 10000;

for(let key in gerente) {
    console.log(Object.hasOwnProperty(key) ? key : `chave do prototipo ${key}`)
}