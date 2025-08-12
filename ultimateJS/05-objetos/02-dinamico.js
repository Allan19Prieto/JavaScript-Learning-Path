const user = { id: 1 };

user.name = 'Allan';
user.guardar = function () {
    console.log('Guardando ', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

const user1 = Object.freeze({ id: 1}); // No permite hacer ninguna modificacion en las propiedades
const user2 = Object.seal({ id: 1}); // Solo permite modificar propiedades existentes
user1.name = 'Allan';
user2.id = 5;
console.log(user1);
console.log(user2);
