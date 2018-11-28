'strict use'

//FUNZIONI: gruppo di blocchi di codice riutilizzabili

//function nomefunzione (){
//   codice
//}


//definisco la funzione
function test(){
    //definisco le istruzioni
    console.log("Blocco di codice1");
    console.log("Blocco di codice2");

    return "Posso ritornare in risultato";
}

//Chiamo la funzione, opz 1:
test();

//opz 2: posso metterla dentro una variabile
var risultato = test();

console.log(risultato);
