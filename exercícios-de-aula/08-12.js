const funcionario = {
    nome: 'gustavo',
    idade: '26',
    cargo: 'técnico',
    salário: 4000
}
const clonar = function(params) {
    params.nome = 'zé';
    params.idade = 36;
}
clonar(funcionario);
console.log(funcionario);

function calculo(operacao, ...array) {
    if (operacao === 'soma') {
        return array.reduce((a, b) => a += b);
    } else if (operacao === 'multiplicação' || operacao === 'multiplicacao') {
        return array.reduce((a, b) => a *= b);
    } else {
        console.log('escolha soma ou multiplicação');
    }
}
console.log(calculo('soma', 1, [6, 12], 77, 1342, 12));

console.log(calculo('multiplicacao', 1, 6, 77, 1342, 12));