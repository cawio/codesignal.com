function rowsRearranging(matrix: number[][]): boolean {
    matrix.sort((a: number[], b: number[]) => {
        return a[0] - b[0];
    });

    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 1; j < matrix.length; j++) {
            if (matrix[j][i] <= matrix[j - 1][i]) {
                return false;
            }
        }
    }
    
    return true;
}

const task119_1: number[][] = [[2, 7, 1],
                               [0, 2, 0],
                               [1, 3, 1]];
console.log(rowsRearranging(task119_1), false);

const task119_2: number[][] = [[6, 4],
                               [2, 2],
                               [4, 3]];
console.log(rowsRearranging(task119_2), true)