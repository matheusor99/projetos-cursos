/** herança em javascript funciona com prototipagem*/

const avo = {atributo1: 'A'};
// agr vou criar um objeto que herda avo como prototipo
const pai = {__proto__: avo, atributo2: 'B'};
/** e agora um objeto filho que herda de pai que herda de avo*/
const filho = {__proto__: pai, atributo3: 'C'};

/** atributo1 é do objeto avo mas como filho herda de pai e pai herda de avo
 * isso é possivel segundo a herança e avo esta herdando de Object.prototype
*/
console.log(filho.atributo1);
console.log(filho.atributo2);
console.log(filho.atributo3);
console.log(pai.atributo1);
console.log(pai.atributo2);
console.log(avo.atributo1);


console.log(filho.atributo2 = 3);
console.log(pai.atributo2);


const carro = {
    velAtual: 0,
    velMax: 200,
    set: this,
    acelerarMais(delta) {
        if( this.velAtual + delta < this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}KM/h de ${this.velMax}KM/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 340,
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

/**com essa comando posso fazer com que carro se torne prototipo de ferrari 
 * criando assim uma herança primeiro passo o objeto e depois o prototipo
*/ Object.setPrototypeOf(ferrari, carro);

// ferrari.acelerarMais(67);
// console.log(ferrari.status());

console.log(ferrari);