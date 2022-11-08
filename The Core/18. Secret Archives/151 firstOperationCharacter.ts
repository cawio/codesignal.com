class FirstOpChar {
    constructor (
        private id: number,
        private expr: string,
        private expOut: number,
    ) {}

    public solution(expr: string): number {
        // if no parantheses are present the leftmost * is looked for
        // if no * is present the leftmost + is looked for
        if (!/\(.+?\)/g.test(expr)) {
            if (expr.includes('*')) {
                return expr.indexOf('*');
            } else {
                return expr.indexOf('+');
            }
        }

        type TokenObj = {
            token: string;
            i: number;
        }

        let levels: TokenObj[][] = [];
        let level: number = 0;

        expr.match(/[()\d+\+\* ]/g)?.forEach((token: string, i: number) => {
            if (token == '(') {
                level++;
            } else if (token == ')') {
                level--;
            } else {
                if (levels[level] == undefined) {
                    levels[level] = [];
                }
                levels[level].push({token, i});
            }
        });

        const deepestLevel: TokenObj[] = levels[levels.length - 1].filter((el: TokenObj) => isNaN(Number(el.token)));

        if (deepestLevel.length == 1) {
            return deepestLevel[0].i;
        }
        deepestLevel
        if (deepestLevel.some((el: TokenObj) => el.token == '*')) {
            // filter out + and return TokenObj with smallest index
        } else {
            // return smallest index
        }

        return deepestLevel[0].i;
    }

    public try(): string {
        const testPassed: boolean = this.expOut === this.solution(this.expr);
        return `Test ${String(this.id).padStart(2, '0')}: ${testPassed ? 'passed 😊' : 'failed 😣'}`;
    }
}

let task151Tests: FirstOpChar[] = [
    // new FirstOpChar(1, "(2 + 2) * 2", 3),
    new FirstOpChar(3, "((2 + 2) * 2) * 3 + (2 + (2 * 2))", 28),
];
task151Tests.forEach((el: FirstOpChar) => console.log(el.try()));