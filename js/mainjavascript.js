// chiedere all’utente il numero di chilometri che vuole percorrere

let kmUtente = parseInt(prompt("inserisci il kilometraggio da percorrere"));

console.log("il km scelto dall'utente è:",kmUtente);


// chiedere l’età del passeggero.

let ageUtende = parseInt(prompt("inserisci la tua età"));

console.log("l'età dell'utente è:", ageUtende);


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const prezzoKm = 0.21 * kmUtente;
console.log("il prezzo al km è: ", prezzoKm);



// va applicato uno sconto del 20% per i minorenni


// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).