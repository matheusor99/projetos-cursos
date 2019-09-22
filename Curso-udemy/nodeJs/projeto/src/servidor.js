const express = require('express');
const app = express();
const porta = 3000;

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 }) // send automaticamente converte pa Json
})

//passei a porta que o servidor vai executar usando o listen
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})