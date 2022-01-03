const alunos = [{
        nome: 'Luis',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Gabriela',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C',
    },
];

function alunosAprov(alunos, media) {
    //será a nova array dos alunos que foram aprovados
    let aprovados = [];
    //irá percorrer cada elemento da array dos alunos
    for (i = 0; i < alunos.length; i++) {
        const { nota, nome } = alunos[i];
        //ele cria com neste if uma array de 'nota' do objeto 'alunos'
        if (nota >= media) {
            aprovados.push(nome)
        }
    }
    return aprovados;
}

console.log(alunosAprov(alunos, 5))