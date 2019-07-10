class CadastroView {
    constructor(elemento){
        this._elemento = document.querySelector(elemento);
    }

    adicionar(dados) {
        return `
            <tr>
                ${dados.map((r) => {
                    return `<td>${r.nome}</td>
                            <td>${r.idade}</td>
                            <td>${r.dataNasc}</td><br>`
                }).join('')}
            </tr>
        `
    }

    update(dados) {
        this._elemento.innerHTML = this.adicionar(dados);
    }
}