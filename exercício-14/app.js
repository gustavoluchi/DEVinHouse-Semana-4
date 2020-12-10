let cidadesJSON = require('./Cidades.json');
// 24 = sc, conforme Estados.json
let resultado = cidadesJSON.filter((a, b, c) => {
    //console.log(a);
    return a.Estado === '24'});

console.log(resultado)