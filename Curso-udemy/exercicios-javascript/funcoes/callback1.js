// calback é a funcao que é ativada quando um determinado evento acontece 
const fabricantes = ['mercedesw', "audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
console.log('------------------------------------------------------------------------------')
fabricantes.forEach(fabricante => console.log(fabricante));