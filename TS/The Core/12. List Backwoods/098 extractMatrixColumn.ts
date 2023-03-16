function extractMatrixColumn(matrix: number[][], column: number): number[] {
    let extrCol: number[] = []
    matrix.forEach((el: number[]) => extrCol.push(el[column]));

    return extrCol;
}