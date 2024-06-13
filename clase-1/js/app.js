


//! tipos de datos
/*
string = 'cadena de texto'
number = 10
boolean = true o false
undefined = sin valor
*/

//!formas de declarar variables
/*
var miVar = 'variable' //! no se debe usar
let miVar_let = 'variable' //? se debe usar
const miVar_const = 'variable'
 */

//* declarando variables */
let apodo;
// let nombre;
let edad;
//? constante es algo que se declara y no puede cambiar su valor
const apellido = 'fernandez';

//* asignando valores
apodo = 'fer';
// nombre = 'fernando'
edad = 18
// apellido = 'alarcon'

// apodo = nombre

// console.log(apodo, nombre, edad)
//? con comas
// console.log('apodo:', apodo, 'nombre:', nombre, 'edad:', edad)
//? backtips ` `
// console.log(`hola soy ${apodo}, mi edad es ${edad}`)
//? const
// console.log(apellido)

//! operaciones basicas

// let num1 = 4;
// let num2 = 10;


//?metodo prompt es un input que le pide al usuario un valor
let num1 = prompt('ingrese el primer numero');
let num2 = prompt('ingrese el segundo numero');
let resultado =num1 * num2
// alert(`el resultado de la suma de ${num1} + ${num2} es : ${resultado}`)
// alert('el resultado de la suma de ' + num1 + ' + ' + num2 + ' es: ' + resultado)
alert("hola," + resultado)

// let saludo = 'Holi uwu';
// let nombre =  prompt('ingrese su nombre');
// let resultado = saludo + ' ' + nombre;
// console.log(`Hola ${nombre}, como estas?`)
// alert(`Hola ${nombre}, como estas?`)