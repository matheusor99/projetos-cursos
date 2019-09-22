function calculo (numero1, numero2) {
    return new Promise((resolve, reject) => {
        try{
            resolve(numero1 / numero2);
        } catch(e) {
            reject(e)
        }
    })
}

console.log(calculo(2, 2))