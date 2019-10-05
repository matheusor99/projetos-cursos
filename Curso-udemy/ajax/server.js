const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('.'))
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(8080, () => console.log('Executando...'))