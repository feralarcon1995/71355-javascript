console.log('clase 7')


//! HOF
// function mayorQue(numero){
//   console.log(numero)
//   return (m) => m > numero;
// }


// let mayorQueDiez = mayorQue(10);

// console.log(mayorQueDiez(8))

// mayorQueDiez(mayorQue(10), 8)

// function asignarOperacion(op) {
//   if (op === 'sumar') {
//     return (a, b) => a + b
//   } else if (op === 'restar') {
//     return (a, b) => a - b
//   }
// }

// let sumar = asignarOperacion('sumar');
// let restar = asignarOperacion('restar');

// console.log(sumar(12, 4))
// console.log(restar(20, 12))

//? Recibir funciones por parametros

// function porCadaUno(array, funcion) {
//   for (const el of array) {
//     funcion(elemento)
//   }
// }


const numeros = [1, 2, 3, 4, 5]

// porCadaUno(numeros, console.log)

//! Metodos de transformacion y busqueda de arrays
const viajes = [
  { id: 'asda2321-asdas123', nombre: 'Buenos Aires', precio: 1000, continente: 'America' },
  { id: 'asdk2341-asd123s', nombre: 'Machu Picchu', precio: 1500, continente: 'America' },
  { id: 'adsfj3214-23asdv', nombre: 'París', precio: 2000, continente: 'Europa' },
  { id: 'asdk2332-23hsdf', nombre: 'Nueva York', precio: 1800, continente: 'America' },
  { id: 'weqr2123-2asdsvd', nombre: 'Roma', precio: 2200, continente: 'Europa' },
  { id: 'iopm2389-23kjdsf', nombre: 'Tokio', precio: 2300, continente: 'Asia' },
  { id: 'xcvb3290-123hjsd', nombre: 'Sydney', precio: 2000, continente: 'Oceania' },
  { id: 'lkjh3213-23asdv', nombre: 'Londres', precio: 1900, continente: 'Europa' },
  { id: 'mnvb0987-23njsdf', nombre: 'Cairo', precio: 2000, continente: 'Africa' },
  { id: 'zxcv5643-23lksdf', nombre: 'Los Ángeles', precio: 1700, continente: 'America' }
];

//? forEach puedo recorrer arrays e imprimir el valor de cada elemento
// viajes.forEach((viaje) => {
//   console.log(`El paquete hacia ${viaje.nombre}, sale ${viaje.precio} crocantes`)
// })

//? find me devuelve el primer elemento que cumpla la condición sin importar si existe otro elemento que tambien cumpla
// const viajeEncontrado = viajes.find((viaje) => viaje.precio === 2000)
// console.log(viajeEncontrado)

//? filter me devuelve un array nuevo con  todos los elementos que cumplan con la condicion
// const filtrarPrecio = viajes.filter((viaje) => viaje.precio === 2000);
// const viajesHaciaAmerica = viajes.filter((viaje) => viaje.continente === 'America')

// console.log(filtrarPrecio)

//? some devuelve solamente true o false
// const existe = viajes.some((viaje) => viaje.nombre == 'Roma')
// console.log(existe)

//? map
// const precios = viajes.map((viaje) => {
//   return viaje.precio * 2
// })
// console.log(precios)

//? reduce
// const total = viajes.reduce((total, viaje) => total + viaje.precio, 0)
// console.log(total)

//? sort
// console.log('antes:', numeros)
//* Forma ASCENDENTE
// numeros.sort((a, b) => a - b)
//* Forma DESCENDENTE
// numeros.sort((a, b) => b - a)
// console.log('despues', numeros)
//* Forma ASCENDENTE
// viajes.sort((a,b) => a.precio - b.precio)
//* Forma DESCENDENTE
// viajes.sort((a, b) => b.precio - a.precio)
//* Forma ASCENDENTE
// viajes.sort((a, b) => {
//   if (a.nombre > b.nombre) {
//     return 1;
//   }
//   return -1;
// })
//* Forma DESCENDENTE
// viajes.sort((a, b) => {
//   if (a.nombre > b.nombre) {
//     return -1;
//   }
//   return 1;
// })
console.log(viajes)