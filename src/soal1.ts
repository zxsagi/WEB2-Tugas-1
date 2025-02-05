function countingValleys(steps: number, path: string): number {
    let level = 0;
    let valleys = 0;

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
const steps = 8;
const path = "UDDDUDUU";
console.log(countingValleys(steps, path));  
