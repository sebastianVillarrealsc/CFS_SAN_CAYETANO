import * as readlineSync from "readline-sync";

export function calcularPotencia(): void {
  const base: number = parseFloat(readlineSync.question("Ingrese la base: "));
  const exponente: number = parseInt(readlineSync.question("Ingrese el exponente (debe ser mayor o igual a cero): "));

  if (isNaN(base) || isNaN(exponente) || exponente < 0) {
    console.log("Error: Exponente debe ser mayor o igual a cero.");
  } else {
    const potencia: number = Math.pow(base, exponente);
    console.log(`${base} elevado a la potencia de ${exponente} es ${potencia}`);
  }
}
