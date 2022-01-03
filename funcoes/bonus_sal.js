const colab = [{
        nome: 'Julio',
        salario: 1200,
    },
    {
        nome: 'Ana',
        salario: 1100,
    },
    {
        nome: 'Mario',
        salario: 900,
    },
    {
        nome: 'Alberto',
        salario: 2000,
    },
    {
        nome: 'Luan',
        salario: 850,
    },
]

function bonus(colab) {
    let ganharam_bonus = [];
    console.log("Nome dos colaboradores com seus respectivos salários reajustados:");
    for (i = 0; i < colab.length; i++) {
        let { nome, salario } = colab[i];
        if (salario <= 1500) {
            salario = salario + 100;
            ganharam_bonus.push(nome);
        }
    }
    return ganharam_bonus;
}
console.log(bonus(colab))