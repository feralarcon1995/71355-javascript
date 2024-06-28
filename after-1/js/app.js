//* Tenemos que hacer un conversor interactivo, donde el usuario pueda elegir que tipo de cambio quiere convertir, si de pesos argentinos a dolares o de dolares a pesos argentinos, y el valor de la conversion. Este le debe pedir al usuario el tipo de conversion, luego en base a eso, pedirle el monto a convertir, despues mostrar la conversion a usando alerts.

//todo [*] 2 Algoritmos funcionales
//todo [*] Condicionales
//todo [*] Usar Prompts para pedirle al usuario los datos que necesitemos
//todo [*] Usar Alerts



//! Funcion peso a dolar se dividen los pesos por la tasa de cambio
function pesosADolares(pesos, tasaCambio) {
  return pesos / tasaCambio;
}

//! Funcion dolar a peso se multiplican los dolares por la tasa de cambio
function dolaresAPesos(dolares, tasaCambio) {
  return dolares * tasaCambio;
}

//! Funcion formatee el valor del decimal a un numero que podamos entender 
const formatearDecimal = numero => { return numero.toLocaleString('es-AR', { minimunFractionDigits: 2, maximumFractionDigits: 2 }); }


//! Funcion Convertir 
function convertir() {
  //* Defino el valor por el cual se va a vender o comprar el "dolar" con los pesos.
  let tasaCambio = 1355.00;

  //* Pido al usuario el tipo de conversion que quiere realizar
  let opcion = prompt('¿Queres convertir 1) Pesos a Dolares o 2) Dolares a Pesos? \n Ingrese 1 o 2 para avanzar.');

  //* Condicionales para validar si el usuario ingreso 1 o 2 para la conversion
  if (opcion === '1') {
    let pesos = parseFloat(prompt('Ingrese la cantidad de pesos a convertir en usd:'))
    //? Se valida que el usuario ingrese un numero positivo y valido para conversion
    if (isNaN(pesos) || pesos <= 0) {
      alert('Por favor ingrese un valor valido, no seas malo.');
    } else {
      let dolares = pesosADolares(pesos, tasaCambio);
      alert(`El equivalente en dolares de $${formatearDecimal(pesos)} es U$S${formatearDecimal(dolares)}`);
    }
  } else if (opcion === '2') {
    let dolares = parseFloat(prompt('Ingrese la cantidad de dolares a convertir en pesos:'))
    //? Se valida que el usuario ingrese un numero positivo y valido para conversion
    if (isNaN(dolares) || dolares <= 0) {
      alert('Por favor ingrese un valor valido, no seas malo.');
    } else {
      let pesos = dolaresAPesos(dolares, tasaCambio);
      alert(`El equivalente en pesos argentinos de U$S${formatearDecimal(dolares)} es $${formatearDecimal(pesos)}`);
    }
  } else {
    alert('Opcion no valida, por favor ingrese 1 o 2 para avanzar, hace caso.');
  }
}

//! Llamamos a la funcion de convertir
convertir();