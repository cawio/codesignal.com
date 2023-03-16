function shuffledArrays(shuffled: number[]): number[] {
    let shuffledCopy: number[] = JSON.parse(JSON.stringify(shuffled));
    for (let i = 0; i < shuffled.length; i++) {
        const el: number[] = shuffled.slice(0, i).concat(shuffled.slice(i + 1));
        const tmpSum: number = el.reduce((sum: number, el: number) => sum + el, 0);
        if (shuffled.some((el: number) => el === tmpSum)) {
            shuffledCopy.splice(shuffledCopy.indexOf(tmpSum), 1);
            shuffledCopy.sort((a: number, b: number) => a - b);
            break;
        }
    }

    return shuffledCopy;
}

const task114_1: number[] = [1, 12, 3, 6, 2];
console.log(shuffledArrays(task114_1));
const task114_2: number[] = [1, -3, -5, 7, 2];
console.log(shuffledArrays(task114_2));