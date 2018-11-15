'use strict'

//hacer un programma que muestre todos los numeros entre dos numeros introducidos por el usuario
//quindi dobbiamo fare due variabili con il prompt
//per mostrare tutti i numeri tra i due numeri introdotti lo faciamo con un for loop
// la variabile que inizializa el for sería el numero 1, var i = numero 1, fino a que i sia minore del secondo numero introdotto
// la funzione document.write mi permette di scrivere come se fosse un html, invece il console.log, scrive in console
// il primo document.write mi scrive nello schermo, il secondo esegue la funzione

var numero1 = parseInt(prompt("introduce el primer numero", 0));
var numero2 = parseInt(prompt("introduce el segundo numero", 0));

document.write("<h1>De " + numero1 + " a " + numero2+" están estos numeros:</h1>")
for (var i = numero1; i <= numero2; i++){
    document.write(i+"<br/>");
};
