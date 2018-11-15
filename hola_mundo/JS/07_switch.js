'use strict'

//switch, comparando, case para comparar caso per caso
var edad = 25;
var imprime = ""//la lascio vuota perche il valore glielo do dipendendo del caso

switch(edad) {
    case 18:
        imprime = "acabas de cumplir la mayorida de edad"
    break;
    case 25:
        imprime = "eres adulto"
    break;
    case 40:
        imprime = "crisis de los 40"
    break;
    case 75:
        imprime = "nonno"
    break;
    default:
        imprime = "Ciao"
        break;
}

console.log(imprime)