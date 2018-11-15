'use strict'
/*
//funciones y parametros
//1) defino la funcion
//2 defino las instrucciones
//invo o llamo la funcion

function calculadora(numero1, numero2){
    console.log("suma "+ (numero1+numero2));
    console.log("resta "+ (numero1-numero2));
    console.log("Multiplicacion "+ (numero1*numero2));
    console.log("Division "+ (numero1/numero2));
    console.log("************");

    //return("ciao!!!")

}

//calculadora(3,3) // introduco due numeri a scelta

//posso inserire i parametri dentro una for loop

for(var i = 1; i<=10; i++){
    console.log(i)//per vedere a che iterazione sono arrivata
    calculadora(i,8);//parametro i e numero a scelta
}


//parametri opzionali
//quando invoco la funzione dovrei inserirgli i parametri altrimenti mi darebbe errore
//altrimenti la funzionalitá di parametri opzionali (esempio mostrar)*/

function calculadora(numero1, numero2, mostrar = false){
    //conjunto de instrucciones a ejecturar
    if(mostrar == false){
        console.log("suma "+ (numero1+numero2));
        console.log("resta "+ (numero1-numero2));
        console.log("Multiplicacion "+ (numero1*numero2));
        console.log("Division "+ (numero1/numero2));
        console.log("************");
    }else{
        document.write("suma "+ (numero1+numero2)+"</br>");
        document.write("resta "+ (numero1-numero2)+"</br>");
        document.write("Multiplicacion "+ (numero1*numero2)+"</br>");
        document.write("Division "+ (numero1/numero2)+"</br>"CP);
        document.write("************");

    }
}
//invoco in questo modo
calculadora(1,4,false);//false è opzionale, perche mi stamperebbe in consola cmq la prima parte del codice
calculadora(1,4,true);//se voglio che mi stampi in html devo mettere true, per questo ho aggiunto anche il br

