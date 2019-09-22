const [a] = [10]

const [n1, , n3, , n5, n6 = 0] = [1, 2, 3, 4]; // com isso estou pegando o elemento da posição
//0, 2 a variavel n5 estaria pegando o elemento na posição 4, mas não existe o elemento na posição 4 então ele vai ser
//udefined enquanto eu estou dizendo que a variavel n6 vai ser = 0 ou seja eu tambem estou dizendo que este array vai ter o elemento
//6 que tera o valor 0


console.log(n1,n3,n5,n6);

const [, [, nota]] = [[5, 7, 2], [8, 6, 9]];

console.log(nota)
