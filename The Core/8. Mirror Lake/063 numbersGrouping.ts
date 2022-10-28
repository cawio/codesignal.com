function numbersGrouping(a: number[]): number {
    const n: number = Math.pow(10, 4); 
    const groupedNumbers: number[] = Array(n).fill(0);
    for (let i = 0; i < a.length; i++) {
      groupedNumbers[Math.floor((-1 + a[i]) / n)] = 1;
    }

    return a.length + groupedNumbers.reduce((a: number, b: number) => a + b, 0);
}

console.log(numbersGrouping([20000, 239, 10001, 999999, 10000, 20566, 29999]));
