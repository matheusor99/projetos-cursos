export class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

export class CicloFinanceiro {
    constructor( mes, ano ) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = []
    }

    /**com os ... eu estou dizendo que pode receber 1 ou mais parametros isso eu posso usar quando não sei
     * quantos parametros o usuario vai colocar e crio um array com os parametros chamado lancamentos
     */
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => {
            this.lancamentos.push(l)
        });
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        });
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000);
const contaLuz = new Lancamento('Luz', -220);

const contas = new CicloFinanceiro(9, 2019)
contas.addLancamentos(salario,contaLuz);
console.log(contas.sumario())