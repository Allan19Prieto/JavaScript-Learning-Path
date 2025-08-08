function cualEsMayor(a, b) {
    //Forma mas corta con operador ternario
    return (a > b) ? a + ' es el mayor' : b + ' es el mayor';

    /*if (a > b) {
        return a + ' es el mayor'
    } else {
        return b + ' es el mayor'
    }*/
}

let resultado = cualEsMayor(3, 10);

console.log(resultado);