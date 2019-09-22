const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c} }

/**com o strinfify os objetos se tornam em json */
console.log(JSON.stringify(obj));
/**e com o .parse ele converte o json para objeto de volta*/
console.log(JSON.parse(JSON.stringify(obj)));
