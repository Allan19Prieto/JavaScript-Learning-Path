// short-circuit

//Falso se les conose como Flasy
// En JavaScript, los valores falsy son aquellos que se evalúan como false en un contexto booleano.
// Los valores falsy incluyen:
// false
// 0
// ' '
//null
// undefined
// NaN
let nombre = 'Chanchito Feliz';
let username = nombre || 'Anonimo';
console.log(username); 

function fn1() {
    console.log('fn1 ejecutada');
    return false;
}

function fn2() {
    console.log('fn2 ejecutada');
    return false;
}

let x = fn1() && fn2(); 