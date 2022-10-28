function largestNumber(n: number): number {
    let result: string[] = new Array(n).fill('9');
    return +result.join('');
}

let n: number = 3;
console.log(largestNumber(n));