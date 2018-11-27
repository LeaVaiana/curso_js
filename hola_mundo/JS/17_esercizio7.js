'use strict'

//Crea la tavola di moltiplicazione di un numero introdotto dallo user

var num = parseInt(prompt("Di quale numero vuoi la tavola?",1))

document.write("<h1>Tavola del "+num+" </h1>");
for(var i = 1; i <= 10; i++){
    document.write(i+" x "+num+" = " + (i*num)+"<br/>");
}


//Per tutte le tavole, racchiudo il codice dentro un for, con la variabile c da 1 a 10. 

for(var c = 1; c <=10; c++){
    document.write("<h1>Tavola del "+c+" </h1>");
    for(var i = 1; i <= 10; i++){
    document.write(i+" x "+c+" = " + (i*c)+"<br/>");
}
}


