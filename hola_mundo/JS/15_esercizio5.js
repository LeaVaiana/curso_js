'use strict'
//Mostrami in consola tutti i numeri divisori del numero introdotto

var num = parseInt(prompt("Introduci un numeri",1));

for(var i = 1; i <= num; i ++){
    if(num%i ==0){
        console.log("Divisore: " + i);
    }
    
}
