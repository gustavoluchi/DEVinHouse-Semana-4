//Considerando uma entidade Cidade, contendo os seguintes atributos nome e estado, crie uma função que receba uma lista de cidades e retorne a lista de cidades em que o estado seja “SC”.
let cidadesJSON = require('./Cidades.json');
// 24 = sc, conforme Estados.json

let resultado = cidadesJSON.filter((itemAtual) => {
    //console.log(itemAtual);
    return itemAtual.Estado === '24'});

console.log(resultado)