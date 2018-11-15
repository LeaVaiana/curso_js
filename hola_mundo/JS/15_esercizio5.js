'use strict'

//programa que muestre todos los numero divisores de un numero introducidos en un prompt
//creiamo la variabile donde se guarda el numero introducido por el usuario
//un divisore è quando un numero se divide por el divisor como resto nos da zero, numero/ i (il numero che stiamo ricorrendo in quel momento)
var numero = prompt("mete un numero", 1);

for(var i = 1; i <= numero; i ++){
    if(numero%i ==0){
        console.log("Divisor: " + i);
    }
    
}