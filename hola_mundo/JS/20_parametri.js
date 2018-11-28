 'use strict'

 //parametri rest & spread

 //Parametri REST (per inserire un numero indefinito di parametri dentro un array)

function listParametri (parametro1, parametro2, ...resto_di_parametri){
    console.log("Il parametro 1: ", parametro1);
    console.log("Il parametro 2: ", parametro2);
    console.log(resto_di_parametri);
}

listParametri (parametro1, parametro2,parametro3, parametro4, parametro5);
    
