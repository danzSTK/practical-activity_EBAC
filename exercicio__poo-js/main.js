// Fiz funções simples, mas ok.

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}
function Funcionario(nome, idade, cargo, salario){
    this.cargo = cargo;
    this.salario = salario; 

    Pessoa.call(this, nome, idade);
}
function Aluno(nome, idade, curso){
    this.curso = curso


    this.alunoFala = () =>{
        console.log('Olá! Meu nome é ' + this.nome + ' e tenho ' + this.idade + ' anos e estou cursando ' + this.curso + ' atualmente.')
    }
    Pessoa.call(this, nome, idade)
}

function Professor(nome, idade, cargo, salario, empresa){
    this.empresa = empresa

    this.professorFala = () =>{
        console.log('Olá! Meu nome é ' + this.nome + ' e tenho ' + this.idade + ' anos e atualmente trabalho na ' + this.empresa + ' com o cargo de ' + this.cargo + ' e meu salário atualmente é: R$' + this.salario )
    }

    Funcionario.call(this, nome, idade, cargo, salario)
}

function Dev(nome, idade, cargo, salario, empresa, tecnologia){
    this.tecnologia = tecnologia

    this.devFala = () =>{
        console.log('Olá! Meu nome é ' + this.nome + ' e tenho ' + this.idade + ' anos e atualmente trabalho na ' + this.empresa + ' com o cargo de ' + this.cargo + ' e meu salário atualmente é: R$' + this.salario + '. Minha tecnoligia principal atual é ' + this.tecnologia)
    }

    Professor.call(this, undefined, undefined, undefined, undefined, empresa)
    Funcionario.call(this, nome, idade, cargo, salario)
}




const aluno = new Aluno('Matheus', 14, 'Libras')
const professor = new Professor('Carlos', 40, 'Professor', 4500, 'Colegio Acadêmico');
const dev = new Dev('Daniel', 19, 'Desenvolvedor back-end', 6000, 'Spotify', 'Java');

console.log(aluno.alunoFala())
console.log(professor.professorFala())
console.log(dev.devFala())

