// como criar um objeto de forma literal
const pessoa = {
    nome: 'matheus', // desta forma eu insiro um atributo do objeto
}

pessoa.sexo = 'masculino'; //meu objeto não tem o atributo sexo mas se eu fixer desta forma eus já
//crio dinamicamento o atributo sexo que recebe masculino

console.log(pessoa);

const pessoa2 = {
    nome: 'marcelo',
    sexo: 'masculino',
    altura: 1.82,
    //é possivel iserir um objeto dentro de outro objeto
    camisa: {
        tipo: 'pollo',
        cor: 'preto',
        tamanho: 'M'
    }
}