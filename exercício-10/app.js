/* Crie uma função que retornará uma promise, ela receberá dois valores numéricos como parâmetro,
 a função deve somar os dois valores e somente resolver a promise caso o resultado seja par 
 retornando o valor da soma e rejeitando a promise caso ímpar, retornando uma mensagem explicativa */

const funcaoPromiseSomar = async (valor1, valor2) => {
    let soma = valor1 + valor2;
    return new Promise((myResolve, myReject) => {
        if (soma % 2 === 0) {
            setTimeout(() => myResolve(soma), 5000);
        } else {
            myReject(`reject, pois ${soma} não é par`);
        }
    });
}

const vai = funcaoPromiseSomar(10, 20)
    .then(result => console.log(`vai: o resultado é: ${result}`))
    .catch(error => console.log(`vai: deu erro: ${error}`));

const vamo = async () => {
    try {
        return await funcaoPromiseSomar(30, 20);
    } catch (e) {
        console.log('catch do vamo acionado. O erro:', e);
    }
}

const loucura = (async function vamoQueVamo() { console.log(await vamo()); })();
console.log(typeof loucura);

function segundoTeste() {
    try {
        return funcaoPromiseSomar(61, 20);
    } catch (e) {
        console.log('catch do segundoTeste acionado. O erro:', e);
    }
}
segundoTeste().then(promiseResolvida => console.log(promiseResolvida)).catch(promiseRejeitada => console.log(promiseRejeitada));

console.log('esse console.log é a última linha do código, mas vem antes! ');