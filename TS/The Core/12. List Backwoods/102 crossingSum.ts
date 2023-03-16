function crossingSum(matrix: number[][], a: number, b: number): number {
    const double: number = matrix[a][b];
    const aArr: number[] = matrix[a];
    const bArr: number[] = [];
    
    matrix.forEach((el: number[]) => {
        bArr.push(el[b]);
    });

    return aArr.concat(bArr).reduce((sumA: number, el: number) => sumA += el, 0) - double;
}

interface Task101 {
    a: number;
    b: number;
    m: number[][];
    eO: number;
}

const test1: Task101 = {
    a: 1,
    b: 3,
    m: [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]],
    eO: 12,
}

console.log(test1.eO, crossingSum(test1.m, test1.a, test1.b));