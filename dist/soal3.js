"use strict";
function camelcase(s) {
    let count = 1; // Mulai dari 1 karena kata pertama selalu dimulai dengan huruf kecil
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase() && s[i] !== s[i].toLowerCase()) {
            count++;
        }
    }
    return count;
}
// Contoh penggunaan
const s = "saveChangesInTheEditor";
console.log(camelcase(s));
