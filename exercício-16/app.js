//Considerando a entidade Cidade do exercício 13: https://trello.com/c/4YnGrbg1 crie uma função que receba um objeto cidade e atribua nome e o estado a duas variáveis e imprima elas no console.
const cidades = require('../exercício-15/Cidades.json');
let nCidade1, nCidade2;

const novaCidade = function (cidade) {
    nCidade1 = {...cidade[0], Nome: 'Nova Cidade 1', Estado: "RS"};
    nCidade2 = {...cidade[5000], Nome: 'Nova Cidade 2', Estado: "rsrsrs"};
}
novaCidade(cidades);
console.log(nCidade1, nCidade2);