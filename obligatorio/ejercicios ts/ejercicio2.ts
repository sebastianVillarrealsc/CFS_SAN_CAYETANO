import * as readlineSync from 'readline-sync';

export function esMultiplo(num1: number, num2: number): boolean {
  const resto = num1 % num2;
  return resto === 0;
}

const numero1 = readlineSync.questionInt('Introduce el primer numero: ');
const numero2 = readlineSync.questionInt('Introduce el segundo numero: ');

if (esMultiplo(numero1, numero2)) {
  console.log(`${numero1} es múltiplo de ${numero2}`);
} else {
  console.log(`${numero1} no es múltiplo de ${numero2}`);
}
