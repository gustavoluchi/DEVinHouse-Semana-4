// Novamente considerando a entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO crie uma função que receba uma lista de pessoas e retorne uma lista com os nomes das pessoas.
const Pessoas = [
    {"id":10,"idade":18,"nome":"William","profissao":"programador"},
	{"id":20,"idade":1,"nome":"Antônio","profissao":"programadora"}
];

const nomeDasPessoas = (arrayDePessoas) => arrayDePessoas.map((a, b) => a.nome);

const resultado = nomeDasPessoas(Pessoas);
console.log(resultado);
// console.log(typeof resultado);