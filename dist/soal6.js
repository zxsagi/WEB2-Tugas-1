"use strict";
function birthdayCakeCandles(candles) {
    const maxHeight = Math.max(...candles);
    return candles.filter(candle => candle === maxHeight).length;
}
// Contoh penggunaan
const candles = [4, 4, 1, 3];
console.log(birthdayCakeCandles(candles));
