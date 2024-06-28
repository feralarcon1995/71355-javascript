console.log('clase 4')

//? Funcion
// function saludar() {
//   let nombre = prompt('ingrese su nombre')
//   alert(`Hola ${nombre}, como estas?`)
// }

//? Funciones con parametros
// let nombre = 'juan' //! variable global

// function saludar(nombre) {
//   let pepe = 'fer' //! variable local
//   console.log(`hola ${nombre}, ${pepe} como estas?`)
//   console.log('dentro de la funcion:', nombre)
//   console.log('dentro de la funcion:', pepe)
// }

// let nombre = prompt('ingrese su nombre por favor')
// let nombre = 'juan'
// console.log('fuera de la funcion:', nombre)
// console.log('fuera de la funcion:', pepe)
// saludar(nombre);

//? Ejemplo 2 - funcion con parametros

// let nombre = prompt('ingrese su nombre por favor')
// let apellido = prompt('ingrese su apellido por favor')
// function saludar(nombre, apellido) {
//   console.log(`hola ${nombre} ${apellido}, como estas?`)
// }

// saludar(nombre, apellido)

// function despedida(nombre, apellido) {
//   console.log(`Hasta pronto, ${nombre} ${apellido}`);
//   console.log('nombre:', nombre)
// }

// despedida(nombre, apellido)

//? Ejemplo 3 - funcion con parametros

// function calculadora() {
//   let operacion = prompt('ingrese la operacion:\n + \n - \n * \n / \n Escriba cancelar para salir.').toLocaleLowerCase();

//   if (operacion === 'cancelar') {
//     alert('Hasta pronto')
//     return;
//   }

//   let num1 = parseInt(prompt('ingrese el primer numero'))
//   let num2 = parseInt(prompt('ingrese el segundo numero'))

//   let resultado;

//   if (isNaN(num1) || isNaN(num2)) {
//     alert('ingrese un numero valido, pascual');
//   }

//   switch (operacion) {
//     case '+':
//       resultado = num1 + num2
//       break;
//     case '-':
//       resultado = num1 - num2
//       break;
//     case '*':
//       resultado = num1 * num2
//       break;
//     case '/':
//       if (num2 === 0) {
//         alert('no se puede dividir por 0')
//       } else {
//         resultado = num1 / num2
//       }
//       break;
//     default:
//       alert('Operacion no valida, hace caso.')
//   }

//   if (resultado === undefined || resultado === null) {
//     console.log('no se pudo realizar la operacion')
//     calculadora();
//   } else {
//     alert(`el resultado es: ${resultado}`)
//   }
// }

// calculadora()

//? Funciones anonimas

// let suma = function (a, b) { return a + b }

// console.log(suma(5, 20))

// let saludar = function (nombre) { console.log(`hola ${nombre}`) }

// saludar('pepito')

// saludar = 'jorge'

// console.log(saludar)

//? Funciones flecha

// const suma = (a, b) => {
//   if (isNaN(a) || isNaN(b)) {
//     console.log('ingresa un numero valido')
//     return 'ingresa un numero valido';
//   }
//   let resultado = a + b
//   return resultado;
// }
// const resta = (a, b) => a - b;

// console.log(suma(10, 'fer'))

const saludar=nombre=>{nombre;}
console.log(saludar('nombre'))