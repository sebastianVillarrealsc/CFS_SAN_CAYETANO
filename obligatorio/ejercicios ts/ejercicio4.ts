import * as readlineSync from 'readline-sync';

export function sumaEntreNumeros(): number {
  const num1: number = readlineSync.questionInt('Ingrese el primer número: ');
  const num2: number = readlineSync.questionInt('Ingrese el segundo número: ');

  let sum: number = 0;
  const start: number = Math.min(num1, num2);
  const end: number = Math.max(num1, num2);

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

console.log(`La suma de los números entre los dos números ingresados es: ${sumaEntreNumeros()}`);
