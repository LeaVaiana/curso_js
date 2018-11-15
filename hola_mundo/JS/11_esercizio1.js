'use strict'

//programa que pida dos numeros y nos diga cual es mayor, cual menor y si son iguales
//plus: si los numeros no son un numero o son menores o iguales a zero que nos lo vuelva a pedir
//el parseint para convertir el string que coge el numero en numero, numero per difetto è zero'
var numero1 = parseInt(prompt("Introduce el primer numero", 0)); 
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

//console.log(numero1, numero2); si no hubiera escrito el plus
while(numero1 <=0 || numero2 <=0|| isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("introduce el primer numero", 0));
    numero2 = parseInt(prompt("introduce el segundo numero", 0));
}
if(numero1 == numero2){
    alert("Los numeros son iguales");
}else if(numero1 > numero2){
    alert("el numero mayor es " + numero1);
    alert("el numero menor es " + numero2);
}else{
    alert("el numero mayor es " + numero2);
}
