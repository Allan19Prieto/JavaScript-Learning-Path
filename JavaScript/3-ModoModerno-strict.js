
// Use "strict"

// Algunas de las caracteristicas de JavaScript en las nuevas versiones
// Estan desactivadas por defecto, esto para no tener conflicto con códigos antiguos
// para poder activarlas se utiliza "use strict"

// Cuando se sitúa al principio de un script, el script funciona de forma moderna
// por ejemplo:
"use strict"

// este código funciona de la forma moderna

// "use strict" se puede poner al inicio de una función. De esta manera, se activa el modo stricto
// únicamente en esa función. Pero normalmente se utiliza para el script entero.


// El modo stricto no está activado aquí:
alert('algo de código')
// la actividad de use strict abajo es ignorada, tiene que estar al principio

"use strict"
// el modo strctict no está activado



// *** No hay manera que haga que el motor vuelva al estado original ***


// Consola del navegador

// Puedes intentar Shift + Enter
// Para ingresar multiples lineas y poner "use strict"

//'use strict'; <shift + Enter para una nueva inea>
// ..... tu código
//<  para ejecutar>

// Hay otra forma fea pero efectiva de usar el use strict
(function () {
    'use strict'

    // .. tu código
}) ()

/** 
 * ¿Deberíamos utilizar “use strict”?
La pregunta podría parecer obvia, pero no lo es.

Uno podría recomendar que se comiencen los script con "use strict"… ¿Pero sabes lo que es interesante?

El JavaScript moderno admite “clases” y “módulos”, estructuras de lenguaje avanzadas (que seguramente
llegaremos a ver), que automáticamente habilitan use strict. Entonces no necesitamos agregar la directiva 
"use strict" si las usamos.

Entonces, por ahora "use strict"; es un invitado bienvenido al tope de tus scripts. 
Luego, cuando tu código sea todo clases y módulos, puedes omitirlo.

A partir de ahora tenemos que saber acerca de use strict en general.

En los siguientes capítulos, a medida que aprendamos características del lenguaje, veremos 
las diferencias entre el modo estricto y el antiguo. Afortunadamente no hay muchas y realmente 
hacen nuestra vida mejor.
*/