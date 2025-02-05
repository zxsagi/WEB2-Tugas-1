"use strict";
function isPalindrome(x) {
    return x.toString() === x.toString().split('').reverse().join('');
}
// Contoh penggunaan
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
