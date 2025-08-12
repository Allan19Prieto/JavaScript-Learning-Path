/**
 * Crear algoritmo que devuelca un
 * arrat de objetos en base a pares
 */

let pairs = [
    [1, {name: "Nicolas"}],
    [2, {name: "Felipe"}],
    [3, {name: "Chanchito"},]
]

function getToCollection(array) {
    let objetos = [];
    for (i in array) {
        let elemento = array[i];
        //console.log(elemento);
        objetos[i] = elemento[1];
        //console.log(objetos);
        objetos[i].id = elemento[0];
        //console.log(objetos);
    }
    return objetos;
}

let resultado = getToCollection(pairs);
console.log(resultado);