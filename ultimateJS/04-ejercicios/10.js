/**
 * Crear array de longitud N, y que sus elementos sean 
 * numeros de 1 hasta N.
 */

let nungitud = 7;

function getArray(n) {
    let array = [];
    let idx = 1;
    while (idx <= n) {
        array[idx -1] = idx;
        idx++;
    }
    return array;
}

let respuesta = getArray(nungitud);
console.log(respuesta);