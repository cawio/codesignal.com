function arrayConversion(inputArray: number[]): number {
    let i: number = 1;
    while (inputArray.length !== 1) {
            if (i % 2 !== 0) {
                inputArray = replacePairWithSum(inputArray);
            } else {
                inputArray = replacePairWithProduct(inputArray);
            }
            i++;
    }
    
    return inputArray[0];
}

function replacePairWithSum(arr: number[]): number[] {
    let result: number[] = [];
    for (let i = 0; i < arr.length - 1; i += 2) {
        result.push(arr[i] + arr[i + 1]);
    }

    return result;
}

function replacePairWithProduct(arr: number[]): number[] {
    let result: number[] = [];
    for (let i = 0; i < arr.length - 1; i += 2) {
        result.push(arr[i] * arr[i + 1]);
    }

    return result;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

let array: number[] = Array(128).fill(100);
console.log(arrayConversion(array));