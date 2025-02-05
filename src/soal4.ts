function staircase(n: number): void {
    for (let i = 1; i <= n; i++) {
        const spaces = ' '.repeat(n - i);
        const hashes = '#'.repeat(i);
        console.log(spaces + hashes);
    }
}

// Contoh penggunaan
const n: number = 6;
staircase(n);