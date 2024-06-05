# ADHD04

## ¿Qué es TypeScript?
TypeScript es un superconjunto de JavaScript que añade tipado estático al lenguaje. Esto significa que las variables, funciones y otros elementos del código se asocian con tipos específicos, lo que permite al compilador detectar errores potenciales durante el desarrollo y mejorar la legibilidad del código. 

## ¿Cómo se instala TypeScript en VSCode?
 Para instalar TypeScript en Visual Studio Code, siga estos pasos:
Abra Visual Studio Code.
Vaya a la extensión "TypeScript" en el mercado de extensiones.
Haga clic en el botón "Instalar".
Reinicie Visual Studio Code.

## ¿Como se compila un archivo en TypeScript para convertirlo a JavaScript?
Para compilar el archivo TypeScript se pueden usar lineas de comandos, se instala el compilador de TypeScript utilizando npm o yarn, navegar en el archivo de TypeScript (main.ts), por ultimo compilar el archivo TypeScript usando el comando (tsc main.ts)

## ¿Qué extensión de arachivos se utiliza para los archivos TypeScript?
La extensión se utiliza para diferenciar los archivos TypeScript de los archivos JavaScript normales, que utilizan la extensión .js. Los archivos TypeScript contienen código JavaScript con información de tipo adicional, que se compila en código JavaScript normal antes de ser ejecutado por un navegador web o un motor de JavaScript.

## ¿Cómo se define un tipo de dato en TypeScript?
Anotaciones tipo explicita:

 Puede especificar el tipo de dato de una variable al declararla utilizando una anotación de tipo explícita. Esto se hace después del nombre de la variable, seguido de dos puntos y luego el nombre del tipo de dato.

Inferencia de tipos:

TypeScript se puede inferir de una variable a partir de su valor inicial.Lo que signifca que no es necesario que siempre especifique explisitamente el tipo de dato.

## ¿Qué son los tipos de unión y cómo se declaran?

Los tipos de unión en TypeScript:

Los tipos de unión en TypeScript son una forma de especificar que una variable o expresión puede contener uno de varios tipos de datos compatibles.

Decalración de tipos de unión:

Las sintaxis para declarar un tipo de unión es utilizar el opredor ( | ) para serparar los datos compatibles. Por ejemplo, el siguiente código define una variable llamada valor.

## ¿Qué es un tipo de literal en TypeScript y para qué se utliza?
Tipo literal primitivo:

Cadenas:

Se pueden definir tipo lateral de cadenas utilizando comillas simples o dobles.

Números:

Se definen tipos de números utilizando valores numéricos literales.

Booleanos:

Se definen porque utiliza palabras claves "true" o "false"

Tipos laterales de objetos:

Se definen lateral de objetos para representar 

## ¿Qué son los tipos enumerados (Enums) y cómo se crean?
Los tipos enumerados, tambien comocidos como enums,  son una característica de TypeScript que permite definir un conjunto de constantes con nombre. Estas constantes representan valores relacionados entre sí y pueden ser utilizadas para mejorar la legibilidad, seguridad y mantenibilidad del código.

## ¿Cómo se definen las funciones con tipos en TypeScript?
Sintaxis básicas:

Sive para definir una funcion con tipos de TypeScript . 

Explicación de la sintaxis:

nombreFuncion: Es el nombre que se le da a la función.

parametro1: tipoParametro1: Define el primer parámetro de la función, especificando su nombre y tipo de dato.

parametro2: tipoParametro2: Define el segundo parámetro de la función, especificando su nombre y tipo de dato.

...: Se utiliza para indicar que puede haber más parámetros de función.

tipoRetorno: Especifica el tipo de dato que devuelve la función.

{}: Define el bloque de código que representa el cuerpo de la función.

## ¿Qué son los parámetros opcionales y los parámetros predeterminados en funciones?

Parámetros opcionales y parámetros predeterminados en funciones:

Los parámetros opcionales y los parámetros predeterminados son dos características comunes en la definición de funciones en muchos lenguajes de programación. Ambos permiten mayor flexibilidad al llamar a funciones, haciendo el código más legible y reutilizable.

Parámetros opcionales:

Un parámetro opcional es aquel que no es obligatorio proporcionarle un valor al llamar a la función. Si no se proporciona un valor para un parámetro opcional, la función utiliza un valor predeterminado, o bien se comporta de una manera específica definida por el programador.

## ¿Cuáles son las mejores practicas para escribir código limpio y mantenible en TypeScript?

Habilitar aprobaciones de datos:

TypeScript se destaca por su sistema de tipos, el cual permite detectar errores en tiempo de compilación que podrían pasar desapercibidos en JavaScript.

Usar interfaces y tipos personalizados: 

Las interfaces y los tipos personalizados permiten definir estructuras de datos más complejas y precisas, mejorando la legibilidad y la autodocumentación del código. 

Aprovechar las inferencias de tipos:

TypeScript infiere automáticamente los tipos de variables y expresiones basadas en su uso. Esto significa que no siempre es necesario escribir anotaciones de tipo explícitas, lo que hace que el código sea más conciso y fácil de leer.