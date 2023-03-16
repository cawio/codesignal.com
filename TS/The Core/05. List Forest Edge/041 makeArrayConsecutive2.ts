function makeArrayConsecutive2(statues: number[]): number {
    const arrLenght: number = statues.length;
    const min: number = Math.min(...statues);
    const max: number = Math.max(...statues);

    return max - min - arrLenght + 1;
}

const task43_Test1: number[] = [6, 2, 3, 8];

console.log(makeArrayConsecutive2(task43_Test1));