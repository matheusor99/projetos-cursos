import React, { Component } from 'react'

export default class Saudacao extends Component {

    //o atributo state seus valores podem ser alterados diferente do props
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props)
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        this.setState({tipo: e.target.value}) 
    }

    setNome(e) {
        this.setState({nome: e.target.value})
    }

    render() {
        const { tipo, nome } = this.state

        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr/>
                <input type="text" name="Tipo..." value={tipo}
                onChange={this.setTipo}/>
                <input type="text" name="Nome..." value={nome}
                onChange={e => {this.setNome(e)}}/>
            </div>
        )
    }
}