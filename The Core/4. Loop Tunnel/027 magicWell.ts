function magicWell(a: number, b: number, n: number): number {
    let moneyGained: number = 0;
    let tossedMarbles: number = 0;
    for (let i = a; tossedMarbles < n; i++) {
        moneyGained += i * b;
        b++;
        tossedMarbles++;
    }

    return moneyGained;
}

interface Task27 {
    a: number,
    b: number,
    n: number,
    expOut: number
};

const task27_test1: Task27 = {
    a: 1,
    b: 2,
    n: 2,
    expOut: 8
};

console.log('expected output', task27_test1.expOut, '| my output', magicWell(task27_test1.a, task27_test1.b, task27_test1.n));
