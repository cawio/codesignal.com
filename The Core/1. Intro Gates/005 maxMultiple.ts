function maxMultiple(divisor: number, bound: number): number {
    for (let i = bound; i > 0; i--) {
        if (i % divisor == 0) {
            return i;
        }
    }
    return 0;
}

let testDivisor: number = 2;
let testBound: number = 7;

console.log(maxMultiple(testDivisor, testBound));