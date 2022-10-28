function contoursShifting(matrix: number[][]): number[][] {
    // let resultMatrix: number[][] = Array(matrix.length).fill(Array(matrix[0].length).fill(0));
    // console.table(resultMatrix);
    // let resultMatrix: number[][] = matrix.map((el: number[]) => [...el]);
    let resultMatrix: number[][] = JSON.parse(JSON.stringify(matrix));
    let layer: number = 0;
    while (matrix.length > 0 && matrix[0].length > 0) {
        let width: number = matrix[0].length;   // x range
        let height: number = matrix.length;     // y range
        let pos: number[][] = [];
        //get border coordinates 
        for (let i = 0; i < width - 1; i++) {
            pos.push([0, i]);
        }

        for (let i = 0; i < height; i++) {
            pos.push([i , width - 1])
        }
        if (height - 1 > 0) { // handle arrays with only 0 contour
            for (let i = width - 2; i > 0; i--) {
                pos.push([height - 1, i]);
                
            }
        }
        if (width - 1 > 0) { // handle arrays with only 0 contour
            for (let i = height - 1; i > 0; i--) {
                pos.push([i, 0]);
            }
        }

        // rotate pos
        let rotatedPos: number[][] = JSON.parse(JSON.stringify(pos));
        if (layer % 2 === 0) {
            const el: number[] = pos[pos.length - 1];
            rotatedPos.pop();
            rotatedPos.unshift(el);
        } else {
            const el: number[] = rotatedPos[0];
            rotatedPos.shift();
            rotatedPos.push(el);
        }

        for (let i = 0; i < pos.length; i++) {
            const oldPos: number[] = pos[i]
            const newPos: number[] = rotatedPos[i];

            resultMatrix[oldPos[0] + layer][oldPos[1] + layer] = matrix[newPos[0]][newPos[1]];
        }

        matrix = matrix
            .slice(1, -1)
            .map((el: number[]) => {
                return el.slice(1, -1);
            });
        layer++;
    }
    
    return resultMatrix;
}

console.table(contoursShifting([[ 1,  2,  3,  4],
                                [ 5,  6,  7,  8],
                                [ 9, 10, 11, 12],
                                [13, 14, 15, 16],
                                [17, 18, 19, 20]]));
