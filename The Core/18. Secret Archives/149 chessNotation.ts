class Task149 {
    constructor(
        private testNumber: number,
        private notation: string,
        private expOut: string
    ) {}

    try(): string {
        const testPassed: boolean = this.expOut === chessNotation(this.notation);
        return `Test ${this.testNumber}: ${testPassed ? 'passed 😎' : 'failed 😢'}`;
    }
}

function chessNotation(notation: string): string {
    // create board as array from notation string
    let boardLayout: string[][] = notation
        .split('/')
        .map((row: string) => {
            if (!(/[1-9]/g.test(row))) {
                return row.split('');
            }

            let rowArray: string = row
                .split('')
                .map((char: string) => {
                    if(!isNaN(Number(char))) {
                        return '1'.repeat(Number(char));
                    }
                    return char;
                })
                .join('');

            return rowArray.split('');
        });

    // 90° clockwise rotation -> reading col from bottom to top
    let colArray: string[] = [];
    for (let i = 0; i < boardLayout[0].length; i++) {
        let tmpCol: string = '';
        for (let j = boardLayout.length - 1; j > -1; j--) {
            tmpCol += boardLayout[j][i];
        }
        colArray.push(tmpCol);
    }

    // sum 1's
    colArray = colArray.map((col: string) => sumDigitSubstring(col));

    return colArray.join('/');
}

function sumDigitSubstring(s: string): string {
    let final: string = '';
    let runningTotal: number = 0;
    for (let i = 0; i < s.length; i++) {
        const char: string = s[i];
        if (char !== '1') {
            final += char;
            continue;
        }
        runningTotal++;

        let j: number = i + 1;
        let nextChar: string = s[j];
        while (nextChar === '1') {
            runningTotal++;
            j++;
            nextChar = s[j];
        }
        final += String(runningTotal);
        runningTotal = 0;
        i = j - 1;
    }

    return final;
}

const task149_1: Task149 = new Task149(
    1,
    'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR',
    'RP4pr/NP4pn/BP4pb/QP4pq/K2P2pk/BP4pb/NP4pn/RP4pr'
);
console.log(task149_1.try());

const task149_2: Task149 = new Task149(
    2,
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
    'RP4pr/NP4pn/BP4pb/QP4pq/KP4pk/BP4pb/NP4pn/RP4pr'
);
console.log(task149_2.try());

const task149_3: Task149 = new Task149(
    3,
    '2kr3r/pp1nbppp/3p1n2/q1pPp1B1/4P1b1/2N2N2/PPP1BPPP/R2Q2RK',
    'RP2q1p1/1P4p1/1PN1p2k/Q3Ppnr/1B1Pp1b1/1PN2np1/RP1bB1p1/KP4pr'
);
console.log(task149_3.try());
