/**
 * Crear algoritmo que devuelva
 * el precio del producto 
 * más impuesto
 */

function getvalorTotal(precio, impuesto) {
    return precio + (precio * impuesto);
}

let respuesta = getvalorTotal(19.90, 0.15);

console.log(respuesta);