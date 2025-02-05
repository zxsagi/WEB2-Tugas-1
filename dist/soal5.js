"use strict";
function angryProfessor(k, a) {
    const onTimeStudents = a.filter(time => time <= 0).length;
    return onTimeStudents < k ? "YES" : "NO";
}
// Contoh penggunaan
const testCases = [
    { n: 4, k: 3, a: [-1, -3, 4, 2] },
    { n: 4, k: 2, a: [0, -1, 2, 1] }
];
testCases.forEach(testCase => {
    const { k, a } = testCase;
    console.log(angryProfessor(k, a)); // Output: YES, NO
});
