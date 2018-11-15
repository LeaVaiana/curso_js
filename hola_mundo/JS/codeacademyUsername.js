//truthy and falsy, se dichiaro la variabile con una stringa per difetto me lo da truly, se uso =, stringa vuota, undefinde o NaN, per difetto me lo da falso e fa il run dell else
let wordCount = 8;
if (wordCount) {
    console.log("Great! You've started your work!");
  } else {
    console.log('Better get to work!');
  }

  let favoritePhrase = '';
  if (favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
  } else {
    console.log('This string is definitely empty.');
  }


//codice per vedere se username è definito, se non è definito si assegna un una stringa per difetto
let defaultName;
if (username){
    defaultName = username;
}else {
    defaultName = "Stranger"
}

//Truthy and Falsy Assignment

let tool = '';
tool = "marker"

let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

//if, else if, else

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall'){
  console.log('It\'s fall! Leaves are falling!');
}
else {
  console.log('Invalid season.');
}

//switch statement: sintassi alternativa all else if, piú semplice:
// dichiaro una var/let con la sua expression, e poi switch(expression){case "":funzione;break;}
let athleteFinalPosition = 'first place';

switch(athleteFinalPosition){
  case 'first place': console.log('You get the gold medal!'); break;
    case 'second place': console.log('You get the silver medal!'); break;
    case 'third place': console.log('You get the bronze medal!'); break;
}