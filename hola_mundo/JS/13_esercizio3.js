'use strict'

//introdotti 2 numeri, mostrami nell'HTML i numeri che ci sono tra i due numeri introdotti

var numero1 = parseInt(prompt("Introduci il primo numero", 0));
var numero2 = parseInt(prompt("Introduci il secondo numero", 0));

document.write("<h1>Da " + numero1 + " a " + numero2+" ci sono questi numeri:</h1>")
for (var i = numero1; i <= numero2; i++){
    document.write(i+"<br/>");
};
