/**
 * Crear algoritmo que devuelva cantidad
 * de números positivos de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function getCountPositivos(arr) {
    let count = 0;
    for (numero of arr) {
        count = count + (numero > 0 ? 1 : 0);
    }
    return count;
}

let respuesta = getCountPositivos(array);

console.log(respuesta);