'use strict'

// Mostrami in console tutti i numeri dispari tra i due numeri introdotti dallo user

var num1 = parseInt(prompt("Introduci il primo numero", 0));
var num2 = parseInt(prompt("Introduci il secondo numero", 0));

while(num1 < num2){
    num1++;
    if(numero1%2 !=0){
        console.log("Il " +num1+" è dispari");
    }
}
