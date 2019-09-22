
const pessoa = {
    nome: 'matheus',
    idade: 20,
    endereco: {
        logradouro: 'rua corinthios',
        numero: 1
    }
}

const { nome, idade } = pessoa; // desta forma eu estou extraindo a chave valor nome e idade dos
//atributos de pessoa e criando variaveis com o mesmo nome desta forma posso usar o valor destas 
//chaves quando quiser se fosse pra estrair de um array era só usar [] ao inves de {}

console.log(nome, idade);

const {nome: n, idade: i} = pessoa;// fazendo desta forma eu repito a ação do codigo acima porem
// agora eu dei outro nome de variavel para os atributos que eu extrai do objeto pessoa

console.log(n, i);