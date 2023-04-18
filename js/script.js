// --- CONSTANTS ---

const mail = ["pasquale@gmail.com", "alicia@gmail.com", "luca@libero.it", "angela@libero.it", "batili6425@raotus.com"];

// --- VARIABLES ---

let verify;
let i;
let x;

// --- FUNCTIONS ---

function load() {
    verify = document.getElementById("mail").value;
    for (i = 0; i < mail.length; i++) {
        if(verify == mail[i]) {
            x = 1;
            break;
        }
        else {
            x = 2;
        }
    }
    if(x == 1) {
        document.getElementById("signed").style.display = "block";
    }
    else {
        document.getElementById("not_signed").style.display = "block";
    }
}

// ------

function add() {
    document.getElementById("not_signed").style.display = "none";
    mail.push(verify);
    verify = document.getElementById("mail");
    verify.value = '';
}

// ------

function undo() {
    document.getElementById("not_signed").style.display = "none";
    verify = document.getElementById("mail");
    verify.value = '';
    document.getElementById("ok").style.display = "block";
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