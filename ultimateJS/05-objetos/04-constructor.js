// {id: 1, recuperarClave: function() {}}
function Usuario() {
    this.id = 1;
    this.recuperarClave = function () { // métodos: Función asignada a una propiedad del objeto
        console.log('Recuperar clave');
    }
}

let usurio = new Usuario();

console.log(usurio)