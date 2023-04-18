// --- CONSTANTS ---

const mail = ["pasquale@gmail.com", "alicia@gmail.com", "luca@libero.it", "angela@libero.it", "batili6425@raotus.com"];

// --- VARIABLES ---

let verify;
let add;
let i;
let x;

// --- INPUTS ---

verify = document.getElementById("mail").value;
console.log(verify);

// --- FUNCTIONS ---

function load() {
    for (i = 0; i <= mail.length; i++) {
        if(verify == mail[i]) {
            x = 1;
        }
        else {
            x = 2;
        }
        console.log(x);
        break;
    }
    if(x == 1) {
        document.getElementById("not_signed").style.display = "block";
    }
    else {
        document.getElementById("signed").style.display = "block";
    }
}

// --- CHECKS ---

// for (i = 0; i <= mail.length; i++) {
//     if(verify == mail[i]) {
//         x = 1;
//     }
//     else {
//         x = 2;
//     }
//     break;
// }

// if(x == 1) {
//     alert("La mail è registrata");
// }
// else {
//     alert("La mail non è stata registrata");
// }