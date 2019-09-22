//estou requerindo o fileSystem do node para ler arquivos é um modulo interno ja do node
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//leitura sincrona...

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);


// leitura asincrona mais interessante
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`)
});

// leitura de diretorio
fs.readdir(__dirname, (err, arquivos) =>{
    console('Conteudo da pasta...')
    console.log(arquivos);
})