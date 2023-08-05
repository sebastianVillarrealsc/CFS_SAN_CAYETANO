var miCuaderno={
    "color": "verde",
    "categoria": 3,
    "numero de paginas": 200,
    "numeroo de hojas": 100
};
console.log(miCuaderno["numero de paginas"]);

/*aceder a propiedades de un objeto usando una variable*/

var resultados ={
    1: "nora256",
    2: "gino577",
    3: "estef543",
    4: "kiara566",
}
var posisicion = 4;
console.log(resultados[posisicion]);
/*ACTUALIZAR PROPIEDADES*/
var mochila ={
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["agua","cuaderno"]
};

console.log(mochila.color);
mochila.color="verde";
console.log(mochila.color);
console.log(mochila.contenido);
mochila.contenido.push("lapiz");
console.log(mochila.contenido);

/* AGREGAR PROPIEDADES*/
var curso = {
    "titulo": "aprende javascript dede cero",
    "idioma": "español",
    "duracion": "30",
}
curso.vistas= 344500;
console.log(curso.vistas);
curso.arancel= "gratis";
console.log(curso.arancel);

/*eliminar propiedades --PALABRA CLAVE DELETE*/
var curso = {
    "titulo": "aprende javascript dede cero",
    "idioma": "español",
    "duracion": "30",
}
console.log(curso.duracion);
delete curso.duracion;
console.log(curso.duracion);

/*objetos para busquedas (se puede reemplazar una estructura switch
    creando un objeto*/

 /*   function buscarElementoQuimico(simbolo){
        var elementoQuimico = "";
        switch (simbolo){
            case "AL":
                elementoQuimico = "ALUMINIO";
                break;
                case "S":
                elementoQuimico = "AZUFRE";
                break;
                case "CL":
                elementoQuimico = "CLORO";
                break;
                case "HE":
                elementoQuimico = "HELIO";
                break;
                case "B":
                elementoQuimico = "BORO";
                break;
        } 
        return elementoQuimico;
    }
    console.log(buscarElementoQuimico("S"));*/
function buscarElementoQuimico(simbolo){
   var simbolosQuimicos ={
    "Al": "Aluminio",
    "S" : "Azufre",
    "Cl": "Cloro",
    "B" : "Boro",
    "Li": "Litio"
   } 
   return simbolosQuimicos[simbolo];


}
console.log(buscarElementoQuimico("Al"));
console.log(buscarElementoQuimico("S"));
console.log(buscarElementoQuimico("Cl"));
console.log(buscarElementoQuimico("He"));
console.log(buscarElementoQuimico("B"));
console.log(buscarElementoQuimico("Li"));


/* VERIFICAR PROPIEDADES*/
var miAuto ={
    "color": "verde",
    "categoria": 3,
    "precio": 5
}
console.log(miAuto.hasOwnProperty("color"));

function verificarPropiedad(obj,propiedades) {
    if(obj.hasOwnProperty(propiedades)){
        return "propiedad :" + obj[propiedades]  
      }else{
        return "el bjeto no tiene esta propiedad ";
      }
}
var miAuto ={
    "color": "verde",
    "categoria": 3,
    "precio": 5
}
console.log(verificarPropiedad(miAuto,"color"));

/* OBJETOS COMPLEJOS*/

var ordenesDePizza =[
    {
      "tipo": "margarita",
      "tamaño": "individual",
      "precio": 5.67,
    "toppings": [
        "extra queso",
        "champiñones",
        "piña"
    ] ,
    "para llevar" :true
 },{
    "tipo": "cuatro quesos",
    "tamaño": "amiliar",
    "precio": 18.34,
  "toppings": [
      "extra queso",
      "pimenton"
  ],
  "para llevar" :false
 },
 { "tipo": "napolitana",
 "tamaño": "individual",
 "precio": 6.78,
"toppings": [],

"para llevar" : true

 }
]
console.log(ordenesDePizza[0].tipo);

/*OBJETOS ANIDADOS*/

var miReceta = {
    "descripcion": "mi postre favorito",
    "costo" : 15.6,
    "ingredientes": {
        "masa": {
            "harina": "100 grs",
            "sal": "1 cucharadita",
            "agua": "una taza",
        },
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharadas",
            "mantequilla": "200 grs",
        }
    }
}

console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes.masa.sal);
console.log(miReceta.ingredientes.masa.agua);

/*ARREGLOS ANIDADOS*/
var misPlantas = [
    {
        tipo : "flores",
        lista:[
            "rosas",
            "tulipanes",
            "dientes de leon"
        ]
    },
    {
        tipo : "arboles",
        lista :[
            "abeto",
            "pino",
            "abedul"
        ]
    }
];
var primeraFlor = misPlantas[0].lista[0];
console.log(primeraFlor);
var terceraFlor = misPlantas[0].lista[2];
console.log(terceraFlor);

/* MINI PROYECTO REPASO

tenemos un objeto que representa parte de una colleccion de discos 
de albunes musicales.
cada album tiene un numero de identificacion unico (id)
asociado a otras propiedades
no todos los albumes tienen la informacion completa .*/

var coleccionDeDiscos = {
7853 : {
    tituloDelAlbum: "bee gees greats",
    artista: "bee geees",
    canciones: ["stayin alive"]
},
5439:{
    tituloDelAlbum: "abba gold"
}
};
/*
deine una propiedad actualizarDiscos que tome los siguientes parametros
-discos(el objeto que representa la coleccion de discos )
-id
-propidad (artistas o canciones)
_valor 
tu meta es completar la uncion implementando las siguientes reglas 
para modificar el objeto pasado a la funcion 
-si "valor" es una cadena vacia , entonces elimina esa propiedad del album 
correpondiente
-si "propiedad"es iigual a la cadena de caracteres " canciones"pero el album
no tiene una propiedad llamada "canciones", crea un arreglo vacio y agrega
un "valor" a ese arreglo.
-si "propiedad" es igual a la cadena de caracteres "canciones" y "valor"
no es una cadena vacia, agrega "valor" al final del arreglo de canciones
del album correspondiente.
-si "valor" no es una cadena vacia y "propiedad" no es igual a "canciones"
asigna el valor del parametro "valor" a la propiedad.
si la propiedad no existe debes crearla y asignar este valor. */


function actualizarDiscos (discos,id,propiedad,valor){
    if (valor === " "){
        delete discos[id][propiedad];
    }else if (propiedad === "canciones"){
        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    }else{
        discos[id][propiedad] = (valor);
    }
}
console.log(coleccionDeDiscos[5439].canciones);
actualizarDiscos(coleccionDeDiscos, 5439,"canciones","mamma mia ");
console.log(coleccionDeDiscos[5439].canciones);
