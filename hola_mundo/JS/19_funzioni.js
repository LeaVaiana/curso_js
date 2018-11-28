'use strict'

//Funzioni dentro funzioni, riscrivo la funzione dell'esercizio anteriore estrapolando il corpo delle funzioni fuori dalla funzione principale.

function byConsole (num1, num2){
    console.log("somma "+ (num1+num2));
    console.log("sottrazione "+ (num1-num2));
    console.log("moltiplicazione "+ (num1*num2));
    console.log("divisione "+ (num1/num2));
    console.log("************");
}

function byDisplay (num1, num2){
    document.write("somma "+ (num1+num2)+"</br>");
    document.write("sottrazione "+ (num1-num2)+"</br>");
    document.write("moltiplicazione "+ (num1*num2)+"</br>");
    document.write("divisione "+ (num1/num2)+"</br>");
    document.write("************");
}


//invoco i metodi precedenti dentro la funzione principale
function calcolatrice(num1, num2, mostrar = false){
    //conjunto de instrucciones a ejecturar
    if(mostrar == false){
        byConsole(num1, num2);
    }else{
        byDisplay (num1, num2);
    }
    return true;
}
//invoco in questo modo
calcolatrice(1,4,false);//false è opzionale, perche mi stamperebbe in consola cmq la prima parte del codice
calcolatrice(1,4,true);//se voglio che mi stampi in html devo mettere true, per questo ho aggiunto anche il br
