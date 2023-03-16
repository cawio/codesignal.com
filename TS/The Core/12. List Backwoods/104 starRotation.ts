function starRotation(
  matrix: number[][],
  width: number,
  center: number[],
  t: number
): number[][] {
  width = Math.floor(width / 2);
  const x = center[1];
  const y = center[0];
  for (let j = 0; j < t % 8; j++) {
    for (let i = 1; i <= width; i++) {
      const result = matrix.map((subArr) => {
        return subArr.map((el: number) => {
          return el;
        });
      });
      result[y][x - i] = matrix[y + i][x - i];
      result[y - i][x - i] = matrix[y][x - i];
      result[y - i][x] = matrix[y - i][x - i];
      result[y - i][x + i] = matrix[y - i][x];
      result[y][x + i] = matrix[y - i][x + i];
      result[y + i][x + i] = matrix[y][x + i];
      result[y + i][x] = matrix[y + i][x + i];
      result[y + i][x - i] = matrix[y + i][x];
      matrix = result;
    }
  }

  return matrix;
}

interface Task104 {
  m: number[][];
  w: number;
  c: number[];
  t: number;
  expOut: number[][];
}

const task104_1: Task104 = {
  m: [
    [1, 0, 0, 2, 0, 0, 3],
    [0, 1, 0, 2, 0, 3, 0],
    [0, 0, 1, 2, 3, 0, 0],
    [8, 8, 8, 9, 4, 4, 4],
    [0, 0, 7, 6, 5, 0, 0],
    [0, 7, 0, 6, 0, 5, 0],
    [7, 0, 0, 6, 0, 0, 5],
  ],
  w: 7,
  c: [3, 3],
  t: 1,
  expOut: [
    [8, 0, 0, 1, 0, 0, 2],
    [0, 8, 0, 1, 0, 2, 0],
    [0, 0, 8, 1, 2, 0, 0],
    [7, 7, 7, 9, 3, 3, 3],
    [0, 0, 6, 5, 4, 0, 0],
    [0, 6, 0, 5, 0, 4, 0],
    [6, 0, 0, 5, 0, 0, 4],
  ],
};

console.table(task104_1.expOut);
console.table(starRotation(task104_1.m, task104_1.w, task104_1.c, task104_1.t));
