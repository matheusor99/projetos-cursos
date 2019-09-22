const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();

const falar = pessoa.saudacao
// falar() // o this entrou em conflito pois agr o this representa a const falar e não a pessoa

const falarDePessoa = pessoa.falar.bind(pessoa);// com o bind eu amarro o this com a const pessoa
//para quando eu for executar a funcao o this representar a const pessoa e não a função em si
falarDePessoa()