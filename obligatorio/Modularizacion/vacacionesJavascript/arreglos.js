var miArreglo=["juan",24];
console.log(miArreglo);
var notas=[4,89,21,39];
console.log(notas)
var listaDeProductos=[["camisa",1000],["celular",1500],["zapatos",2300]];
console.log(listaDeProductos)










var segundoArreglo = [["cemento"],["cal"],["arena"],["piedra"],["ladrillos"]]
console.log(segundoArreglo)

var datos=[10,20,30,40];
/* arreglo : [10,20,30,40]
  indices      0  1  2  3  */

  console.log(datos[0]);
  console.log(datos[1]);
  console.log(datos[2]);
  console.log(datos[3]);

  /*acceder a elementos de arreglos multidimensionales*/

  var materialesObra=[["cal","cemento","calcemit"],["ladrillos","viguetas","dinteles"],["caños","llaves"]];
  

  /*
  arreglo     "cal","cemento","calcemit"],["ladrillos","viguetas","dinteles"],["caños","llaves"]];
  indice                     0                             1                             2        
  indice interno 0      1          2            0           1           2          0       1
  */
  console.log(materialesObra[0]);
  console.log(materialesObra[1]);
  console.log(materialesObra[2]);
  console.log(materialesObra[1][2]);
/* push metodos-modificar y agregar elementos a un arreglo*/

var estaciones=["invierno","otoño","primavera"];
estaciones.push("verano");
console.log(estaciones)

var estacionesDelAño=["invierno","otoño","primavera","verano"];
estacionesDelAño.pop();
console.log(estacionesDelAño);
/*el metodo pop aparte de quitar el ultimo elemento de un arreglo lo puede 
retornar en una variable*/
var estacion = estacionesDelAño.pop();
console.log(estacion);
/* .shift permite remover el primer elemento de un arreglo*/

var meses=[["enero"],["febrero"],["marzo"],["abril"]];
meses.shift();
var mes=meses.shift();
console.log(meses);
console.log(mes);