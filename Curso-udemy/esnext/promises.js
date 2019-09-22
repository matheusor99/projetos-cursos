function FalarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

FalarDepoisDe(2, 'ola')
.then(frase => frase.concat("?"))
.then(outraFrase => { console.log(outraFrase) })