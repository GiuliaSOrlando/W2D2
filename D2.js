/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const firstNumber = 23
const secondNumber = 84
let largestNumber

if(firstNumber > secondNumber){
  largestNumber = firstNumber
} else {
  largestNumber = secondNumber
}

console.log('Il numero più grande è', largestNumber)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numberToCompare

//numberToCompare = 5.15 <-- test

if(numberToCompare !== 5){
  console.log('Not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numberToDivide

//numberToDivide = 15 <--test

if(numberToDivide % 5 === 0){
  console.log('Divisibile per 5')
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const firstInt = 6
const secondInt = 2

if(firstInt === 8 || secondInt === 8 || firstInt + secondInt === 8 || firstInt - secondInt === 8){
  console.log('Il valore di uno dei due numeri o la loro somma/addizione risulta essere 8')
} else {
  console.log('Il valore di uno dei due numeri o la loro somma/addizione non risulta essere 8')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart
let shippingFee = null

totalShoppingCart = 50.1

if(totalShoppingCart > 50){
  shippingFee = 0
} else {
  shippingFee = 10
}

console.log('I costi di spedizione sono pari a', shippingFee, 'euro', 'perché il totale del carrello è di', totalShoppingCart)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

totalShoppingCart = 62.51
let discount = totalShoppingCart*20/100
let newTotal = totalShoppingCart - discount

if(newTotal > 50){
  shippingFee = 0
} else {
  shippingFee = 10
}

console.log('I costi di spedizione sono pari a', shippingFee, 'euro', 'perché il totale del carrello, dopo l\'applicazione del 20% di sconto è di', newTotal)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

// In questo caso ho preferito optare per variabili con valori letterari semplici,
// perché diventava visivamente confusionario descriverle con nomi parlanti (tipo firstVariable)

const x = 28
const y = 43
const z = 35

numberList = []

if(x > y && x > z){
  if(y > z) {
    numberList.unshift(x, y, z)
    console.log('Le variabili, ordinate dalla più grande alla più piccola, sono nel seguente ordine: x, y, z')
  } else {
    numberList.unshift(x, z, y)
    console.log('Le variabili, ordinate dalla più grande alla più piccola, sono nel seguente ordine: x, z, y')
  }
} else if(y > x && y > z){
  if(x > z) {
    numberList.unshift(y, x, z)
    console.log('Le variabili, ordinate dalla più grande alla più piccola, sono nel seguente ordine: y, x, z')
  } else {
    numberList.unshift(y, z, x)
    console.log('Le variabili, ordinate dalla più grande alla più piccola, sono nel seguente ordine: y, z, x')
  }
} else if(z > x && z > y){
  if(x > y) {
    numberList.unshift(z, x, y)
    console.log('Le variabili, ordinate dalla più grande alla più piccola, sono nel seguente ordine: x, y, z')
  } else {
    numberList.unshift(z, y, x)
    console.log('Le variabili, ordinate dalla più grande alla più piccola, sono nel seguente ordine: z, y, x')
  }
}

console.log('Questa è la lista dei numeri ordinati dal più grande al più piccolo', numberList)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const elementToVerify = 25

if(typeof elementToVerify === NaN) {
  console.log('La variabile non è un numero')
} else {
  console.log('La variabile è un numero, infatti è il numero', elementToVerify)
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const isOddorEven = 27

if(isOddorEven%2 === 0) {
  console.log('Il numero fornito è pari')
} else {
  console.log('Il numero fornito è dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'

console.log('La proprietà \"city", aggiunta ex novo con la dot notation \me.city ha come valore', me.city)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

if(me.lastName === undefined) {
  console.log('La proprietà è stata cancellata con successo')
} else {
  console.log('Me ha ancora la proprietà lastName')
}

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

console.log('La lista skills ha tre elementi: ', me.skills)

me.skills.pop()

console.log('Ora la lista skills ha solo due elementi: ', me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

myArray = []
for(let i=1;i<=10;i++)
{
  myArray.push(i) //Se le voglio in ordine decrescente basta che applichi il metodo .unshift()
  console.log(myArray)
}

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

myArray.pop()
console.log('Ora la mia lista non ha più il 10 finale', myArray)
myArray.push(100)
console.log('Ora l\'ultimo elemento della lista è il numero 100, infatti se esamino la lista lo vedo: ', myArray)