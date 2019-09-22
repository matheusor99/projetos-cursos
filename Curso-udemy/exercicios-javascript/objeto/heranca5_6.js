function Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula('Bem Vindo', 123);
const aula2 = new Aula('Até Breve', 456);
console.log(aula1, aula2);

// simulando o new
/** nesta função eu coloquei como parametro o f que representa uma nova fução
 * e os parametros para essa nova função como eu coloque os ... antes de params
 * todos os parametros passados seram transformados em um array de parametros
 * para serem passados para a função
*/
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype;
    f.apply(obj, params)
    return obj;
}

const aula3 = novo(Aula, 'Bem Vindo', 123);
const aula4 = novo(Aula, 'Até Breve', 456);

console.log(aula3, aula4)