function Pessoa() {
    this.idade = 0;
    const self = this;

    setInterval(() => {
        self.idade++;
        console.log(self.idade);
    }, 1000);
}
//setInterval ele vai ser executado constantemente conforme o tempo passado
new Pessoa