let meuMap = new Map();
//adiciona uma propriedade
meuMap.set('nome', 'gian');
meuMap.set('stack', 'html, css, js');

console.log(meuMap)

//seleciona uma propriedade
const nome = meuMap.get('nome')

console.log(nome)

// indentifica a quantidade de própriedades
console.log(meuMap.size)

//indetifica se há ou nao tal propriedade e retorna valores boleanos
console.log(meuMap.has('nome'))

//limpa tudo que há no map atual
//meuMap.clear();

//verificando se funcionou
console.log(meuMap.size)


// interando sobre as chaves
for(let chave of meuMap.keys()){
    console.log(chave)
}
// interando sobre os valores
for(let valor of meuMap.values()){
    console.log(valor)
}

// retorna uma array de valores
for(let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`)
}

// deleta um valor/ propriedade
meuMap.delete('stack')

const cpfs = new Set();

cpfs.add('123456789')
cpfs.add('987654321')
cpfs.add('2005')

// conseguimos interar sobre os valores do Set com o forEach 

cpfs.forEach((valor) => {
    console.log(valor)
})

// criei uma array com itens duplicados e abaixo irei tira todos os itens duplicados
const array = ['carlos', 'daniel', 'farias', 'felix', 'carlos', 'felix']

// removi todos os itens duplicado somente criando o Set, pelo fato do mesmo não aceitar valores duplicados
const arrayComoSet =  new Set([...array])

// aqui eu joguei todo o set para formato array literal
const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemItensDuplicados)