function isSumOfCosecutive2(n: number): number {
    let result: number = 0;
    for (let i = 1;  i < Math.ceil(n / 2); i++) {
        let acc: number = 0;
        for (let j = i; acc < n; j++) {
            acc += j;
        }
        if (acc == n) {
            result++;
        }
    }

    return result;
}

interface Task44 {
    n: number;
    expOut: number
};

const task44_Test1: Task44 = {n: 9, expOut: 2};

console.log('expOut:', task44_Test1.expOut, '| myOut:', isSumOfCosecutive2(task44_Test1.n));
