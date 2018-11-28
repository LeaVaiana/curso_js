'use strict'
*
//Funzioni contenenti parametri
//1) Definisco la funzione
//2) Definisco le istruzioni
// Chiamo la funzione */

function calcolatrice(num1, num2){
    console.log("Somma "+ (num1+num2));
    console.log("Sottrazione "+ (num1-num2));
    console.log("Moltiplicazione "+ (num1*num2));
    console.log("Divisione "+ (num1/num2));
    console.log("************");

    return("ciao!!!")
}

//quando invoco la funzione, perchè esegua le istruzioni è necessario inserire due parametri, esempio (2,3)
calcolatrice (2,3)



//Posso inserire i parametri (variabile i e numero scelto) dentro un for loop

for(var i = 1; i<=10; i++){
    console.log(i) //per vedere a che iterazione sono arrivata
    calculadora(i,8);
}


//Posso scegliere se stampare i risultati in console o in html (3 parametro false o true)

function calcolatrice(num1, num2, mostrare = false){
    //conjunto de instrucciones a ejecturar
    if(mostrare == false){
        console.log("somma "+ (num1+num2));
        console.log("sottrazione "+ (num1-num2));
        console.log("moltiplicazione "+ (num1*num2));
        console.log("divisione "+ (num1/num2));
        console.log("************");
    }else{
        document.write("somma "+ (num1+num2)+"</br>");
        document.write("sottrazione "+ (num1-num2)+"</br>");
        document.write("moltiplicazione "+ (num1*num2)+"</br>");
        document.write("divisione "+ (num1/num2)+"</br>");
        document.write("************");

    }
}

calcolatrice(1,4,false);//false per stampare in console
calcolatrice(1,4,true);//se voglio che mi stampi anche nell'html

