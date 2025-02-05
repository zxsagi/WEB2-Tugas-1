"use strict";
function climbStairs(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    if (n === 2)
        return 2;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // Base case
    dp[1] = 1; // Base case
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
// Contoh penggunaan
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(4)); // Output: 5
