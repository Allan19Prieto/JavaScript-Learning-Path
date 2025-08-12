const punto = {
    x: 1,
    y: 2,
    dibujar() {
        console.log('dibujando');
    }
};

//delete punto.dibujar;
if('dibujar' in punto) { // Verificamos si un objeto tiene alguna propiedad en particular
    punto.dibujar();
}

//console.log(Object.keys(punto)); // Listamos las propiedades del objeto
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]); // Mostramos las propiedades y sus valores
}

for (let entry of Object.entries(punto)) {
    console.log(entry);
}

for (let llave in punto) {
    console.log(llave, punto[llave]);
}
