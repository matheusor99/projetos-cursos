const pessoa = {
    nome: 'Matheus',
    idade: 20,
    peso: 95.2
}

/*o Object.keys ira me trazer as chaves do objetos ja que eles são um conjunto 
chave valor*/
console.log(Object.keys(pessoa));
// o .values peaga os valores do objeto
console.log(Object.values(pessoa))
/*o .entries ele me trara arrays de cada chave valor comom por exemplo o nome
ele me trara um array [nome: value], [idade: value]*/
console.log(Object.entries(pessoa))

// criar uma nova propriedade para o objeto
Object.defineProperty(/*objeto ->*/ pessoa, /*nome da propriedade dentro de '' -> */ 'dataNasc', {
    // essa propriedade sera visivel
    enumerable: true,
    // não podera ser alterada
    writable: false,
    // e o valor
    value: '28/06/1999'
})


console.log(pessoa.dataNasc);
console.log(Object.keys(pessoa))