/* 
Construct a square matrix with a size N × N 
containing integers from 1 to N * N in a spiral order, 
starting from top-left and in clockwise direction.

for n = 3 =>    [[1, 2, 3],
                 [8, 9, 4], 
                 [7, 6, 5]]
*/

function spiraNumbers(n: number): number[][] {
    let squareMatrix: number[][] = new Array(n).fill(0).map(() => {
        return new Array(n).fill(0);
    });
    let rowStart: number = 0;
    let rowEnd: number = n - 1;
    let columnStart: number = 0;
    let columnEnd: number = n - 1;
    let currNumber = 1;
    while(columnStart <= columnEnd && rowStart <= rowEnd) {
        for (let i = columnStart; i <= columnEnd; i++) {        //left to right
            squareMatrix[rowStart][i] = currNumber;
            currNumber++;
        }
        rowStart++;

        for (let i = rowStart; i <= rowEnd; i++) {              //top to bottom
            squareMatrix[i][columnEnd] = currNumber;
            currNumber++;
        }
        columnEnd--;

        for (let i = columnEnd; i >= columnStart; i--) {        //right to left
            squareMatrix[rowEnd][i] = currNumber;
            currNumber++;
        }
        rowEnd--;

        for (let i = rowEnd; i >= rowStart; i--) {              //bottom to top
            squareMatrix[i][columnStart] = currNumber;
            currNumber++;
        }
        columnStart++;
    }
                  
    return squareMatrix;
}

let spiralTest1: number = 3;
let spiralTest2: number = 5;

console.log(spiraNumbers(spiralTest1));
console.log(spiraNumbers(spiralTest2));