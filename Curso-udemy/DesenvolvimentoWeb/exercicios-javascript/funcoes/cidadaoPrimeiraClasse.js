// formas de criar função

// forma literal
function func1() {}

// armazenada em uma variavel
const func2 = function() { }

// armazenar em um array
const array = [function (a,b) { return a+b }, func1, func2];
console.log(array[0](10,5));

//dentro de um objeto
const obj = {}
obj.falar = function () { return 'opa'}
console.log(obj.falar())

//uma funcao retorna/contem uma funcao

function somar(a,b) {
    return function(c) {
        console.log(a+b+c);
    }
}

somar(2,3)(4); // esse segundo parentes é o parametro c da função dentro de somar