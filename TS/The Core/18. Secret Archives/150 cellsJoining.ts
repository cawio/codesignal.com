class Task150 {
    constructor(
        private testId: number,
        readonly table: string[],
        private coords: number[][],
        private expOut: string[]
    ) {}

    public cellsJoining(table: string[], coords: number[][]): string[] {
        // translate cords
        let mappedTable = this.mapTable(table);
        const rowMapping = Array.from(mappedTable[0]).sort((a, b) => a - b);
        const colMapping = Array.from(mappedTable[1]).sort((a, b) => a - b);
    
        const ceil = rowMapping[coords[1][0]];
        const floor = rowMapping[coords[0][0] + 1];
        const leftBorder = colMapping[coords[0][1]];
        const rightBorder = colMapping[coords[1][1] + 1];

        // replace + marks along the top and bottom borders if no other cells branch of there
        for (let col = leftBorder + 1; col < rightBorder; col++) {
            if (ceil === 0 && table[ceil][col] === '+') {
                table[ceil] = this.replaceChar(table[ceil], col, '-');
            }

            if (floor === table.length - 1 && table[floor][col] === '+') {
                table[floor] = this.replaceChar(table[floor], col, '-');
            }
        }
    
        // replace + marks along the left and bottom borders if no if no other cells branch of there
        for (let row = ceil + 1; row < floor; row++) {
            if (leftBorder === 0 && table[row][leftBorder] === '+') {
                table[row] = this.replaceChar(table[row], leftBorder, '|');
            }

            if (rightBorder === table[0].length - 1 && table[row][rightBorder] === '+') {
                table[row] = this.replaceChar(table[row], rightBorder, '|');
            }
        }
        
        // remove all | inside the joined cells
        for (let row = ceil + 1; row < floor; row++) {
            for (let col = leftBorder + 1; col < rightBorder; col++) {
                if (/[\-+|]/.test(table[row][col])) {
                    table[row] = this.replaceChar(table[row], col, ' ');
                }
            }
        }
        
        return table;
    }

    private replaceChar(str: string, index: number, replacement: string): string {
        return str.slice(0, index) + replacement + str.slice(index + 1);
    }

    private mapTable(table: string[]): Set<number>[] {
        const rowIndices = new Set<number>();
        const colIndices = new Set<number>();
        
        for (let row = 0; row < table.length; row++) {
            for (let col = 0; col < table[0].length; col++) {
                if (table[row][col] === '+') {
                    rowIndices.add(row);
                    colIndices.add(col);
                }
            }
        }   
        
        return [rowIndices, colIndices];
    }
    
    public try(): string {
        const testPassed: boolean = JSON.stringify(this.expOut) == JSON.stringify(this.cellsJoining(this.table, this.coords));
        return `Test ${this.testId}: ${testPassed ? 'passed 😎' : 'failed 😢'}`;
    }
}

const task150_1: Task150 = new Task150(
    1, 
    ["+----+--+-----+----+",
     "|abcd|56|!@#$%|qwer|",
     "|1234|78|^&=()|tyui|",
     "+----+--+-----+----+",
     "|zxcv|90|77777|stop|",
     "+----+--+-----+----+",
     "|asdf|~~|ghjkl|100$|",
     "+----+--+-----+----+"],
    [[2,0], [1,1]],
    ["+----+--+-----+----+",
     "|abcd|56|!@#$%|qwer|",
     "|1234|78|^&=()|tyui|", 
     "+----+--+-----+----+", 
     "|zxcv 90|77777|stop|", 
     "|       +-----+----+", 
     "|asdf ~~|ghjkl|100$|",
     "+-------+-----+----+"]
);
console.log(task150_1.try());
