/**
 * Crear algoritmo que devuelva número
 * menor y mayor de un array
 */

let array = [2, 60, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let mayor = arr[0];
    let menor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        mayor = (mayor > arr[i] ? mayor : arr[i]);
        menor = (menor > arr[i] ? arr[i] : menor);
    }
    return 'mayor= ' +mayor + ' : menor= ' + menor;
}

// Otra manera de poder hacerlo seria
function getMenorMayo2(arr) {
    let mayor = arr[0];
    let menor = arr[0];
    for (numero of arr) {
        mayor = (mayor > numero ? mayor : numero);
        menor = (menor < numero ? menor : numero);
    }
    return mayor + ',' + menor
}

let numeros = getMenorMayor(array);
let respuesta2 = getMenorMayo2(array);

console.log('------------------');
console.log(numeros);
console.log('------------------');

console.log(respuesta2);
