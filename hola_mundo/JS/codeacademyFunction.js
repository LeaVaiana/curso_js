//how to create and use functions, and how they can be used to create clearer and more concise code.
//function declaration
//function nomeFunzion(){codice}

function getReminder(){
    console.log('Water the plants')
  }
  
  
function greetInSpanish(){
    console.log('Buenas Tardes.')
  }

//The code inside a function body runs, or executes, only when the function is called. 
getReminder()

//Parameters and Arguments
//quando dichiariamo una funzione ne possiamo specificare i parametri(placeholders)
//quando chiamiamo la funzione che ha parametri, noi specifichiamo i valori tra parentesi(argomenti), possono essere valori o variabili

function sayThanks(name) {//dove possiamo aggiungere il nome dell usuario
    console.log('Thank you for your purchase! We appreciate your business.');
  }
//il parametro name puó essere usato come variabilenel corpo della funzione)

  function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }

//per chiamare la funzione
sayThanks('Cole')
//e mi stampa: Thank you for your purchase Cole! We appreciate your business.



//Default Parameters: permetteno dare un valore predeterminato quando non c'e' un argomento o quando è undefined
//il valore predeterminato si assegna con = dentro le parentesi tonde
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
//cosí quando lo chiamiamo, se sappiamo il nome abbiamo un output, altrimenti un altro
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

//fare una shopping list dove come valori predeterminati ci sono milk, bread, and eggs 

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = "eggs")
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs"){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }


//RETURN, serve perche permette alle funzioni di produrre un output, che poi potremo salvare in una variabile per usarlo dopo
function rectangleArea(width, height) {
    let area = width * height 
  }
  console.log(rectangleArea(5, 7)) // Prints undefined
  
//devo aggiungere return seguito dal valore che vogliamo ottenere, se il valore è omesso otteniamo undefined
function rectangleArea(width, height) {
    let area = width * height
    return area; 
  }
  console.log(rectangleArea(5, 7))


//esercizio vogliamo calcolare gli elementi di una griglia(esercizio dei monitor da ordinare)
//1) dichiariamo la funzione con i due parametri
//2) moltiplichiamo le file per le colonne con return per ottenere il risultato
function monitorCount(rows, columns){
    return rows * columns;
}
//supponiamo 5 file e 4 colonne, dichiariamo un variabile e gli assegniamo i valor 4 e 5
var numOfMonitors = monitorCount(5,4);

console.log(numOfMonitors);

//Helper Functions: se usiamo il valore di return di una funzione dentro un altra funzione
//nell esempio precedente abbiamo contato i monitor che bisogna comprare, adesso calcoliamone il prezzo
//con la funzione precedentemente creata monitorCount
//creiamo una seconda funzione per il costo del monitor
// e in un return moltiplichiamo il valore della prima funzione per il costo di ogni monitor 200
function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200
  }

//dichiariamo una variabile total cost e gli assegniamo il valore di costOfMonitors con gli argomenti 5 e 4, e poi ne stampiamo il risultato
const totalCost = costOfMonitors(5,4)
console.log(totalCost)

//FUNCTION EXPRESSION, definire una funzione dentro una espressione
//in questo caso la parola funzione è omessa e si chiama anonymous function
//normalmente è conservata dentro una variabile per riferirci a lei




