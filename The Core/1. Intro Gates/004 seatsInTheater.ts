function seatsInTheater(nCols: number, nRows: number, col: number, row: number): number {
    return (nCols - (col - 1)) * (nRows - row);
}

let testCols: number = 16;
let myCol: number = 5;
let testRows: number = 11;
let myRow: number = 3;

console.log(seatsInTheater(testCols, testRows, myCol, myRow));