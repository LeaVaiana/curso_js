/* 
1 Chiedi 6 numeri con un prompt e introducili in un array
2 Mostra l'array sia nella pagina sia nella consola
3 ordina l'array
4 invertine l'ordine
5 mostrami il numero di elementi
*/


//1 & 2
var num = new Array(6); //definiamo un array di 6 numeri
//chiediamo che l'usuario inserisca i 6 numeri
for (var i = 0; i<=5; i++){ //inserisci numeri fino a che la i sia minore di 5 (6 elementi dell'array)
    num[i]= parseInt(prompt("Introduci un numero", 0)); //popoliamo l'array num
}
console.log(num)//per vedere il contenuto dell'array creato in consola

document.write(num);

//3 con il metodo sort ordino alfabeticamente, per ordinare numericamente, aggiungo una funzione di callback al sort
num.sort(function(a,b){return a-b});
console.log(num);

//4
num.reverse();
console.log(num);

//5
document.write(num.length);






