let cidadesJSON = require('./Cidades.json');
// 23 = RS, conforme Estados.json
let resultado = cidadesJSON.filter((itemAtual) => {
    return itemAtual.Estado === '23'});

console.log(resultado);