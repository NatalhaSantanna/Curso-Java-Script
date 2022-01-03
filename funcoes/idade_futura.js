const pessoa1 = {
    nome: 'Cássia',
    idade: 25,
};
const pessoa2 = {
    nome: 'Lia',
    idade: 56,
};
const pessoa3 = {
    nome: 'Julia',
    idade: 13,
};
const pessoa4 = {
    nome: 'Matheus',
    idade: 32,
};

//calcula idade das pessoas daqui a x anos
function calcIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}
//usando o call de this. com o apply o resultado daria o mesmo, porém o parâmetro 'anos' teria que estar entre []
console.log(calcIdade.call(pessoa2, 7))