/**
 * Crear algritmo que tome un array de
 * objetos y devuelva un array de pares
 */

let array = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Chanchito',
}];

let pares = [
    [1, { id: 1, name: "Nicolas"}],
    [2, { id: 2, name: "Felipe"}],
    [3, { id: 3, name: "Chanchito"}],
]

function getToPair(array) {
    let pares = [];
    for(idx in array){
        pares[idx] = [array[idx].id, array[idx]];
    }
    return pares
}

console.log(array)
console.log('---------------')
let respuesta = getToPair(array);
console.log(respuesta);