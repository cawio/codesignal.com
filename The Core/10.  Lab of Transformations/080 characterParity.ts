function characterParity(symbol: string): string {
    const n: number = parseInt(symbol);
    if (isNaN(n)) {
        return 'not a digit';
    } else if (n % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
