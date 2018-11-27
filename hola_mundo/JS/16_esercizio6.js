'use strict'
// Mostrami se il numero introdotto dallo user è pari o dispari. Se lo user introduce un NaN richiedi di inserire un numero

var num = parseInt(prompt("Introduci un numero", 0));

while(isNaN(num)){
    num = parseInt(prompt("Introduci un numero",0));
}
if(num % 2 == 0){
    alert("Il numero è pari");
}else{
    alert("Il numero è dispari");
}
