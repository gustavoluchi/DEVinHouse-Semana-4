//Considerando uma entidade Pessoa que contém os atributos nome, idade, telefone e profissão, crie uma função que receba uma lista de pessoas e descubra se alguma das pessoas da lista é maior de idade (18 anos) retornando o resultado.
const Pessoas = [
	{"id":10,"idade":18,"nome":"William"},
	{"id":20,"idade":1,"nome":"Antônio"}
];

const maiorDeIdade = (arrayDePessoas) => arrayDePessoas.some((a) => a.idade >= 18);

const resultado = maiorDeIdade(Pessoas);
console.log(resultado? `Há pessoas com 18 anos ou mais no array de objetos: ${JSON.stringify(Pessoas)}` : `Não há pessoas com 18 anos ou mais no array de objetos: ${JSON.stringify(Pessoas)}`);