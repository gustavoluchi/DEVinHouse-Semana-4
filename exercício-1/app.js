// Crie uma função que receba como parâmetro uma lista de notas e calcule a média dessas notas imprimindo o resultado.
let input = document.getElementById('arrays'); //["book", 3, "pin", 4];//
let btn = document.getElementById('objectify');
let results = document.getElementById('results');

btn.addEventListener("click", function () {
  let myArray = JSON.parse(input.value);
  input.value = "";
  results.textContent = listaDeNotas(myArray);
});

input.addEventListener("keyup", (event) => {
    if (event.key == 'Enter') {
        let myArray = JSON.parse(input.value);
        input.value = "";
        results.textContent = listaDeNotas(myArray);
    }
});

function listaDeNotas(notas) {
    try {
        var homem = notas.reduce((total, currentValue) => total += parseInt(currentValue)) / notas.length; 
        return homem;
    } catch (e) {
        console.log("Errrrou!");
    }
}
let b = [ 2, 4, 5, 7, 10, 5];

listaDeNotas(b);