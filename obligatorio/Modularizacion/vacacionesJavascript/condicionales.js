/*para escribir un condicional se usa la sentencia "if"
que significa en español "si"*/
if (true){
    console.log("la condicion es verdadera ");
}
var x =5;
if(x>2){
    console.log("x es mayor que dos ");
}
var estacion ="invierno";
if (estacion=="invierno"){
    console.log("si me encanta el invierno ");

}
/* clausula "else" significa que sino es algo que haga otra cosa*/
if(false){
    console.log("la condicion es verdadera");
}else {
    console.log("la condicion es false.");
}
var estaciones = "verano";
if (estaciones == "primavera" ){
    console.log("que linda la primavera ");
}else{
    console.log("me gustaria que llegue la primavera");
}
/*clausula "else if"permite manejar y verificar varias condiciones
alternativas y decidir que pasa si algunas de ellas es verdadera*/

/*function clasificarValor(valor){
    if (valor % 2 == 0) {
        console.log("divisible entre dos");

    }else if (valor % 3==0){
        console.log("divisible entre tres");
    }else{
        console.log("no es divisible entre los numeros ");
    }
}
clasificarValor(5);*/

/*condicionales de orden logico */
/*encadenar funciones elseif*/
function interpretarimc(indiceDeMasaCorporal){
    if (indiceDeMasaCorporal< 18.5){
        console.log("bajo peso");

    } else if (indiceDeMasaCorporal<= 24.9){
        console.log("peso normal")
    } else if (indiceDeMasaCorporal<=29.9){
        console.log("sobrepeso")
    }else{
        console.log("exeso de peso");
    }
}
interpretarimc(18.6);

function puntajeDeGolf(par,golpes){
    if(golpes ==1){
        return "hole-in-one";
    }else if (golpes <=par-2){
        return "eagle"
    }else if (golpes == par-1){
        return "birdie";
    }else if (golpes == par){
        return "par;"
    }else if (golpes == par + 1){
        return "bogey";
    }else if (golpes == par + 2){
        return "doble bogey";
    }else if (golpes >= par +3 ){
        return "go home";
    }
}
console.log (puntajeDeGolf(4,4));
/*SENTENCIAS Switch*/
function clasificarValor (valor){
    var respuesta;
    switch (valor){
        case 1 :
            repuesta = "alpha";
            break;
            case 2:
                respuesta = "beta";
                break;
                case 3:
                    respuesta="gamma";
                    break;
                    case 4:
                        repuesta="epsilon";
                        break;


    }
    return respuesta;
}
clasificarValor(1);

/*sentencias switch opcion predeterminada*/
function seleccionarIdioma(valor){
var idioma;
switch (valor) {
case 1 :
    idioma = "español";
    break;
    case 2:
        idioma = "frances";
        break;
        case 3:
            idioma = "italiano";
            break;
            default:
                idioma="ingles";
            break;
}
return idioma;
}
console.log(seleccionarIdioma(5));
/*sentencias switch MULTIPLES CASOSO*/
function clasificarVulumen(valor){
    var volumen;
    switch (valor){
        case 1:
            volumen="bajo";
            break;
            case 2:
                case 3:
                    volumen="intermedio";
                    break;
                    case 4:
                        case 5:
                            case 6:
                                volumen="alto";
                                break;

    }
    return volumen
}
console.log(clasificarVulumen(4))
/*REEMPLAZAR CONDICIONALES POR LA SENTENCIA SWICHT*/
/*retornar valores booleanos*/
function esMenorQue(a,b){
return a<b;

}
console.log(esMenorQue(4,8))
/*PATRON DE RETORNO ANTICIPADO*/
function calcularRaizCuadrada(num){
 if(num<0){
    return undefined;
 }   
 return Math.sqrt(num);
}
console.log(calcularRaizCuadrada(-3))

/* en el juego de casino blackjac el jugador puede sacarle 
ventaja a la casa llevando un registro del numero relativo
de cartas altas y bajas que quedan en la baraja.
esto se llama conteo de cartas
tener mas cartas altas en la baraja es una ventaja para el jugador.
se le asigna un aor a cada carta de acuerdo a la siguiente tabla 
cuando el conteo es positivo el jugador deberia apostar alto
cuando el conteo es 0 onegativo deberia apostar bajo.

cambio del conteo                   cartas
+1                            2,3,4,5,6
0                             7,8,9
-1                            10,"J","Q","K","A"

nuestra meta es definir una funcion para contar cartas.
La funcion debe tomar un parametro carta que puede ser 
un numero o una cadena de caracteres y luego aumentar o reducir el valor de la variable 
global conteo 
de acuerdo al valor de las cartas (observa tabla )
la funcion debera retornar una cadena de caracteres con el 
conteo actual y la cadena:
"apostar"si el conteo es positivo
"Esperar"si el conteo es negativo
el conteo actual y la desicion del jugador apostar o esperar
deben estar separados por un espacio */

var conteo = 0;

function contarCartas (carta){
    var desicion;
    switch(carta){
        case 2:
            case 3:
                case 4:
                    case 5:
                        case 6:
                            conteo++;
                            break;
                            case 10:
                                case "j":
                                    case "q":
                                        case "k":
                                            case "a":
                                                conteo--;
                                                break;
    }
    if (conteo>0){
        desicion = "apostar";
    }else{
        desicion = "esperar";
    }
    return conteo + " " + desicion;

}
console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(7));
console.log(contarCartas("k"))
console.log(contarCartas("a"));