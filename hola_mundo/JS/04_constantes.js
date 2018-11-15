'use strict'

//constante: come una variabile ma il suo valore non puó cambiare, esempio la variabile web contiene l indirizzo della mia web, ma l ip non puo cambiare
var web = "leavaianaweb.es";
const ip= "192.99.0.12";

console.log(web, ip);

//posso cambiare il valore della variabile, ma della costante mi darebbe errore

var web = "lea&federicoweb.es";
const ip= "193.99.0.12";

console.log(web, ip);