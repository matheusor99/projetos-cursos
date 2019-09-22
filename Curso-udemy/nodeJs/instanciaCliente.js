const moduloA = require('./instanciaUnica');
const moduloB = require('./instanciaUnica');

//ativando a factory usandp () no final do require a factory e a function que retorna um objeto
const moduloC = require('./instanciaNova')();
const moduloD = require('./instanciaNova')();


moduloA.inc()
moduloA.inc()

console.log(moduloA.valor, moduloB.valor);

moduloC.inc()
moduloC.inc()

console.log(moduloC.valor, moduloD.valor);
