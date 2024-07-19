type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}


const alunos: aluno[] = [ 
    { 
        nome:'carlos',
        cursos: ['front-end', 'ux/ui'],
        idade: 19
    },
    {
        nome: 'ana',
        cursos: ['front-end', 'python'],
        idade: 23,
    },
]

alunos.push({
    nome: 'julia',
    cursos: ['arquitetura'],
    idade: 29
})

const novoAluno: aluno = {
    nome: 'lucas',
    idade: 23
}