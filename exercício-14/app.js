//Considerando a entidade Cidade do exercício 13: https://trello.com/c/4YnGrbg1 crie uma função que recebe uma lista de cidades e retorna uma lista com os nomes das cidades concatenados com o seu estado.
const cidadesJSON = require('../exercício-13/Cidades.json');
const estado = require('../exercício-12/Estados.json');

const qualEstado = (idEstado) => {
    return estado.find(procurado => procurado.ID === idEstado).Nome
}

cidadesJSON.forEach((umaCidade) => {console.log(`${umaCidade.Nome}, ${qualEstado(umaCidade.Estado)}`)})