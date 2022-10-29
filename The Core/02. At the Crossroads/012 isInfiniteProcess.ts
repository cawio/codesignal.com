function isInfiniteProcess(a: number, b: number): boolean {
    return a % 2 != b % 2 || a > b;
}

let infiteTestA: number = 2;
let infiteTestB: number = 6;

console.log(isInfiniteProcess(infiteTestA, infiteTestB));