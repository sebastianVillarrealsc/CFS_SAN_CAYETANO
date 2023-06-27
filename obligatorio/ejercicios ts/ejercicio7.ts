import * as readlineSync from "readline-sync";


// Pedimos al usuario que introduzca el número de veces que quiere lanzar el dado
const numLanzamientos = readlineSync.questionInt('Introduce el número de veces que quieres lanzar el dado: ');

let numSeis = 0;

// Realizamos los lanzamientos y contamos cuántas veces sale el número 6
for (let i = 0; i < numLanzamientos; i++) {
 export const resultado = Math.floor(Math.random() * 6) + 1;
  if (resultado === 6) {
    numSeis++;
  }
}

// Mostramos el resultado al usuario
console.log(`En ${numLanzamientos} lanzamientos, el número 6 ha salido ${numSeis} veces.`);
