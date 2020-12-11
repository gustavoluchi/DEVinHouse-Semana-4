// Crie uma função que receba uma lista de valores numéricos, e utilizando a função reduce imprima a multiplicação dos valores da lista.
const listaDeNumeros = [1, 5, 66, 14, 26, 70, 11, 365];

const multiplicaLista = (arrayDeNumeros) => 
    arrayDeNumeros.reduce((a, b) => a * b, 1);

const resultado = multiplicaLista(listaDeNumeros);
console.log(resultado);
// console.log(typeof resultado);