const express = require('express');
const app = express();
const porta = 3003;
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res) => {
    res.send(bancoDeDados.getProdutos()) // send automaticamente converte pa Json
})

app.get('/produtos/:id', (req, res) => {
    res.send(bancoDeDados.getProduto(req.param.id))
})

app.post('/produtos', (req,res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    console.log(bancoDeDados.getProdutos())
    res.send(produto)
})

//passei a porta que o servidor vai executar usando o listen
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})