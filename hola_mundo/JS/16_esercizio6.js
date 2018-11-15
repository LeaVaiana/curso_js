'use strict'
//hacer un programa que nos diga si un numero es par o impar
//tiene que tener ventana prompt
//si numero non valido que nos pida de nuevo el numero(parseInt)
//while is NaN, se non pe un numero il loop continua e continuerá a salirme il prompt
//con el if indichiamo se è pari o dispari
//faccio un solo prompt per una sola variabile
var number = parseInt(prompt("introduce un numero", 0));

while(isNaN(number)){
    number = parseInt(prompt("introduce un numero",0));
}
if(number % 2 == 0){
    alert("El numero es par");
}else{
    alert("El numero es impar");
}
