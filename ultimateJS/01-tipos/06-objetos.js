// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre: nombre,
    anime: anime,
    edad: edad,
}
console.log(personaje);
console.log(personaje.anime);
console.log(personaje['edad']);


// Cambio de propiedad
personaje.edad = 13;

let llave = 'edad';
personaje[llave] = 16;

delete personaje.anime;

console.log(personaje);