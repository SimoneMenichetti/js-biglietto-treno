

// chiedere all’utente il numero di chilometri che vuole percorrere

let kmUtente = parseInt(prompt("inserisci il kilometraggio da percorrere"));

console.log("il km scelto dall'utente è:",kmUtente);


// chiedere l’età del passeggero.

let ageUtente = parseInt(prompt("inserisci la tua età"));

console.log("l'età dell'utente è:", ageUtente);


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const  prezzoKm = 0.21;

 let risultatoPrezzoKm = prezzoKm * kmUtente;

console.log("il risultato del prezzo viaggio tot è: ", risultatoPrezzoKm);


// va applicato uno sconto del 20% per i minorenni
const scontoMinorenni = 0.20 

if (ageUtente < 18) {
  
    // let scontoFinaleMinorenni = 
}

// } else (ageUtente >= 18 && ageUtente < 65 ) {
//     sconto= "lo sconto non viene applicato";
// }




// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).