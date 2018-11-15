'use strict'

//(qui metto la condizione){qui metto il blocco di codice}
//(fino a quando si rispetti questa condizione){esegui questo codice}

var year = 2018;

while(year <=2051){
    console.log("siamo nell'anno "+year);

    year++; //attenzione se non metto questo sará un loop infinito
}

//operador de decremento
year --

//do while, ci permette prima eseguire un bloque de instrucción y despues evaluar la condicion
//se year è diverso da 20, eseguimo questo alert

var years = 30;

do{
    alert("Solo cuando sea diferente a 20")
    years --;
}while(years > 25)