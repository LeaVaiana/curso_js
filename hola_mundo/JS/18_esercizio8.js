'use strict'

// Calcolatrice: inseriti due numeri, calcolarne la somma, differenza, moltiplicazione e divisione.
// Mostrare i risultati nel body del documento HTML (document.write) e in console e come alert.

var num1 = parseInt(prompt("Introduci un numero",0));
var num2 = parseInt(prompt("Introduci un numero",0));

while(num1 < 0 || num2 <0 || isNaN(num1)|| isNaN(num2)){
    num1 = parseInt(prompt("Introduci un numero",0));
    num2 = parseInt(prompt("Introduci un numero",0));
}

var risultato = "la somma è: "+(num1+num2)+" <br/>"+
                "la sottrazione è: "+(num1-num2)+" <br/>"+
                "la moltiplicazione è: "+(num1*num2)+" <br/>"+
                "la divisione è: "+(num1/num2)+" <br/>";


var risultatoCMD =  "la somma è: "+(num1+num2)+" \n"+
                    "la sottrazione è: "+(num1-num2)+" \n"+
                    "la moltiplicazione è: "+(num1*num2)+" \n"+
                    "la divisione è: "+(num1/num2)+" \n";

document.write(risultato);
alert(risultatoCMD);
console.log(risultatoCMD);
