let cidadesJSON = require('./Cidades.json');
// 23 = RS, conforme Estados.json
let resultado = cidadesJSON.filter((a, b, c) => {
    //console.log(a);
    return a.Estado === '23'});

console.log(resultado)