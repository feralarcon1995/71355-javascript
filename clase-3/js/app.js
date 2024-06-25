//? Bucle FOR
//* n++ = n + 1
// for (let pepito = 0; pepito <= 10; pepito++) {
//   console.log('numero:', pepito)
// }

//* Ejemplo 2
// let cantidadAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos'));

// if (isNaN(cantidadAlumnos)) {
//   console.log('hace caso pone un numero, valido.')
// } else {
//   for (let i = 1; i <= cantidadAlumnos; i++) {
//     let alumno = prompt('Ingrese el nombre del alumno');
//     console.log(`${i}: ${alumno}`);
//   }
// }


//* Ejemplo 3
// let numero = parseInt(prompt('ingrese un numero'));

// if (isNaN(numero)) {
//   alert('Ingresa un numero valido.')
// } else {
//   let contador = 0;
//   for (let x = 1; x <= numero; x++) {
//     if (x % 2 === 0) {
//       contador++
//       console.log(`${x} es par`)
//     } else {
//       console.log(`${x} es impar`)
//     }
//   }
//   console.log(`Hay ${contador} numeros pares entre 1 y ${numero}.`)
// }


//* Ejemplo 4 - Break
// for (let i = 1; i <= 18; i = i + 1) {
//   if (i === -15 || i === 15) {
//     console.log('Finalizo el ciclo en:', i)
//     break;
//   }
//   console.log(i)
// }

//* Ejemplo 5 - Continue
// for (let i = 1; i <= 18; i++) {
//   if (i === -15 || i === 15) {
//     console.log('Sigo funcionando menos en: ', i)
//     continue;
//   }
//   console.log(i)
// }

//* Ejemplo 6 - Iterar un string
'01234567891011'
// let str = 'Hola, Mundo, como estan? bienvenidos.!';
// for (let i = 0; i < str.length; i++) {
//   console.log(i, str[i])
// }

//? Bucle WHILE
//! NO CORRER ESTE EJEMPLO, ES INFINITO
// let repetir = true;
// while(repetir){
//   console.log('Voy a repetir');
// }

//* Ejemplo 7 - WHILE

// let cantidadAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos'));
// let x = 1;
// while(x <= cantidadAlumnos){
//   let alumno = prompt('Ingrese el nombre del alumno');
//   console.log(`${x}: ${alumno}`);
//   x++;
// }

//* Ejemplo 8 - WHILE
// let dato = prompt('Ingresar un nombre').toLocaleLowerCase();
// while (dato !== 'salir') {
//   console.log(dato)
//   dato = prompt('Ingresar un nombre y para salir escribir "salir"')
// }

//? Bucle DO WHILE
//* Ejemplo 9 - DO WHILE
// let repetir = false;
// do{
//   console.log('solo una vez')
// }while(repetir)

//* Ejemplo 10 - DO WHILE
// let alumno;
// do {
//   alumno = prompt('ingrese el nombre del alumno').toUpperCase();
//   if (alumno === 'SALIR') {
//     console.log('adios mi rey')
//   } else {
//     console.log(`El nombre del alumno ingresado es: ${alumno}`)
//   }
// } while (alumno !== 'SALIR')

//? SWITCH

// let lista = prompt('Ingresa un item a la lista').toLocaleLowerCase();

// switch (lista) {
//   case 'pan':
//     console.log('Pan agregado')
//     break;
//   case 'carne':
//     console.log('Carne agregada')
//     break;
//   default:
//     console.log(`${lista}, no esta disponible en el super`)
//     break;
// }

// if (lista === 'pan') {
//   console.log('Pan agregado')
// } else if (lista === 'carne') {
//   console.log('Carne agregada')
// } else {
//   console.log(`${lista}, no esta disponible en el super`)
// }
