

function imprimirNome(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!!!!!!!!!')
    } catch(error) {
        throw new Error(error.message);
    } finally {
        console.log('final');
    }
}

const obj = {name: 'MATHEUS'}

imprimirNome(obj);