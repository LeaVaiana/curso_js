'use strict'

//Mouse event, mettiamo il valore dentro una variabile e selezioniamo l'evento con il querySelector e l'ID
var button = document.querySelector("#button"); //seleziono il primo elemento con l'id button

function changeColor (){ //scrivo una funzione che cambi il colore del bottone
    var bg = button.style.background;

    if (bg == "green"){
        button.style.background = "red";
    }else{
        button.style.background = "green";
    }    
}
//Click
button.addEventListener("click", function(){ //diamo la funzionalitá al bottone, potevamo anche usare l'onclick="changeColor" nel button dell'HTML
    changeColor();
});

//Mouse over (in combinazione con il mouse out)
button.addEventListener("mouseover", function(){
    button.style.background = "purple";
});
// Mouse out
button.addEventListener("mouseout", function(){
    button.style.background = "yellow";
});
