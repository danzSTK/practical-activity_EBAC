const alunos = [{nome: 'daniel', nota: 10}, {nome: 'carlos', nota: 4}, {nome: 'yasmim', nota: 6}, {nome: 'beatriz', nota: 8}, {nome: 'fabiana', nota: 5}]



function SelecionaAlunosMedia(){
    const media = 6
    const alunosAcimaDaMedia = alunos.filter(item => item.nota >= media)
    console.log(alunosAcimaDaMedia)

    for( objeto of alunosAcimaDaMedia){
        const {nome, nota} = objeto
        console.log(`Olá! Meu nome é ${nome} e tirei a nota ${nota}`)
    }
}

SelecionaAlunosMedia()


// Eu não sabia a forma correta que vocês queriam, então retornei tanto o objeto quando uma mensagem personalizada. 