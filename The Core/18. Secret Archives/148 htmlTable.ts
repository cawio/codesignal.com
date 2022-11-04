function htmlTable(table: string, row: number, column: number): string {
    const rowStart: string = '<tr>';
    const rowEnd: string   = '</tr>';
    const thStart: string  = '<th>';
    const thEnd: string    = '</th>';

    let scuffedRows: string[] = [];
    // remove th
    while(table.includes(thStart)) {
        table = table.slice(0, table.indexOf(thStart) - 4).concat(table.slice(table.indexOf(thEnd) + 1));
    }
    // split into rows
    while(table.includes(rowStart)) {
        scuffedRows.push(table.slice(table.indexOf(rowStart), table.indexOf(rowEnd)));
        table = table.slice(table.indexOf(rowEnd) + 1);
    }
    // extract table content
    let fixedRows: string[][] = scuffedRows.map((row: string) => {
        row = row.replace(/<[\w\/]+>/g, ' ');
        return row
            .trim()
            .split(' ')
            .filter((el: string) => el != '');
    });

    if (row > fixedRows.length - 1 || column > fixedRows[0].length - 1) {
        return 'No such cell';
    }

    return fixedRows[row][column];
}


interface Task148 {
    t: string;
    r: number;
    c: number;
}

const task148_1: Task148 = {
    t: "<table><tr><td>1</td><td>TWO</td></tr><tr><td>three</td><td>FoUr4</td></tr></table>",
    r: 0,
    c: 1,
};
// console.log(
//     htmlTable(task148_1.t, task148_1.r, task148_1.c),
//     "TWO"
// );

const task148_7: Task148 = {
    t: "<table><tr><th>CIRCUMFERENCE</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr><tr><td>BITS</td><td>3</td><td>4</td><td>8</td><td>10</td><td>12</td><td>15</td></tr></table>",
    r: 0,
    c: 6
};
// console.log(
//     htmlTable(task148_7.t, task148_7.r, task148_7.c),
//     "No such cell"
// );

const task148_14: Task148 = {
    t: "<table><tr><th>CIRCUMFERENCE</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr><tr><td>BITS</td><td>3</td><td>4</td><td>8</td><td>10</td><td>12</td><td>15</td></tr></table>",
    r: 1,
    c: 6
};
console.log(
    htmlTable(task148_14.t, task148_14.r, task148_14.c),
    "15"
);