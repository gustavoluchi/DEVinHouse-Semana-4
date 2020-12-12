// Crie uma função que apresente o ranking dos livros mais vendidos. Você precisa diferenciar a posição apenas dos 3 primeiros do ranking, os demais serão apenas listados.

function maisVendidos(t1, t2, t3, ...resto) {
    console.log(`o primeiro colocado é ${t1}, o segundo é ${t2}, o terceiro é ${t3}, os outros são`, resto);
}

maisVendidos('Um amor incômodo, de Elena Ferrante',
'Os testamentos, de Margaret Atwood',
'Madame Bovary, de Gustave Flaubert',
'101 dias em Bagdá, de Asne Seierstad',
'Grande sertão: veredas, de Guimarães Rosa',
'Não conte a ninguém, de Harlan Coben');