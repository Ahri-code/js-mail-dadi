// --- CONSTANTS ---

const mail = ["pasquale@gmail.com", "alicia@gmail.com", "luca@libero.it", "angela@libero.it", "batili6425@raotus.com"];

// --- VARIABLES ---

let verify;
let add;
let i;
let x;

// --- INPUTS ---

verify = prompt("Inserisci la tua mail");

// --- CHECKS ---

for (i = 0; i <= mail.length; i++) {
    if(verify == mail[i]) {
        x = 1;
    }
    else {
        x = 2;
    }
    break;
}