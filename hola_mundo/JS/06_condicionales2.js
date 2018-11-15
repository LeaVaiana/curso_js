
// Operadore logicos and &&, OR || opt1, ! negacion

var year = 2018

//negacion !==
if (year !== 2016){
    console.log("El año es 2016")
}
//and
if (year >= 2000 && year <= 2020){
    console.log ("estamos en la actualidad")
}else{
    console.log("Estamos en el futuro")
}


//OR
if(year ==2008 || year == 2018){
    console.log("El año acaba en 8");
}

//se aggiuno che deve pure essere uguale al 2028 non mi stampa niente:
if(year ==2008 || (year == 2018 && year == 2028)){
    console.log("El año acaba en 8");
}

//posso scrivere cosí perche mi stampi año no registrado (ma se var = 2028, mi passa la prima condizione)
if(year ==2008 || (year == 2018 && year == 2028)){
    console.log("El año acaba en 8");
}else{
    console.log("Año no registrado")
}