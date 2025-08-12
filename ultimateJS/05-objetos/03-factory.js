let user = {
    email: 'allanbanilla@gmail.com',
    name: 'Allan',
    direccion: {
        calle: 'Queen st',
        numero: 15,
    },
    activo: true,
    recuperarClave: function () { // Función anonima
        console.log('Recuperar clave');
    }
};

/*let user1 = {
    email: 'email1@example.com',
    name: 'Maikol',
    direccion: {
        calle: 'Queen st',
        numero: 15,
    },
    activo: false,
    recuperarClave: function () { // Función anonima
        console.log('Recuperar clave');
    }
};*/

// Factory nos permite crear usuarios de manera más sencilla
function crearUsuario(email, name, direccion, activo) {
    return {
        email: email,
        name: name,
        direccion: direccion,
        activo: activo,
        recuperarClave: function () { // Función anonima
            console.log('Recuperar clave');
        }
    }
}

let user1 = crearUsuario('email1@example.com', 'Maikol', { calle: 'Queen st', numero: 15 }, false);
let user2 = crearUsuario('email2@example.com', 'Juan', { calle: 'Queen st', numero: 15 }, true);

console.log(user1);
console.log(user2); 