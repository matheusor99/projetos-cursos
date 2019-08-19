function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidade = 0;
     
    // metodo publico
    this.acelerar = function () {
        if( velocidade + delta <= velocidadeMaxima) {
            velocidade += delta;
        } else {
            velocidade = velocidadeMaxima;
        }
    }   

    this.getVelocidadeAtual = function() {
        return velocidade;
    }
}


const uno = new Carro;
uno.acelerar();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual())