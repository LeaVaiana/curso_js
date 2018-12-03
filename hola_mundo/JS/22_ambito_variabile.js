'use strict'

function helloWorld(testo){
    var hello_world = "Testo dentro la funzione" //variabile definita solo dentro la funzione, quindi mi daremmo not defined

    console.log(testo);
    console.log(numero);
    console.log(hello_world);
}

var testo = "Sono una variabile globale";
var numero = 12;
helloWorld(testo);
console.log(hello_world);//il consolelog della variabile definita dentro la funzione mi darebbe un errore

//convertire numero in stringa

console.log(numero.toString()); //12 stringa, per verificarlo:
console.log(typeof numero.toString());//string
console.log(typeof numero);//string

