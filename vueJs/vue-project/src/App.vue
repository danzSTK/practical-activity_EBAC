<script setup>
import { reactive } from 'vue';

const nome = 'daniel';

function dizOla(nome){
  return `${nome} diz oi`;
}

const enderecoDaImagem = "https://gerarmemes.s3.us-east-2.amazonaws.com/memes/thumb/29a2cc16.jpg"

const buttonEstaDesabilitado = true;
const exibir = false;

const estado = reactive({
  contador: 1,
  email: '',
  nomes: ['carlos', 'daniel', 'farias', 'felix'],
  nomeAInserir: '',
})
let podeDecrimentar = true
let naoPodeIncrimentar = false

function incrimetar(){
  if(estado.contador >= 10){
    naoPodeIncrimentar = true 
    return
  } 
  estado.contador++
}
function decrimentar(){
  if(estado.contador <= 0){
    podeDecrimentar = false
    return
  }
  podeDecrimentar = true
  estado.contador--
}


function cadastrarNome(){
  estado.nomes.push(estado.nomeAInserir)
  console.log(estado)
}

</script>

<template>
  <h1>{{ nome }}</h1>
  <div v-if="exibir">
    <div>
      <img :src="enderecoDaImagem" alt="">
    </div>
    <div>
      <img :src="enderecoDaImagem" alt="">
    </div>
  </div>
  <button type="submit" :disabled="buttonEstaDesabilitado">Enviar Mensagem</button>
  <br>
  <hr>
  {{ estado.contador }}
  <button :disabled="naoPodeIncrimentar" type="button" @click="incrimetar">+</button>
  <button :disabled="!podeDecrimentar" type="button" @click="decrimentar">-</button>

  <ul>
    <li class="teste" v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>

  <input type="text" @keyup="evento => estado.nomeAInserir = evento.target.value">
  <button @click="cadastrarNome()" type="button">Enviar</button>

</template>

<style scoped>

</style>

<!--perceba que o V-if ele deixa o script decidir se os elemento devem ser renderizados ou não. Com v-show ele renderiza o objeto, porém, ele não exibe relizando somente a troca do display -->

<!--v-bind:  para adionar um valor a um atributo da tag e nao precisa por os dois colchetes

@click
@change
@keyup
-->