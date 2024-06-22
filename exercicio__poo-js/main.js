function Aluno(nome, idade){
    this.nome = nome;
    this.idade = idade;

    this.apresentaAluno = () =>{
        console.log('Olá, meu nome é ' + this.nome + ' e tenho ' + this.idade +' anos, sou aluno')
    }
}

function Professor(nome, idade, salario){
    this.salario = salario;

    this.apresentaProfessor = () => {
        console.log('Olá, meu nome é ' + this.nome + ' e tenho ' + this.idade +' anos, sou da Professor e recebo: R$' + this.salario)
    }

    Aluno.call(this, nome, idade)
}


const professor = new Professor('Daniel', 27, 2500)
const aluno = new Aluno('Matheus', 16)


function apresentacao(){
    console.log(professor.apresentaProfessor())
    console.log(aluno.apresentaAluno())
    console.log('Fazemos parte do colégio Acadêmico')
}

apresentacao()
