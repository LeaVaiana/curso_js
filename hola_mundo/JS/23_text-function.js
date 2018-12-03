'strict use'

//METODI PER FARE RICERCA IN CATENA DI TESTO

var numero = 444;
var texto1 = "Welcome";
var texto2 = "BENVENUTO";
var texto3 = "questa è una stringa piú lunga, di nuovo stringa"

//convertire numero in stringa con il metodo .toString()
numero.toString();

//lo metto dentro la variabile e chiedo con il typeof di che tipo di dato si tratta
var dato = numero.toString();

console.log(typeof dato);

//convertire testo in minuscola/mauyscola

dato = texto1.toUpperCase();
console.log(dato);

dato = texto2.toLowerCase();
console.log(dato);

//calcolare lunghezza di testo o array

var nombre = "Lea";
console.log(nombre.length) //3

nombre = ["Federico", "Miriam"]
console.log(nombre.length)//2

//concatenare (unire testi)
var fullText = texto1 + texto2;
console.log(fullText);

//per concatenare qualsiasi cosa a un texto (texto1)
var fullText = texto1.concat(" " + texto2);
console.log(fullText);

//indexOf
var ricerca = texto1.indexOf("l");
console.log(ricerca); // indice l della parola Welcome

var ricerca = texto3.indexOf("stringa");
console.log(ricerca);//13 a partire dall indice 13 mi trova la prima coincidenza

//lastindexOf, mi trova l ultima apparizione della stessa parola
var ricerca = texto3.lastIndexOf("stringa");
console.log(ricerca);

//search, a che partire da che carattere c'e' la parola (se -1 la parola non esiste)

//match, mi ritorna una collezione di risultati
var ricerca = texto3.match("stringa");
console.log(ricerca);
//con match e g, mi trova tutte le coincidenze
var ricerca = texto3.match(/stringa/g);
console.log(ricerca);

//substr ( mi ritorna il testo (numero di caratteri definiti nel secondo numero) a partire dal carattere indicato (primo numero)
var ricerca = texto3.substr(1,3);
console.log(ricerca); //ues

//per avere una lettera concreta, indico la posizione con charAt
var ricerca = texto3.charAt(1);
console.log(ricerca); //u

//startsWith (mi cerca un testo, e mi ritorna true (se l ha trovato) o false )
var ricerca = texto3.startsWith("questa");
console.log(ricerca); //true perche il texto 3 inizia per questa

var ricerca = texto3.endsWith("questa");
console.log(ricerca);//false perche la stringa non finisce con questa

//includes per cercare una parola
var ricerca = texto3.includes("lunga");
console.log(ricerca); //true perche la stringa contiene la parola lunga

