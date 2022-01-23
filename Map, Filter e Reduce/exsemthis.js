//Pratique a sintaxe de multiplicação de números, sem o this

function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2
    });
}

const nums = [2, 4, 6, 8, 10];
//imprime a função mapSemThis
console.log(mapSemThis(nums));

//imprime o array nums
console.log(nums);