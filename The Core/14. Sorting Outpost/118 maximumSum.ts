// check which [l, r] values appear most often
// assign the highest number to the spot on lr that appears most often and so on
function maximumSum(a: number[], q: number[][]) {
    a.sort((a: number, b: number) => a - b);
    let counts: CountsObj[] = a.map((_, i: number) => ({
        i,
        c: count(i, q)
    }));
    counts.sort((a: CountsObj, b: CountsObj) => b.c - a.c);

    let solution = Array(counts.length);
    for (let i = 0; i < counts.length; i++) {
        solution[counts[i].i] = a[a.length - 1] * counts[i].c;
        a.pop();
    }

    return solution.reduce((a: number, b: number) => a + b);
}

function count(n: number, nRange: number[][]): number {
    let c: number = 0;
    nRange.forEach((range: number[]) => {
        if (n >= range[0] && n <= range[1]) {
            c++;
        }
    });

    return c;
}

interface CountsObj {
    i: number;
    c: number
}

interface Task118 {
    a: number[];
    q: number[][];
    expOut: number
}

const task118_1: Task118 = {
    a: [9, 7, 2, 4, 4],
    q: [[1,3], [1,4], [0,2]],
    expOut: 62
}
console.log(task118_1.expOut, '|', maximumSum(task118_1.a, task118_1.q));