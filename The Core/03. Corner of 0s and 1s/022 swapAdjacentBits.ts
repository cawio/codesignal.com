function swapAdjacentBits(n: number) {
    return parseInt(n
    .toString(2)
    .split(/(?=(?:..)*$)/)
    .map((el: string) => {
        return el.split('').reverse().join('');
    })
    .join(''), 2)

}

const task22_Test1: number = 13;

console.log(swapAdjacentBits(task22_Test1)); //expOut 146