//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp Femcoders de Factoría F5"

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')
console.log("Bienvenida/o al bootcamp Femcoders de Factoría F5");

//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

let nombre = "Ainara";
let edad = 28;
let esEstudiante = true;
let datoNulo = null;
let datoIndefinido;
let persona = { nombre: "Ainara", edad: 28 };
let frutas = ["manzana", "pera", "plátano"];

console.log(nombre);
console.log(edad);
console.log(esEstudiante);
console.log(datoNulo);
console.log(datoIndefinido);
console.log(persona);
console.log(frutas);

//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

const postres = ["helado", "tarta", "pastel"];

console.log(postres);


//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

const coder = {
    nombre: "Ainara",
    edad: 28
};

console.log(coder);


//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof esEstudiante);
console.log(typeof datoNulo);
console.log(typeof datoIndefinido);
console.log(typeof persona);
console.log(typeof frutas);


//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

let suma = 2 + 3;
console.log(suma);


//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

let resta = 5 - 2;
console.log(resta);


//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

let multiplicacion = 2 * 3;
console.log(multiplicacion);


//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

let division = 6 / 2;
console.log(division);


//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

let numero1 = 1;
let numero2 = 2;

let comparacion = numero1 < numero2;
console.log(comparacion);


// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

let comparacion2 = numero1 !== numero2;
console.log(comparacion2);


//Ejercicio 11: completa el ejercicio/*

let num1 = 15;
let num2 = 20;

let comparacion11 = num1 < num2;
console.log(comparacion11);

//Ejercicio 12: completa el ejercicio

let num3 = 1;
let num3AsString = "1";

let result = num3 === num3AsString;

console.log(result);

//Ejercicio 13: completa el ejercicio

let result2 = num3 == num3AsString;

console.log(result2);

//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

let miNombre = "Ainara";
let miApellido = "García";

let nombreCompleto = miNombre + " " + miApellido;

console.log(nombreCompleto);

//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res = a < 10 && b > 1;
console.log(res);

let res2 = a < 10 && b < 1;
console.log(res2);

let res3 = a == 5 || b == 5;
console.log(res3);

let res4 = a == 6 || b == 0;
console.log(res4);

let res5 = a == 0 || b == 3;
console.log(res5);

let res6 = a == 6 && b == 3;
console.log(res6);