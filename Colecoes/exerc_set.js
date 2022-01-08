//ATIVIDADE 2
//Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.
const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);
    //usando o spread(...), os elementos do set ficam dentro do array
    return [...mySet];

    //se deixasse como: [mySet], estaria apenas colocando o set dentro do array, e não os seus elementos
}

console.log(valoresUnicos(array));