function differentSquares(matrix: number[][]): number {    
    let result: string[] = [];
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            let currentSequence = [[matrix[i][j],matrix[i][j + 1]],[matrix[i + 1][j],matrix[i + 1][j + 1]]].join();
            if (result.includes(currentSequence)) {
                continue;
            }
            result.push(currentSequence);
        }
    }

    return result.length;
}