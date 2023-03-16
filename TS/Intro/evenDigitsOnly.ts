function evenDigitsOnly(n: number): boolean {
    //convert number to array of numbers
    let numberArray: number[] = Array.from(String(n), Number);

    //check if a number in the array is even
    let evenCounter: number = 0;
    numberArray.forEach((item) => {
        if (item % 2 == 0) {
            evenCounter++
        }
    })

    //check if the number consits of only even numbers
    let result: boolean = false
    if (evenCounter == numberArray.length) {
        result = true
    }

    return result;
}

let test1: number = 248622;
let test2: number = 642386;

console.log( evenDigitsOnly(test1) );