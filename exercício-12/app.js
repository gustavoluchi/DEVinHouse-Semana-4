// Crie uma função que receba 3 parâmetros (bairro, cidade, estado) e imprima os dados em um formato de endereço, utilizando Template String.
const cidades = require('./cidades-bairros.json');
const estado = require('./Estados.json');

const qualEstado = (idEstado) => {
    return estado.find(procurado => procurado.ID === idEstado).Nome
}

const templateCidades = (bairro, cidade, estado) => `${bairro}, em ${cidade} no 
estado de ${qualEstado(estado)}`;

cidades.forEach((currentValue, index, arr) => {
    let {Nome, Estado, bairro} = currentValue;
    console.log(templateCidades(bairro, Nome, Estado));
});