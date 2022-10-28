function houseNumbersSum(inputArray: number[]): number {
    let sum: number = 0;
    let i: number = 0;
    while (inputArray[i] !== 0) {
        sum += inputArray[i];
        i++;
    }

    return sum;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));