//creo la funzione
function init() {
    var planet = document.getElementById("greenplanet"); //salvo l'elemento ricercato in una variabile
    planet.innerHTML = "Red Alert"; //cambio il testo dell'elemento
}
window.onload = init; // assegno la funzione init alla proprietá window.onload