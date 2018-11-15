'use strict'

// utilizazndo un bucle, mostrar la suma y la media de los numeros introducidos (resultado de la suma entre numero de elemento que se han sumado(intentos)) ovvero suma/contador
//hasta introducir un numero negativo y en este caso mostrar el resultado, se l usuario non mette un numero (is NaN) lo mettiamo uguale a zero
// con il parseint trasformiamo la stringa in numero, se mettiamo un numero minore di zero, ci mostra il risultato e si fa un break del loop
//while(numero >=0, solo in questo caso va a continuare a ejecutarse el loop
//usiamo Do WHILE

var suma = 0;
var contador = 0; //in console.log mi stampa l iterazione

do{
    var numero = parseInt(prompt("introduce numeros hasta que metas uno negativo", 0));

    if(isNaN(numero)){
        numero = 0;

    }else if(numero >= 0){
        suma = suma + numero; // suma += numero

        contador++;
    }
    console.log(suma);
    console.log(contador);


}while(numero >=0)

alert("la suma de todos los numeros es " + suma)
alert("la media es " + (suma/contador));