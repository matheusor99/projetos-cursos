const valores = [7.7, 8.9, 6.3, 9.2]; // os elementos de um array sao divididos por virgula

console.log(valores[0], valores[3]); // aqui eu estou pedindo pra imprimir o elemento da posição 0 e 3 do array 

console.log(valores[4]); // como não existe o indice 4 no meu array ele me tra o valor undefined

valores[4] = 10; // aqui eu estou passando para o meu array que o valor do indice 4 vai ser 10 se ja tiver algo naquele indice
//o array so ira sobreescrever o valor do elemento no indice 4 para o valor que estou pasando agora que é o 10 

console.log(valores);

console.log(valores.length); // com o length posso pegar a quantidade de elementos existem em um array

valores.push(15); // com o metodo push consigo colocar o valor passado que neste caso é 15 iserir como ultimo elemento do meu array

valores.push(20,{id: 20}, 'oi', false, null); // com o push posso adicionar mais de um valor no meu array, e vale lembrar que o array aceita 
//varios tipos de valores deja ele numero, objeto ou string

console.log(valores);

valores.pop() // com o pop eu removo o ultimo elemento do meu array

delete valores[0]; //com o delete eu deleto o elemento do array que eu passo

console.log(valores);

console.log(typeof valores); //array é do tipo object