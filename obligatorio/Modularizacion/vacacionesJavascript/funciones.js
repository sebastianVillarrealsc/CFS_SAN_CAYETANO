function mostrarMensaje () {
    console.log("hola mundo");
}
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();

function sumar(a,b) {
suma = a+b;
console.log("el resultado de a + b es :" + suma)
}
sumar (5,3);
sumar (10,6);
sumar (87,19);
sumar (8,8);
sumar (8,12);
function concatenarTresCadenas (cadena1, cadena2, cadena3){
console.log(cadena1 + " " + cadena2 +" " +cadena3);
}
concatenarTresCadenas("estoy","aprendiendo","a programar");
/*NO TODAS LAS VARIABLES SE PUEDEN USAR EN LAS DISTINTAS PARTES DEL PROGRAMA
HAY VARIABLES LOCALES Y GLOBALES*/
/*VARIABLES GLOBALES*/
var mivariableGlobal=5;
console.log(mivariableGlobal);
function miFuncion(){
    console.log(mivariableGlobal);
}
/*variables locales*/
function miFuncion(){
    var miVariableLocal=4;
    console.log(miVariableLocal)
}
/*retornar valor*/
function sumar (a,b){
    return a + b;

}
console.log(sumar(5,3));
/*omitir valor noretornarlo*/
function restar (a,b){
console.log(a-b);

}
console.log(restar(5-3));
/*ASIGNAR UN VALOR REORNADO POR UNA FUNCION A UNA VARIABLE */

function sumas (a,b){
    return a+b;
}
 var resultado = sumas(5,3);
console.log(resultado)

function crearCadenasConMetas(lenguajeDeProgramacion){
    return "mi meta es aprender " + lenguajeDeProgramacion;
}
var miMeta = crearCadenasConMetas("javascript");
console.log(miMeta);

/*estructura de datos cola*/
function proximoEnLaFila(arreglo,elemento){
    arreglo.push(elemento);
    return arreglo.shift();

}
var miArreglo =[1,2,3,4,5,6]
console.log("antes" + JSON.stringify (miArreglo));
console.log(proximoEnLaFila(miArreglo,7));
console.log("despues" + JSON.stringify (miArreglo));
