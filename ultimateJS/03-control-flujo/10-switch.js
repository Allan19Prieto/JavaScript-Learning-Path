let accion = 'crear';

switch (accion) {
    case 'listar':
        console.log('Listando elementos');
        break;
    case 'crear':
        console.log('Creando elemento');
        break;
    case 'editar':
        console.log('Editando elemento');
        break;
    case 'eliminar':
        console.log('Eliminando elemento');
        break;
    default:
        console.log('Acción no reconocida');
}