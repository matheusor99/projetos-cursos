const nome = 'Rebeca';
const concatenacao = "Olá "+ nome + '!';
const template = `
Olá
${nome}!`

console.log(concatenacao, template);
console.log(`1 + 1 = ${1 + 1}`)

const up = s => s.toUpperCase() //a constante possui uma função com s como parametro
// toUpperCase ele faz com que todos os elementos da string fiquem em letra maiuscula
console.log(`Ei... ${up('cuidado')}!`)