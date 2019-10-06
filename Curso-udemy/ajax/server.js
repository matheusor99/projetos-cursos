const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('.'))
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        calback(null, './upload')
    },
    fileName: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalName}`)
    }
})

const upload = multer({ storage }).single('./arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro: ' + err)
        }

        res.end('Concluido com sucesso.')
    })
})

app.post('/formulario', (req,res) => {
    
})

app.listen(8080, () => console.log('Executando...'))