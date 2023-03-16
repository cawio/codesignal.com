function reverseDiagonals(matrix: number[][]): number[][] {
    let reversed: number[][] = matrix.map((el: number []) => {
        return el.slice()
    });
    
    let j: number = matrix.length;
    for (let i = 0; i < j; i++) {
        reversed[i][i] = matrix[j - 1 - i][j - 1 - i];
        reversed[j - i - 1][i] = matrix[i][j - i - 1];
    }

    return reversed;
}

console.table(reverseDiagonals([[1,2,3], [4,5,6], [7,8,9]]));