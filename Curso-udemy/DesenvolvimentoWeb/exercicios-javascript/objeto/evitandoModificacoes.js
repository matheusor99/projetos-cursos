//Object.preventExtensions
/**com o preventExtensions eu posso  criar um objeto que não pode ter
 * nenhum atributo adicionado a não ser os que eu coloquei nele por padrão
 */
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco:1.99, tag: 'promoção'
})

//aqui veremos que o objeto produto não é extencivel
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha' // posso alterar o valor de atributo existente
produto.descricao = 'Borracha Branca' // não posso add um novo atributo
delete produto.tag // posso deletar atributos já existentes

console.log(produto); //valor esperado: { nome: 'Borracha', preco:1.99 }

// Object.seal
/**o Object.seal ele como o proprio nome diz ele sela o objetp criado com ele
 * eu posso modificar os valores do atributo de um objeto mas não posso add um novo
 * ou deletar um que já existe
*/
const pessoa = { nome: 'Matheus', idade: 20 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Oliveira'; //não posso add um novo atributo
delete pessoa.nome; //não posso deletar um atributo existente
pessoa.idade = 21; //posso alterar os valores de um atributo


console.log(pessoa); // valor esperado: { nome: 'Matheus', idade: 21}