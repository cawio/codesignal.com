function swapDiagonals(matrix: number[][]): number[][] {
    let reversed: number[][] = matrix.map((el: number []) => {
        return el.slice()
    });
    
    let j: number = matrix.length;
    for (let i = 0; i < j; i++) {
      reversed[i][i] = matrix[i][j - i - 1];
      reversed[i][j - i - 1] = matrix[i][i];
    }
    return reversed;
}