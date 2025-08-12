let a = { prop: 1};

function suma(n) {
    n.prop++;
}

suma(a);
console.log(a);

/**
 * Es importante recordar que los Primitivos se copian
 * y los de Referencia se referencian: (Objetos, arrays, functiones)
 */