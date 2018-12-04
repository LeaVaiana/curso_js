'use strict'

//Arrays: collezione di dati, molti valori dentro un array

var nomi = ["Lea", "Federico", "Miriam", 13, true];//qualsiasi tipo di dato
// posso definire un array come un oggetto
var lingue = new Array("italiano","spagnolo","francese")

console.log(nomi);
console.log(lingue);

//per accedere a un elemento dell'array, mediante l'indice

console.log(nomi[0]);//Lea
console.log(nomi.length);//5

// nella var elemento conserviamo il valore che introduce lo user
//    var i = parseInt(prompt("Che elemento dell'array vuoi?", 0))
//    alert (nomi[i])


//per evitare che lo user introduca un indice che non esiste, aggiungiamo un if
var i = parseInt(prompt("Che elemento dell'array vuoi?", 0))
if(i>=nomi.length){
    alert("Introduci un indice minore di " + nomi.length)
}else{
    alert("hai selezionato " + nomi[i]);
}

//se vogliamo mostrare tutti gli elementi dell'array nella web, soluzione non pratica
//document.write("<h1>Lingue</h1>")
//document.write(lingue[0] + " ");
//document.write(lingue[1] + " ");
//document.write(lingue[2] + " ");

//soluzione pratica con un loop (per ottenere una lista aggiungo i tag ul e li)
/*document.write("<h1>Lingue</h1>");

document.write("<ul>");
for(var i =0; i<lingue.length; i++){
    document.write("<li>" + lingue[i] + "</li>");
}
document.write("</ul>");*/


//RICORRERE UN ARRAY

//soluzione con il metodo for each (non itera, scorre lungo tutto l'array)

lingue.forEach((elemento)=>{ //funzione di callback che riceverá elemento
    document.write("<li>" + elemento + "</li>");
});
//seconda opzione per ricorrere arrays con for in
document.write("<ul>")
for (let i in lingue){ //for in
    document.write("<li>" + lingue[i] + "</li>");
}

document.write("</ul>")



//cercare in un array (definisco la variabile, nome dell'array.find. Il metodo find contiene una funzione di callback
var lingue = new Array("italiano","spagnolo","francese")

var ricerca = lingue.find(function(lingue){
    return lingue == "italiano";
});

console.log(ricerca);//italiano
//codice piú corto con la funzione callback freccia
var ricerca = lingue.find(lingue => lingue =="spagnolo");
console.log(ricerca); //spagnolo

//findIndex
var ricerca = lingue.findIndex(lingue => lingue =="spagnolo");
console.log(ricerca); //1

//metodo some per cercare se un prezzo è maggiore di un certo valore
var prezzo = [10, 20, 50, 70];
var ricerca = prezzo.some(prezzo => prezzo >= 20);
console.log(ricerca); //true