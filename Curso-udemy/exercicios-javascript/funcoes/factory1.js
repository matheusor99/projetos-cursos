// uma funcao factory é uma funcao que retorna um objeto

// factory simples
function criarPessoa() {
    return {
        nome: 'matheus',
        sobrenome: 'Oliveira'
    }
}


console.log(criarPessoa());