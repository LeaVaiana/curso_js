'use strict'

//JSON - Javascript Object Notation

/*
var name = {
    propiedad: valor,
}
*/

var film = {
    titolo:"batman",
    year: 2017,
    country: "USA",
}

console.log(film); //{titulo: "batman", year: 2017, pais: "USA"}
//per aggiornare un dato, ex:
film.titolo = "Superman"
console.log(film);//{titolo: "Superman", year: 2017, pais: "USA"}

//ARRAY ASSOCIATIVO
var films = [
    {titolo:"Wonder woman", year:2017, country:"Italy"},
    film
]

console.log (films);//0: {titolo: "Wonder woman", year: 2017, country: "Italy"}
                    //1: {titolo: "Superman", year: 2017, country: "USA"}
                    // ritorna 2 oggetti


//RICORRERE L'ARRAY: queyselector, append, index
var box_films = document.querySelector("#films"); //seleziono il primo elemento del documento con classe film
var index;
for (index in films){ //for in loop, lungo l'oggetto
    var p = document.createElement("p"); // creo il paragrafo
    p.append(films[index].titolo + " - " + films[index].year); //inserisco i dati al paragrafo
    box_films.append(p); // appendo il paragrafo al box
}