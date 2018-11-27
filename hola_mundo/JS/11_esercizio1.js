'use strict'

//Introduci 2 numeri e determina quale è maggiore, minore o se sono uguali. 
//Se i numeri inseriti sono <=0, vogliamo che il programma richieda di inserirli
//(parseInt converte il valore stringa inserito nel prompt in numero)

var numero1 = parseInt(prompt("Introduci il primo numero", 0)); 
var numero2 = parseInt(prompt("Introduci il secondo numero", 0));visu

//console.log(numero1, numero2); si no hubiera escrito el plus
while(numero1 <=0 || numero2 <=0|| isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduci il primo numero", 0));
    numero2 = parseInt(prompt("Introduci il secondo numero", 0));
}
if(numero1 == numero2){
    alert("I numeri sono uguali");
}else if(numero1 > numero2){
    alert("Il numero maggiore è " + numero1);
    alert("Il numero minore è " + numero2);
}else{
    alert("Il numero maggiore è " + numero2);
}
