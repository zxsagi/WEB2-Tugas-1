"use strict";
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        const spaces = ' '.repeat(n - i);
        const hashes = '#'.repeat(i);
        console.log(spaces + hashes);
    }
}
// Contoh penggunaan
const n = 6;
staircase(n);
