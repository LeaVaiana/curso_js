'use strict'

// Calculadora
//pida dos numeros por pantalla
//si metemos uno mal (negativo o NaN) que nos lo vuelva a pedir (lo que hace el while)
// en el body, alert y console il resultado de sumar, restar, multiplicar y dividir
//el resultado es una stringa che con document.write lo trovo nel body

var numero1 = parseInt(prompt("introduce un numero",0));
var numero2 = parseInt(prompt("introduce un numero",0));

while(numero1 < 0 || numero2 <0 || isNaN(numero1)|| isNaN(numero2)){
    numero1 = parseInt(prompt("introduce un numero",0));
    numero2 = parseInt(prompt("introduce un numero",0));
}

var resultado = "la suma es: "+(numero1+numero2)+" <br/>"+
                "la resta es: "+(numero1-numero2)+" <br/>"+
                "la multiplicacion es: "+(numero1*numero2)+" <br/>"+
                "la division es: "+(numero1/numero2)+" <br/>";

document.write(resultado)
//devo fare due var resultado, porque con document.write il salto di linea lo faccio con br, in console il salto di linea lo faccio con \n
var resultadoCMD = "la suma es: "+(numero1+numero2)+" \n"+
                "la resta es: "+(numero1-numero2)+" \n"+
                "la multiplicacion es: "+(numero1*numero2)+" \n"+
                "la division es: "+(numero1/numero2)+" \n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);