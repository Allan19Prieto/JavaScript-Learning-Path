
// no hay error en hacer esto
let mes = 'hola'
mess = 123;

// Number
let n = 123;
n = 12.35;

alert( 1/ 0) // infinity

alert( Infinity ) // infinity

// NAN representa un error de cálculo.
alert("no es un número"/ 2 ); // NAN, tal división es un erro

// NAN, devuelve NAN
alert(NaN);


// BigInt
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

/**BigInt se agregó recientemente al lenguaje para representar enteros de longitud arbitraria.

Un valor BigInt se crea agregando n al final de un entero: */

// la "n" al final significa que es un BigInt
const bigInt = 1234567890123456789012345678901234567890n;

//String
//Un string en JavaScript es una cadena de caracteres y debe colocarse entre comillas.

let str = "Hola";
let str2 = 'Las comillas simples también están bien';
let phrase = `se puede incrustar otro ${str}`;

/**En JavaScript, hay 3 tipos de comillas.

Comillas dobles: "Hola".
Comillas simples: 'Hola'.
Backticks (comillas invertidas): `Hola`. */

let name = "John";

// incrustar una variable
alert(`Hola, ${name}!`); // Hola, John!

// incrustar una expresión
alert(`el resultado es ${1 + 2}`); //el resultado es 3

/**Boolean (tipo lógico)
El tipo boolean tiene sólo dos valores posibles: true y false.

Este tipo se utiliza comúnmente para almacenar valores de sí/no: true significa “sí, correcto, verdadero”, y false significa “no, incorrecto, falso”.

Por ejemplo:

let nameFieldChecked = true; // sí, el campo name está marcado
let ageFieldChecked = false; // no, el campo age no está marcado
Los valores booleanos también son el resultado de comparaciones:

let isGreater = 4 > 1;

alert( isGreater ); // verdadero (el resultado de la comparación es "sí")
En el capítulo Operadores Lógicos trataremos más a fondo el tema de los booleanos. */

/**El valor “undefined” (indefinido)
El valor especial undefined también se distingue. Hace un tipo propio, igual que null.

El significado de undefined es “valor no asignado”.

Si una variable es declarada, pero no asignada, entonces su valor es undefined: */

let age;

alert(age); // muestra "undefined"

//Técnicamente, es posible asignar undefined a cualquier variable:

let age = 100;

// cambiando el valor a undefined
age = undefined;

alert(age); // "undefined"

