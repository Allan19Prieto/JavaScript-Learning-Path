let user = {
    id: 1,
    name: 'Chancho',
    age: 25,
};

// Podemos realizarlo con un ciclo for in en JavaScript
for (let prop in user) {
    console.log(prop + ': ' + user[prop]);
}

console.log('');
let animales = ['Chanchito feliz', 'Dragón', 'Perrito'];
for (let i in animales) {
    console.log(i,  animales[i]);
}