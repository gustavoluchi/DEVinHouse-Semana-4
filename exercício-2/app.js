//Crie uma função que receba um uma lista de números e imprima o quadrado de cada número.
const arrayAoQuadrado = (...array) => array.map((a) => a**2);

const resultado = arrayAoQuadrado(2, 3, 6, 7);
console.log('Resultado: ', resultado);