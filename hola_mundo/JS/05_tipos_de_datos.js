'use strict'

//Operadores + - * / %
var num1 = 7;
var num2 = 12;
var operacion = num1 + num2; //qui posso usare tutti gli operatori e vedere come l alert cambia

alert("El resultado de la operación es: "+operacion);

//Tipos de datos interos, string, flotante(decimal), array objecto, booleano
var numero_entero = 44;

var string1 = "hola"; // "" hanno prioritá su '', posso usarle entrambe ma per esempio
var string2 = "hola 'Lea'"
console.log(string2); //hola 'Lea'

var verdadero_falso = false; //true;

//funzioni per convertire un dato in un altro, per esempio un numero in una stringa, me lo converte in numero
//Number();
var numero_falso = "33";
console.log(Number(numero_falso)); //mi da 33, e lo posso pure sommare ai numeri anteriori
//parseIn di 33,4
console.log(parseInt(numero_falso)); // mi da 33, non mi da il decimale, vedi pure parse...float
//a volte ci interessa avere un numero e convertirlo in stringa per esempio per non sommarlo
console.log(string1 + 4);

var numero_entero = 44
console.log(String(numero_entero)+4);

//per conocere il tipo di dato, operatore typeof
console.log(typeof numero_falso);



