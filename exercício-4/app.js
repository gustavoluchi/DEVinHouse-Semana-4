// Considerando a mesma entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO crie uma função que receba uma lista de pessoas e descubra se todas as pessoas da lista possuem a profissão “Programador” retornando o resultado.
const Pessoas = [
    {"id":10,"idade":18,"nome":"William","profissao":"programador"},
	{"id":20,"idade":1,"nome":"Antônio","profissao":"programadora"}
];

const todasProgramadoras = (arrayDePessoas) => arrayDePessoas.every((a) => a.profissao === 'programador' || a.profissao === 'programadora');

const resultado = todasProgramadoras(Pessoas);
console.log(resultado? `Todas as pessoas são programadoras no array de objetos: ${JSON.stringify(Pessoas)}` : `Nem todas as pessoas são programadoras no array de objetos: ${JSON.stringify(Pessoas)}`);