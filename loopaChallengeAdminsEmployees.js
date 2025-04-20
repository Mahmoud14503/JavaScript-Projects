/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

document.write(`<div>We Have X Admins</div>`);

let i = 0;
for (; myAdmins[i] != "Stop"; i++) {
}
document.write(`<div>We Have ${i} Admins</div>`);
document.write(`<hr></hr>`);

for (let i = 0; myAdmins[i] != "Stop"; i++) {
    document.write(`<div>The Admin For Team ${i + 1} is ${myAdmins[i]}`);
    document.write(`<h3>The Team Members:</h3>`);
    
    for (let j = 0, n = 1; j < myEmployees.length; j++) {
        if (myAdmins[i][0] === myEmployees[j][0]) {
            document.write(`<p> - ${n} ${myEmployees[j]} </p>`);
            n++;
        }
    }
    document.write(`</div>`);
    document.write(`<hr></hr>`);
}


