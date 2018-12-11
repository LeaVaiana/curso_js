'use strict'

window.addEventListener('load', function(){
//Timers
var time = setTimeout(function(){ //callback function con parametri funzione e tempo
    
    var title = document.querySelector("h1");//seleziono il title h1
    if(title.style.fontSize == "50px"){//se la sua dimensione è di 50 convertilo a 20
        title.style.fontsize = "20px";
    }else{                              //altrimenti rimettila a 50px
        title.style.fontSize = "50px";
    }
}, 1000); //Ogni 3 secondi
});