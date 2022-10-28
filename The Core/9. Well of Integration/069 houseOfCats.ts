function houseOfCats(legs: number): number[] {
    const humCount: number[] = [];

    if (legs === 2) {
        humCount.push(1);
        return humCount;
    }

    while (legs >= 0) {
        humCount.unshift(legs / 2);
        legs -= 4;
    }

    return humCount;
}

console.log(houseOfCats(6));