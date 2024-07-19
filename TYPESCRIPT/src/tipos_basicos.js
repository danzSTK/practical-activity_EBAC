"use strict";
// type boleanos
let estaChovendo = false;
// types numbers
let idade = 19;
// types strings
const nacionalidade = 'brasileiro';
//types arrays. Aqui tem um ponto importante, já que não podemos misturar as coisas, tipo: boleanos, numbers e strings. Temos que dizer antecipadamente ao typescript qual será o tipo da nossa array e existem duas formas para isso
const colegas = ['lucas', 'fernada'];
//essa é a segunda forma
const tecnologias = ['html', 'css', 'js'];
// essa é uma array somente de leitura
//um array somente de leitura nós nao podemos adcionar nada nessa array,  somente trabalhar da forma já existente
const notas = [1, 2, 3, 4];
// as tupulas sao "tipo" uma array na qual podemos passar varios tipos de dados, porém, tem que ser na sequência na qual você configurar
const lista = ['daniel', true, 27];
// existe uma forma de tornar uma variavel com mais de um tipo
let idadeDaAna = 25;
// existe um tipo que aceita todos os tipos de dados que é o any, todavia ela deve ser evitada
let dadosDaApi;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [];
dadosDaApi = 'string';
let curso = 'frontend';
