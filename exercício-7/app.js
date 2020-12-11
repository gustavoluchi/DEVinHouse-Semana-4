// Novamente considerando a entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO crie uma função que receba uma lista de pessoas e retorne a primeira pessoa com idade maior que 18 anos.
const Pessoas = [
    {"id":10,"idade":17,"nome":"William","profissao":"programador"},
	{"id":20,"idade":18,"nome":"Antônio","profissao":"programadora"}
];

const primPessoaMaiorDeDezoito = (arrayDePessoas) => 
    arrayDePessoas.find((a) => a.idade >= 18);

const resultado = primPessoaMaiorDeDezoito(Pessoas);
console.log(resultado);
// console.log(typeof resultado);