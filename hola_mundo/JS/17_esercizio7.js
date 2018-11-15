'use strict'

//table de multiplicar de un numero introducido por pantalla (del 1 al 10)
//creiamo il promtp del numero 

var numero = parseInt(prompt("De que numero quieres la tabla",1))

document.write("<h1>Tabla del "+numero+" </h1>");
for(var i = 1; i <= 10; i++){
    document.write(i+" x "+numero+" = " + (i*numero)+"<br/>");
}

//esempio numero = 2 alla seconda iterazione, pvvero per i = 2 avremo
                    //(2+" x "2" = " + (risultado di 2*2)

                    // per fare la formazzatione aggiungo il +"<br/>"

//todas las tablas de multiplicar, faccio un for per tutti i numeri e il codice sará quello di sopra

for(var c = 1; c <=10; c++){
    document.write("<h1>Tabla del "+c+" </h1>");
    for(var i = 1; i <= 10; i++){
    document.write(i+" x "+c+" = " + (i*c)+"<br/>");
}
}


