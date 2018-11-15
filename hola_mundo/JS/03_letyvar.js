//per vedere se sono collegati fai una alert: alert("ciao");
'use strict'
//diferencia let y var: alcanze de la variable y como actúan en función de los diferentes bloques

//VAR, si aggiorna indipendentemente dal blocco dove si fa l update
var numero = 40; //definisco il valore della variabile
console.log(numero); // valor 40

if(true){
    var numero = 50;
    console.log(numero); //cambio il valore della var in questo blocco di codice, adesso valor 50
}

console.log(numero); //valor 50

//LET
var texto = "Curso JS";
console.log(texto); //Curso JS

if(true){
    let texto = "Curso JS fantastico";
    console.log(texto); //Curso JS fantastico, me lo aggiorna solo dentro questa funzione
}

console.log(texto); //Curso JS