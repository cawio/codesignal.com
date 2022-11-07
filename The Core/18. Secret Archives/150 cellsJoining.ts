class Task150 {
    constructor(
        private testId: number,
        private table: string[],
        private coords: number[][],
        private expOut: string[]
    ) {}

    try(): string {
        const testPassed: boolean = this.expOut === cellsJoining(this.table, this.coords);
        return `Test ${this.testId}: ${testPassed ? 'passed 😎' : 'failed 😢'}`;
    }
}

function cellsJoining(table: string[], coords: number[][]): string[] {
    // find row
    
    return [];
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
)
console.log(task150_1.try());