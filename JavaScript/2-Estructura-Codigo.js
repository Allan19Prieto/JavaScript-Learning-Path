// Sentencias
// Podemos tener cunatas sentencias queramos, solo separadas por punto
alert('Hola'); alert('Mundo')
// para que el código sea más legible se escribe en lineas separadas
alert('Hola')
alert('Mundi')

// Punto y Coma
// JavaScript interpreta el dalto de linea como un punto y coma "implicito" 

// Hay casos en los que una nueva linea no significa un punto y coma
alert(3 +
    1
    +2)

// Pero hay situaciones en las que JavaScript falla al asumir di hay punto y coma
// Ejemplo de erro
 alert('Hello');
 [1, 2].forEach(alert);

 // El error da si se quita el punto y coma
 alert('Hello')
 [1, 2].forEach(alert)

 // Ya que JavaScript lo ve de la siguiente manera
 alert('Hello')[1, 2].forEach(alert);

 // Comentarios

 // Este comentario ocupa una linea

 /* Un ejemplo de cmpentario
 Pero con dos mensajes
 oo multiples lieas*/

// No se puede comentar un  /* ... */ dentro de otro /* ... */

/*
Por favor, no dudes en comentar tu código.

Los comentarios aumentan el tamaño general del código, 
pero eso no es un problema en absoluto. Hay muchas herramientas 
que minimizan el código antes de publicarlo en un servidor de producción. 
Eliminan los comentarios, por lo que no aparecen en los scripts de trabajo. 
Por lo tanto, los comentarios no tienen ningún efecto negativo en la producción.
*/