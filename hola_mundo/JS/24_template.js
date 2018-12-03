'use strict'

//text template

var nome = prompt ("introduci il nome");
var cognome = prompt ("introduci il cognome");

//var texto = "Il mio nome 'e: " + nome + " "+ cognome;
//document.write(texto)

//2 opzione

var texto = //bisogna racchiudere h1 e h3 tra comillas invertidas
<h1>Ciao, come stai</h1>
<h3>Il mio nome è: ${nome} ${cognome}</h3>;

document.write(texto)



