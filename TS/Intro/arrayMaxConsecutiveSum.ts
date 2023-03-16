function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let largestSum: number = 0;
    const unmodifiedK: number = k;
    for (let i = 0; i < inputArray.length - (unmodifiedK - 1); i++) {
        let tempSum: number = 0;
        for (let j = 0 + i; j < k; j++) {
            tempSum += inputArray[j];
            //console.log('adding', inputArray[j],'tempSum =', tempS   
        } 
        if ( largestSum < tempSum) {
            largestSum = tempSum;
        }
        k++;
    }

    return largestSum;
}

let testArray1: number[] = [2, 3, 5, 1, 6];
let k1: number = 2;

let testArray2: number[] = [1, 3, 2, 4];
let k2: number = 3;

console.log(arrayMaxConsecutiveSum(testArray1, k1));
console.log(arrayMaxConsecutiveSum(testArray2, k2));

console.log(testArray2);
