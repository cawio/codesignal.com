function circleOfNumbers(n: number, firstNumber: number): number {
    let radiallyOppositeNumber: number = 0;

    //radially opposite = firstNumber + radius
    radiallyOppositeNumber = firstNumber + (n / 2);

    //if result exceeds n - substract n
    if (radiallyOppositeNumber > n) {
        radiallyOppositeNumber = radiallyOppositeNumber - n;
    }

    //if result is n it should be 0
    if (radiallyOppositeNumber == n) {
        radiallyOppositeNumber = 0;
    }

    return radiallyOppositeNumber;
}

let circleOfNumbersTest11 = 6;
let circleOfNumbersTest12 = 3;

console.log(circleOfNumbers(circleOfNumbersTest11, circleOfNumbersTest12));