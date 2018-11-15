'use strict' //MODO ESTRICTO, USE STRICT, fa che la nostra programmazione sia piú corretta, evita le malepratiche, si mette all inizio del file
//Variables
// es un contenedor de información
/* definisco una variabile, scelgo il nome e se il suo CONTENUTO è una stringa va tra virgolette*/
var pais = "España";
//se in console, faccio console.log(pais); mi ritorna il contenuto della variabile
//se definisco una nuova variabile e poi le chiamo entrambe in console mi ritorna il contenuto delle due
var continente = "Europa";
var antiguedad = 2019;
var pais_y_continente = pais+' '+continente;


console.log(pais, continente, antiguedad);
alert (pais_y_continente);

//update di un dato

antiguedad = 2050;
pais = "Italia";
console.log(antiguedad);
console.log(pais);


//si sono aggiornati solo i valori di console antiguedad y pais, ma ad esempio l alert, rimane con i dati anteriori

// posso anche definire una variabile ma assegnare il valore dopo:
var pais;
pais = "España";


//secondo i nuovi standar typescript una variabile puó anche definirsi con LET, 
//su alcanze è dentro il blocco dove si sta usando, per var è una variabile globale e non importa l ambito del bloque
let prueba = "typescript"
console.log(prueba);