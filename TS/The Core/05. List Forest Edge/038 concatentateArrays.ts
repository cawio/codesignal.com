function concatentateArrays(a: number[], b: number[]): number[] {
    return a.concat(b);
}

interface Task39 {
    a: number[],
    b: number[],
    expOut: number[]
}

const task39_Test1: Task39 = {a: [2, 2, 1], b: [10, 11], expOut: [2, 2, 1, 10, 11]};

console.log('expOut', task39_Test1.expOut, '| myOut', concatentateArrays(task39_Test1.a, task39_Test1.b));