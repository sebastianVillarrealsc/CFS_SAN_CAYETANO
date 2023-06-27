import readlineSync from 'readline-sync';

export function verificarClave() {
  const clave = readlineSync.question('Ingrese la clave: ');

  if (clave === 'eureka') {
    console.log('¡La clave es correcta!');

  } else {
    console.log('Lo siento, la clave es incorrecta.');
  }
}

