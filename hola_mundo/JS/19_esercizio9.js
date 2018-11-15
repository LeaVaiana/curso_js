'strict use'

//funciones: agrupacion reutilizable de un conjunto de istrucciones

//function calculadora(){
 //   return "Hola"
//}
//para invocar una funcion la llamo por nombre, el console.log lo posso avere dentro la funzione
//console.log(calculadora)

//DEFINO LA FUNCIÓN
function calculadora(){
    //DEFINO LAS INSTRUCCIONES
    console.log("Hola");
    console.log("ciao");

    return "hola soy yo"; //opzionale, se lo voglio vedere lo vedo come stringa in consola, quando la invoco, altrimenti non lo vedo
}
//PERCHE STAMPI IN CONSOLA DEVO CHIAMARLA:
calculadora();

//posso anche metterla dentro una variabile
var resultado = calculadora();

console.log(resultado);

//un afuncion puede tb recibir parametros



