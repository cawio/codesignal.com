class Task149 {
    constructor(
        private testNumber: number,
        private notation: string,
        private expOut: string
    ) {}

    try(): string {
        const testPassed: boolean = this.expOut === chessNotation(this.notation);
        return `Test ${this.testNumber} ${testPassed ? 'passed 😎' : 'failed 😢'}`;
    }
}
function chessNotation(notation: string): string {
    let notArray = notation
        .split('/')
        .map((row: string) => {
            if (!(/[1-9]/g.test(row))) {
                return row;
            }
            let rowArray: string = row
                .split('')
                .map((char: string) => {
                    if(!isNaN(Number(char))) {
                        return '-'.repeat(Number(char));
                    }
                    return char;
                })
                .join('');

            return rowArray;
        });


    console.table(notArray)
    /* 
        todo: 
        1. split into single letter meaning string[][]
        2. implement rotation
    */


    return '';
}

const task149_1: Task149 = new Task149(1, 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR', 'RP4pr/NP4pn/BP4pb/QP4pq/K2P2pk/BP4pb/NP4pn/RP4pr');
console.log(task149_1.try());