function sumArray(a: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

function digitDegree(n: number): number {
    let result: number = 0;
    let tempSum: number = n;
    for (let i = 0; tempSum > 9; i++) {
        let arrayOfDigits: number[] = String(tempSum).split('').map((num) => {
            return Number(num);
        });
        tempSum = sumArray(arrayOfDigits);
        result++;
    }
    return result;
}

let testNumber1: number = 5;
let testNumber2: number = 100;
let testNumber3: number = 91;

console.log(digitDegree(testNumber1)); //0
console.log(digitDegree(testNumber2)); //1
console.log(digitDegree(testNumber3)); //2