function squareDigitsSequence(a0: number): number {
    let digitsArr: number[] = Array.from(a0.toString(), n => parseInt(n));
    let accResults: number[] = [a0];

    let temp: number = 0;
    while (checkArr(accResults, temp)) {
        digitsArr.forEach((el, i, arr) => {
            arr[i] = Math.pow(el, 2)
        });
        temp = digitsArr. reduce((acc, el) => {
            return acc += el
        }, 0);
        accResults.push(temp);
        digitsArr = Array.from(temp.toString(), n => parseInt(n));
    }

    return accResults.length;
}

function checkArr(arr: number[], n: number): boolean {
    let acc = 0;
    arr.forEach(el => {
        if (el === n) {
            acc++;
        }
    });

    return acc < 2;
}

const task45_Test1: number = 16;
const task45_Test2: number = 103;


console.log(squareDigitsSequence(task45_Test1));
console.log(squareDigitsSequence(task45_Test2));
