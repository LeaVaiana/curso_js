'use strict'

var categoria = ["azione","commedia"];
var film = ["titolo1","titolo2","titolo3"];

//faccio un array dei due array precedenti, array multidimensionale
var cinema = [categoria, film];

//console.log(cinema);//stampa i due array

//se voglio due elementi di due array diversi, chiamo l array multidimensionale e specifico primo indice: si riferisce all'array (categoria), secondo indice si riferisce al suo elemento. 
console.log(cinema[0][1]);//commedia
console.log(cinema[1][2]);//titolo3

//aggiungere un elemento a un array
film.push("titolo4");
console.log(film);

//se vogliamo che sia lo user a inserire elementi da un prompt, uso il DO WHILE

var i = ""; //la domanda del prompt la definisco in basso

do{
    i = prompt("Introduci un titolo"); //continua a chiedere
    film.push(i); //e me li aggiungi all'array film
}
while(i != "basta");// fino a quando lo user nons scriva basta
    
film.pop(); //mi elimina l'ultimo elemento dell'array (basta)
console.log(film);




//se voglio un elemento concreto, prima devo cercare quale 'e il suo indice e lo conservo nella variabile index
var index = film.indexOf("titolo2");
console.log(index)//1

//con splice decido quanti elementi cancellare a partire dall'indice dato
var film = ["titolo1","titolo2","titolo3"];

if(index > -1){ //se indice -1 non avrebbe incontrato l'elemento
    film.splice(index,1)
}

console.log(film);//["titolo1", "titolo3"]

//join, lo devo mettere dentro una variabile per ottenere l'unione di due array
var film_string = film.join();
console.log(film_string)//titolo1,titolo3

//metodo split per convertire catena in array
var chain = "Texto1, Texto2, Texto3";
var chain_array = chain.split(",");
console.log(chain_array);//["Texto1", " Texto2", " Texto3"]

//ordinare arrays, con sort (me li ordina in ordine alfabetico), con reverse è l'ordine inverso

var categoria = ["azione","drama","commedia","horror"];
categoria.sort();
console.log(categoria)// ["azione", "commedia", "drama", "horror"]
categoria.reverse();
console.log(categoria)//["horror", "drama", "commedia", "azione"]



//ricorrere arrays con for in


//cercare in un array

