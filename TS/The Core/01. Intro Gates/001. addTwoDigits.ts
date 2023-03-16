function addTwoDigits(n: number): number {
    //return n / 10 + n %10;
    return +n.toString()
    .split('')
    .reduce((acc: number, elem: string) => acc += +elem, 0);
}

let testDigits: number = 29;

console.log(addTwoDigits(testDigits));
