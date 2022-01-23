//Filtre e retorne todos os números pares de um array.

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
    //ou para mostrar os numeros impares usa "return item % 2 !== 0;""
}
const meuArray = [1, 23, 57, 30, 2, 4];

console.log(filtraPares(meuArray));