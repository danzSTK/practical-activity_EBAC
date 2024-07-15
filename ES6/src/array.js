const redesSociais = ['facebook', 'intagram', 'twitter'];

for(let i = 0; i < redesSociais.length; i++){
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(item, indice){
    console.log(`#${indice} Eu tenho perfil na rede social: ${item}`)
})

const alunos = ['gustavo', 'daniel', 'paula', 'miguel']

const alunos2 = alunos.map(function(itemAtual){
    itemAtual = {
        nome:itemAtual,
        curso: 'frontend'
    }
    return itemAtual
})


console.log(alunos2)

const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map(function(numeroAtual){
    return numeroAtual *= 2 
})

console.log(dobroDosNumeros)

const paula = alunos2.find(function(item){
    return item.nome == 'paula' // true or false
})

const indeceDaPaula = alunos2.findIndex(function(item){
    return item.nome == 'paula'
})

console.log(paula)
console.log(indeceDaPaula)

alunos2.push({
    nome: 'lucio',
    curso: 'backend'
})

const todosAlunosFrontEnd = alunos2.every(function(item){
    return item.curso === 'frontend'
})

const alunoBackEnd = alunos2.some(function(item){
    return item.curso === 'backend' && item.curso === 'frontend'
})

const alunosDeBackend = alunos2.filter(function(item){
    return item.curso === 'backend'
})

const nums = [ 10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtua){
    acumulador += itemAtua
    return acumulador
}, 0)


let somaComFor = 0;

for(let i = 0; i < nums.length; i++){
    somaComFor += nums[i];
}

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `
    return acumulador
}, '')

console.log(nomesDosAlunos)
console.log(alunoBackEnd)
console.log(todosAlunosFrontEnd)


