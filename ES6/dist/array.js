"use strict";

var redesSociais = ['facebook', 'intagram', 'twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (item, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(item));
});
var alunos = ['gustavo', 'daniel', 'paula', 'miguel'];
var alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: 'frontend'
  };
  return itemAtual;
});
console.log(alunos2);
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  return numeroAtual *= 2;
});
console.log(dobroDosNumeros);
var paula = alunos2.find(function (item) {
  return item.nome == 'paula'; // true or false
});
var indeceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'paula';
});
console.log(paula);
console.log(indeceDaPaula);
alunos2.push({
  nome: 'lucio',
  curso: 'backend'
});
var todosAlunosFrontEnd = alunos2.every(function (item) {
  return item.curso === 'frontend';
});
var alunoBackEnd = alunos2.some(function (item) {
  return item.curso === 'backend' && item.curso === 'frontend';
});
var alunosDeBackend = alunos2.filter(function (item) {
  return item.curso === 'backend';
});
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtua) {
  acumulador += itemAtua;
  return acumulador;
}, 0);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);
console.log(alunoBackEnd);
console.log(todosAlunosFrontEnd);