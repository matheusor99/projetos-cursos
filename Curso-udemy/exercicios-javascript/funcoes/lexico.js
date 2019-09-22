const valor  = 'global';

function imprimi() {
    console.log(valor);
}

function exec() {
    const valor = 'local';
    imprimi();
}

exec()