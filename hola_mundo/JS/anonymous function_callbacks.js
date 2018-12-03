'use strict'

//anonymous function: funzione senza nome, si usa per inserire dei parametri come funzione ad un'altra funzione

var film = function(titolo){ //titolo = parametro
    return "Il film è: " + titolo;
}

film("titolo"); //"Il film è: titolo"

//callback: funzione che si esegue dentro un'altra funzione. Non ha nome (anonima) e come parametri ha un'altra funzione

//consideriamo la funzione:

function sumame (num1, num2){
    var sumar = num1 + num2;
    return sumar;
}

console.log(sumame(4,5); //9)

//adesso aggiungo come parametro una funzione callback (sumaYresta e sumaPorDos)
function sumame (num1, num2, sumaYmuestra, sumaPorDos){ //devo passargli i valori della funzione
    var sumar = num1 + num2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

//chiamo la funzione, adesso inserisco le due funzioni callback
sumame(5,7,function(dato){
    console.log("la somma è: " + dato);
},
function(dato){
    console.log("La suma por dos es: " + (dato*2));
}
)