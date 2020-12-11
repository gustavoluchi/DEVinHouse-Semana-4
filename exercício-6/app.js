// Novamente considerando a entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO crie uma função que receba uma lista de pessoas e retorne uma nova lista contendo apenas as pessoas com idade menor que 18 anos.
const Pessoas = [
    {"id":10,"idade":18,"nome":"William","profissao":"programador"},
	{"id":20,"idade":1,"nome":"Antônio","profissao":"programadora"}
];

const nomeDasPessoasMenoresDeDezoito = (arrayDePessoas) => 
    arrayDePessoas.filter((a, b, c) => { 
        if (a.idade < 18) {
            return a
        }
});

const resultado = nomeDasPessoasMenoresDeDezoito(Pessoas);
console.log(resultado);
// console.log(typeof resultado);
