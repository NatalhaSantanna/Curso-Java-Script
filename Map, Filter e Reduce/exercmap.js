//Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você.

const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

//na função um dos argumentos acima será substituido por "this"
function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));