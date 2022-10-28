function polygonPerimeter(matrix: boolean[][]): number {
    const directions: number[][] = [[ 1,  0],
                                    [-1,  0],
                                    [ 0,  1],
                                    [ 0, -1]];
    let borderLength: number = 0;
    matrix.forEach((subArray: boolean[], i: number) => {
        subArray.forEach((cell: boolean, j: number) => {
            if (cell) {
                let border: number = 4;
                directions.forEach((offset: number[]) => {
                    const y: number = i + offset[0];
                    const x: number = j + offset[1];
                    if (x > -1 && x < matrix[0].length && y > -1 && y < matrix.length) {
                        const el: boolean = matrix[y][x];
                        console.log(el);
                        if (el === true) {
                           border--;
                        }
                    }
                    console.log(y, x)
                });
                borderLength += border;
            }
        });
    });

    return borderLength;
}

console.log(polygonPerimeter([[false, true,  true ],       // expected: 12
                              [true,  true,  false],
                              [true,  false, false]]));