/**
 * indice valodar que no sea menor a cero y que el elemnto exista
 * en el array
 */

function gerbyIdx(arr, idx) {
    if (idx < 0 || idx >= arr.length) {
        return 'Inice fuera de rango'
    } else {
        return arr[idx];
    }
}

let resultado = gerbyIdx([1,2], -2);
console.log(resultado);