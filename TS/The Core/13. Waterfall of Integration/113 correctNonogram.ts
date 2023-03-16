function correctNonogram(size: number, nonogramField: string[][]): boolean {
    let infoLength: number = Math.floor((size + 1) / 2);
    let correct: boolean = true;
  
    for (let i = infoLength; i < nonogramField.length; i++) {
      let row: number[] = [];
      let column: number[] = [];
      let nextC: string = '';
      let nextR: string = '';
      let k: number = 0;
      let n: number = 0;
      for (let j = 0; j < infoLength; j++) {
        nextC = nonogramField[j][i];
        nextR = nonogramField[i][j];
        if (nextC !== "-") {
          column.push(Number(nextC));
        }
        if (nextR !== "-") {
          row.push(Number(nextR));
        }
      }
      k = infoLength;
      while (correct && row.length) {
        n = row.shift();
        while (k < nonogramField.length && nonogramField[i][k] === ".") {
          k++;
        }
        if (
          n + k > nonogramField.length ||
          (n > 0 && k == nonogramField.length)
        ) {
          correct = false;
          break;
        }
        for (let h = 0; h < n; h++) {
          if (nonogramField[i][k] !== "#") {
            correct = false;
          }
          k++;
        }
        if (k !== nonogramField.length && nonogramField[i][k] === "#") {
          correct = false;
          break;
        }
      }
      while (correct && k < nonogramField.length) {
        if (nonogramField[i][k] === "#") {
          correct = false;
        }
        k++;
      }
      k = infoLength;
      while (correct && column.length) {
        n = column.shift();
        while (k < nonogramField.length && nonogramField[k][i] === ".") {
          k++;
        }
        if (
          n + k > nonogramField.length ||
          (n > 0 && k == nonogramField.length)
        ) {
          correct = false;
          break;
        }
        for (let h = 0; h < n; h++) {
          if (nonogramField[k][i] !== "#") {
            correct = false;
          }
          k++;
        }
        if (k !== nonogramField.length && nonogramField[k][i] === "#") {
          correct = false;
          break;
        }
      }
      while (correct && k < nonogramField.length) {
        if (nonogramField[k][i] === "#") {
          correct = false;
        }
        k++;
      }
      if (!correct) {
        break;
      }
    }
  
    return correct;
}

interface Task113 {
    s: number;
    nF: string[][];
};

const task113_1: Task113 = {s: 5, 
                            nF: [["-", "-", "-", "-", "-", "-", "-", "-"],
                                 ["-", "-", "-", "2", "2", "1", "-", "1"],
                                 ["-", "-", "-", "2", "1", "1", "3", "3"],
                                 ["-", "3", "1", "#", "#", "#", ".", "#"],
                                 ["-", "-", "2", "#", "#", ".", ".", "."],
                                 ["-", "-", "2", ".", ".", ".", "#", "#"],
                                 ["-", "1", "2", "#", ".", ".", "#", "#"],
                                 ["-", "-", "5", "#", "#", "#", "#", "#"]]
                           };
console.log(correctNonogram(task113_1.s, task113_1.nF));

const task113_2: Task113 = {s: 5, 
                            nF: [["-", "-", "-", "-", "-", "-", "-", "-"],
                                 ["-", "-", "-", "-", "-", "1", "-", "-"],
                                 ["-", "-", "-", "3", "3", "2", "5", "5"],
                                 ["-", "-", "3", ".", ".", ".", "#", "#"],
                                 ["-", "2", "2", "#", "#", "#", "#", "#"],
                                 ["-", "-", "5", "#", "#", "#", "#", "#"],
                                 ["-", "-", "5", "#", "#", "#", "#", "#"],
                                 ["-", "-", "2", ".", ".", ".", "#", "#"]]
                           };
console.log(correctNonogram(task113_2.s, task113_2.nF));