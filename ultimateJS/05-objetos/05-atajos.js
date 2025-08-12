let obj = {};
let obj2 = new Object();

/**
 * new Array();
 * new String();
 * new Number();
 * new Boolean();
 */

function Usuario() {
    this.name = "Chancho Feliz";
}
let user = new Usuario();
console.log(user.constructor);