function circleOfNumbers2(n: number, firstNumber: number): number {
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