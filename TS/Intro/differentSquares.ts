function differentSquares(matrix: number[][]): number {
    let result: string[] = [];
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            let currentSequence = [[matrix[i][j],matrix[i][j + 1]],[matrix[i + 1][j],matrix[i + 1][j + 1]]].join();
            if (!result.includes(currentSequence)) {
                result.push(currentSequence);
            }
        }
    }

    return result.length;
}

let testMatrix1: number[][] =   [[9, 9, 9, 9, 9],
                                 [9, 9, 9, 9, 9],
                                 [9, 9, 9, 9, 9],
                                 [9, 9, 9, 9, 9], 
                                 [9, 9, 9, 9, 9],
                                 [9, 9, 9, 9, 9]];

let testMatrix2: number[][] =   [[1, 2, 1],
                                 [2, 2, 2],
                                 [2, 2, 2],
                                 [1, 2, 3],
                                 [2, 2, 1]];

let testMatrix3: number[][] =   [[3],
                                 [4],
                                 [5],
                                 [6],
                                 [7]];

console.log(differentSquares(testMatrix1));
console.log(differentSquares(testMatrix2));
console.log(differentSquares(testMatrix3));