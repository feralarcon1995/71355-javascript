// console.log('clase 5')

//?Objetos

// let nombre = 'pepe'
// let apellido = 'perez'
// let edad = 23
// let casado = true;

// let persona = {
//   nombre: nombre,
//   apellido: 'rodriguez',
//   edad: 24,
//   casado: false,
// }


// console.log('nombre1:', nombre)
// console.log(persona)


// let mesa = {
//   madera: 'roble',
//   color: 'oscuro',
//   tamanio: 'grande',
//   precio: 10000,
//   cantidad_patas: 4
// }

//? Obteniendo propiedades de un objeto

// console.log(`Precio de la mesa: ${mesa.precio} \n color de la mesa: ${mesa.color}`);

// console.log(mesa.tamanio)
// mesa['tamanio'] = 'pequeño';
// console.log(mesa.tamanio)
// mesa.tamanio = 'mediano'
// console.log(mesa.tamanio)

// console.table('obj original', mesa)

// mesa.forma = 'redonda';
// console.table(mesa)

//? Constructores

function Producto(id, name, price, stock, description) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.stock = stock;
  this.description = description;

  this.agregar = function () { console.log(`Producto ${this.name} agregado.`) }
  this.calcularIva = function () { return price * 1.21 }
}


const producto1 = new Producto('1', 'Computadora', 100000, 5, 'computadora de escritorio')
const producto2 = new Producto('2', 'Laptop', 130000, 3, 'computadora portatil');

//? Operador IN nos devuelve true o false
// console.log('name' in producto1)

//? For in recorre todas las propiedades de un objeto.
// for (const propiedad in producto1) {
//   console.log(`${propiedad}: ${producto1[propiedad]}`)
// }


//? Clases

class Persona {
  constructor(nombre, edad, pais) {
    this.nombre = nombre;
    this.edad = edad;
    this.pais = pais;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy de ${this.pais}`);
  }
}


function agregarPersona() {
  let nombre = prompt('Agregue su nombre por favor');
  let edad = parseInt(prompt('Agregue su edad por favor'));
  let pais = prompt('Agregue su pais por favor');
  return new Persona(nombre, edad, pais);
}
// const persona1 = new Persona('Goku', 29, 'Masculino');

const persona2 = agregarPersona();

console.log(persona2)
persona2.saludar()



class Producto {
  constructor(id, name, price, stock, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.description = description;
  }

  sumarIva() {
    this.precio = this.precio * 1.21;
  }

  vender() {
    this.vendido = true;
  }
}
