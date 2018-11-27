'use strict'

// Mostrare la somma e la media dei numeri inseriti dallo user. Definiamo quindi le variabili somma e contatore (media = somma/contatore)
// Se lo user introduce un NaN, considerarlo come zero. 
// Se lo user inserisce un numero negativo si interrompe il loop e ci dará il risultato di somma e media


var sum = 0;
var contatore = 0;

do{
    var numero = parseInt(prompt("Introduci un numero fino a quando non ne introdurrai uno negativo", 0));

    if(isNaN(numero)){
        numero = 0;

    }else if(numero >= 0){
        sum = sum + numero; // suma += numero

        contatore++;
    }
    console.log(sum);
    console.log(contatore);


}while(numero >=0) //il loop continua fino a quando non inseriamo un numero negativo

alert("La somma di tutti i numeri è " + suma)
alert("La media è " + (suma/contador));
