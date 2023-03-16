function sudoku(grid: number[][]): boolean {
    //get all 3x3 subgrids
    let threeByThree: string[] = [''];
    let rowStart: number = 0;
    let columnStart: number = 0;
    let subGrid: string = '';
    while(rowStart < grid.length) {
        for (let i = rowStart; i < rowStart + 3; i++) {
            for (let j = columnStart; j < columnStart + 3; j++) {
                subGrid += String(grid[i][j]);
            }
        }
        threeByThree.push(subGrid);
        subGrid = '';
        columnStart += 3;
        if (columnStart > 8) {
            rowStart += 3;
            columnStart = 0;
        }
    }

    //check rows for validity
    for (let i = 0; i < grid.length; i++) {
        if (!checkValidSudoku(grid[i].toString())) {
            return false;
        }
    }

    //get all columns
    let fullColumns: string[] = new Array(9).fill('');
    for (let col = 0; col < 9; col++) {
        for (let row = 0; row < 9; row++) {
            fullColumns[col] += grid[row][col];
        }
    }
    
    return threeByThree.every(elem => checkValidSudoku(elem)) && fullColumns.every(elem => checkValidSudoku(elem));
}

function checkValidSudoku(s: string): boolean {
    return (/123456789/g).test(s.split('').sort().join(''))
}

let sudokuGrid1: number[][] =   [[1, 3, 2, 5, 4, 6, 9, 8, 7], 
                                 [4, 6, 5, 8, 7, 9, 3, 2, 1],
                                 [7, 9, 8, 2, 1, 3, 6, 5, 4],
                                 [9, 2, 1, 4, 3, 5, 8, 7, 6],
                                 [3, 5, 4, 7, 6, 8, 2, 1, 9],
                                 [6, 8, 7, 1, 9, 2, 5, 4, 3],
                                 [5, 7, 6, 9, 8, 1, 4, 3, 2],
                                 [2, 4, 3, 6, 5, 7, 1, 9, 8],
                                 [8, 1, 9, 3, 2, 4, 7, 6, 5]];

console.log(sudoku(sudokuGrid1));