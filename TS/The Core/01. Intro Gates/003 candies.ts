function candies(n: number, m: number): number {
    return Math.trunc(m / n) * n;
}

let testKids: number = 2;
let testCandies: number = 10;

console.log(candies(testKids, testCandies));