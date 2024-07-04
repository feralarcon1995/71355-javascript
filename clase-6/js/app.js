console.log('clase 6')

//! Declaracion de arrays
// const array = [];
// const numeros = [1, 2, 3];
// const booleanos = [true, false, true];
// const mix = [1, 'holi', true, [1, 2, 3]];

// console.log(array)
// console.log(numeros)
// console.log(booleanos)
// console.log(mix)

//! Accediendo a los elementos del array
//           0, 1     ,  2  ,     3
// const mix = [1, 'holi', true, [1, 2, 3]];
// console.log(mix[3][2])

//? Metodo lenght | me muestra la cantidad de elementos dentro del array
// console.log(mix.length) //? imprime 4

// for (let inicial = 0; inicial < mix.length; inicial++) {
//   console.log(mix[inicial])
// }


const user_data = [{ id: '123123', name: 'fer', email: 'fer@gmail.com' }]



//! Agregando elementos
//? agrega un elemento nuevo al final del array
// mix.push('nuevo elemento')
// console.log(productos)
// console.log(user_data)
//? unshift agrega al principio
// productos.unshift({ id: '0000', name: "Laptop", price: 20000 })
// console.log(productos)



//! Quitar elementos
//? shift quita el primer elemento del array
// productos.shift()

//? pop quita el ultimo elemento del array
// productos.pop()

//? splice elimina uno o mas elementos del array, en cualquier posicion 
//? el primer parametro: indicamos donde queremos arrancar
//? indicamos la cantidad a eliminar desde el primer parametro
//? si no le pasamos segundo parametro, va a eliminar todos los elementos desde el valor del parmetro indicado
// productos.splice(1)

//? tambien podemos agregar elementos en cualquier posicion del array
// productos.splice(3, 1, 'Nuevo elemento')


// console.log(productos)

// const miArray = ['fer','gmail.com']
//? Metodo join, gerar un string con todos los elementos del array, en el parametro podemos pasarle el separador de los elementos
// console.log(miArray.join("@/-asd"))

//? Metodo concat, combina dos arrays en uno
const frutas = ['manzana', 'pera', 'banana', 'pan', { id: '0000', name: "celular", price: 20000 },]
// const verduras = ['tomate', 'cebolla', 'morron', 'pollito']
// const ensaladaFit = frutas.concat(verduras)
// console.log(ensaladaFit)

const productos = [
  { id: '0000', name: "celular", price: 20000 }, //0
  { id: '01111', name: 'tablet', price: 10000 }, //1
  { id: '02222', name: 'computadora', price: 230000 },//2
  { id: '03333', name: 'computadora', price: 230000 },//3
  { id: '04444', name: 'computadora', price: 230000 }] //4

//? Metodo slice copia una parte del array sin contar el ultimo elemento del original
// primer parametro desde donde va a comenzar la copia del array
// segundo parametro hasta donde va a copiar el array sin incluir ese valor
// const muebles = productos.slice(1, 3)

// const newMueble = productos.slice(0, 3).concat(productos.slice(3, 5))
// console.log(newMueble)

//? Metodo indexOf, (Si se necesita acceder a un elemento de la lista, sin que sea un objeto) nos devuelve el indice del elemento del array que coincide con el parametro
console.log(frutas.indexOf('pan'))

//? Metodo includes
// console.log(frutas.includes('pane'))

let busqueda = prompt('ingresa que queres buscar en la lista').toLocaleLowerCase()

// if (productos.includes(busqueda)) {
//   console.log(`Si hay ${busqueda} en la lista`)
// } else {
//   console.log(`No existe ${busqueda} en la lista.`)
// }


//! Metodo de array para encontrar el indice de un elemento dentro de un objeto
//? Metodo findIndex (Si se necesita acceder al indice de un objeto)
// si no encuentra el elemento arroja -1 caso contrario te devuelve el indice del elemento que haga match con la busqueda
const index = productos.findIndex(producto => producto.name == busqueda)

console.log(index)