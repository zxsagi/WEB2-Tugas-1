function birthdayCakeCandles(candles: number[]): number {
    const maxHeight = Math.max(...candles);
    return candles.filter(candle => candle === maxHeight).length;
}

// Contoh penggunaan
const candles: number[] = [4, 4, 1, 3];
console.log(birthdayCakeCandles(candles));  