class NegociacaoView extends Views.View<Negociacoes> {

    template(model: Negociacoes): string {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.getNegociacoes().map((negociacao) => {
                    return ` 
                        <tr>
                            <td>${negociacao.getData().getDate()}/${negociacao.getData().getMonth() +1}/${negociacao.getData().getFullYear()}</td>
                            <td>${negociacao.getQuantidade()}</td>
                            <td>${negociacao.getValor()}</td>
                            <td>${negociacao.getVolume()}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
            
            <tfoot>
            </tfoot>
        </table>
        `
    }
}