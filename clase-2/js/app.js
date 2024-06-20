//? el usuario debe ingresar 2 numeros, y la operacion, y sin condicionales, este se deberia mostrar en consola o en alert.

// let operaciones = prompt('Ingrese la operacion: +, -, *, /');
// let num1 = parseInt(prompt('Ingrese el primer numero: '));
// let num2 = parseInt(prompt('Ingrese el segundo numero: '));

// let resultado = eval(`${num1} ${operaciones} ${num2}`);

// console.log(`el resultado de ${num1} ${operaciones} ${num2} es: ${resultado}`);




//* condicionales
//! == es igual (compara solo el valor, no el tipo de dato)
//! === es estrictamente igual (compara el valor y el tipo de dato)
//! != es distinto
//! !== es estrictamente distinto
//! > mayor que
//! < menor que
//! >= mayor o igual que
//! <= menor o igual que

//! && AND
//! || OR

//? ejemplo1
// let numero = 5;

// if (numero === '5') {
//   console.log('el numero es 5');
// } else {
//   console.log('no es el numero 5')
// }

//? ejemplo2
// let nombre = prompt('ingresa tu nombre');
// if (nombre == '') {
//   alert('No ingresaste ningun nombre.')
// } else {
//   alert(`Bienvenido ${nombre}`)
// }

//? ejemplo 3
// let usuario = prompt('ingrese su usuario');
// let password = prompt('ingrese su password');

// if(usuario != 'admin' && password !== '1234' ){
//   alert('credenciales incorrectas');
// } else {
//   alert('bienvenido');
// }

//? ejemplo 4
// let usuario = prompt('ingrese su usuario');
// let password = parseInt(prompt('ingrese su password'));

// if (usuario == 'admin' || password === '1234') {
//   alert('bienvenido');
// } else {
//   alert('intente de nuevo');
// }

//? ejemplo 5
// alert('Bienvenido a la licoreria');
// let edad = parseInt(prompt('ingresa tu edad por favor.'));

// if (isNaN(edad)) {
//   alert('no ingresaste un numero valido, hace caso')
// } else if (edad === 1) {
//   alert('sos un bebe');
// } else if (edad <= 18) {
//   alert('no eres mayor de edad');
// } else {
//   alert('sos mayor, podes comprar.')
// }

//? ejemplo 6 - A

// let operaciones = prompt('Ingrese la operacion: \n Para sumar ingrese: + \n Para restar ingrese: - \n Para multiplicar ingrese: * \n Para dividir ingrese: / \n Para salir ingrense: salir').toLowerCase()


// if (operaciones === '+') {

//   let num1 = parseInt(prompt('Ingrese el primer numero: '));
//   let num2 = parseInt(prompt('Ingrese el segundo numero: '));
//   alert(`el resultado de ${num1} ${operaciones} ${num2} es: ${num1 + num2}`);

// } else if (operaciones === '-') {

//   let num1 = parseInt(prompt('Ingrese el primer numero: '));
//   let num2 = parseInt(prompt('Ingrese el segundo numero: '));
//   alert(`el resultado de ${num1} ${operaciones} ${num2} es: ${num1 - num2}`);

// } else if (operaciones === '*') {

//   let num1 = parseInt(prompt('Ingrese el primer numero: '));
//   let num2 = parseInt(prompt('Ingrese el segundo numero: '));
//   alert(`el resultado de ${num1} ${operaciones} ${num2} es: ${num1 * num2}`);

// } else if (operaciones === '/') {

//   let num1 = parseInt(prompt('Ingrese el primer numero: '));
//   let num2 = parseInt(prompt('Ingrese el segundo numero: '));
//   alert(`el resultado de ${num1} ${operaciones} ${num2} es: ${num1 / num2}`);

// } else if (operaciones === 'SALIR') {
//   alert('Adios')
// } else {
//   alert('Ingresa alguna de las opciones por favor. hace caso')
// }


//? ejemplo 6 - B

let operaciones = prompt('Ingrese la operacion: \n Para sumar ingrese: + \n Para restar ingrese: - \n Para multiplicar ingrese: * \n Para dividir ingrese: / \n Para salir ingrense: salir').toLowerCase()

if (operaciones === '+' || operaciones === '-' || operaciones === '*' || operaciones === '/') {
  let num1 = parseInt(prompt('Ingrese el primer numero: '));
  let num2 = parseInt(prompt('Ingrese el segundo numero: '));
  //todo Inicio de validacion anidada
  //todo Podemos hacer validaciones anidadas, siempre y cuando esta sea requerida por alguna razon en especifica.
  if (isNaN(num1) || isNaN(num2)) {
    alert('no ingresaste un numero valido, hace caso')
  } else {
    let resultado = eval(`${num1} ${operaciones} ${num2}`);
    alert(`el resultado de ${num1} ${operaciones} ${num2} es: ${resultado}`);
  }
  //todo fin de validacion anidada

} else if (operaciones === 'salir') {
  alert('Adios')
} else {
  alert('Ingresa alguna de las opciones por favor. hace caso')
}
