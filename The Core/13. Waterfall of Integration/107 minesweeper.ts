 function minesweeper(matrix: boolean[][]): number[][] {
	let mineCount = 0;
	let matrixOfNum: number[][] = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			mineCount = 0;
			if (j == 0) {
				matrixOfNum.push([]);
			}
			if (i > 0) {
				if (matrix[i - 1][j - 1]) {
					mineCount++;
				}
				if (matrix[i - 1][j]) {
					mineCount++;
				}
				if (matrix[i - 1][j + 1]) {
					mineCount++;
				}
			}
			if (matrix[i][j - 1]) {
				mineCount++;
			}
			if (matrix[i][j + 1]) {
				mineCount++;
			}
			if (i < matrix.length - 1) {
				if (matrix[i + 1][j - 1]) {
					mineCount++;
				}
				if (matrix[i + 1][j]) {
					mineCount++;
				}
				if (matrix[i + 1][j + 1]) {
					mineCount++;
				}
			}
			matrixOfNum[i][j] = mineCount;
		}
	}
	return matrixOfNum;
}

console.table(minesweeper([[true,false,false], [false,true,false], [false,false,false]]));

