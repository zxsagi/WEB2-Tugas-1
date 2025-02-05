function countingValleys(steps: number, path: string): number {
    let level: number = 0;
    let valleys: number = 0;

    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            level++;
            if (level === 0) {
                valleys++;
            }
        } else {
            level--;
        }
    }

    return valleys;
}

// Contoh penggunaan
const steps: number = 8;
const path: string = "UDDDUDUU";
console.log(countingValleys(steps, path));  // Output: 1