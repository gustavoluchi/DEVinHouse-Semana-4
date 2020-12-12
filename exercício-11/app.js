// Crie uma arrowFunction que receba um objeto contendo altura e largura de um retângulo e retorne a área do retângulo.

const retangulo = {
    altura: 50,
    largura: 30
}

const areaDoRetangulo = (objeto) => {
    const {altura, largura} = objeto;
    return `A área do retângulo é ${altura * largura}`
}
console.log(areaDoRetangulo(retangulo))