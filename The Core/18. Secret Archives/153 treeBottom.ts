class TreeBottom {
    constructor (
        private id: number,
        private tree: string,
        private expOut: number[],
    ) {}

    public solution(treeNodes: string): number[] {
        let levels: number[][] = [];
        let level: number = -1;
        treeNodes.match(/[()]|\d+/g)?.forEach((token: string) => {
            if (token == '(') {
                level++;
            } else if (token == ')') {
                level--;
            } else {
                if (levels[level] == undefined) {
                    levels[level] = [];
                }
                levels[level].push(Number(token));
            }
        });

        return levels[levels.length - 1];
    }

    public try(): string {
        const testPassed: boolean = this.expOut === this.solution(this.tree);
        return `Test ${String(this.id).padStart(2, '0')}: ${testPassed ? 'passed 😊' : 'failed 😣'}`;
    }
}

let task152Tests: TreeBottom[] = [
    new TreeBottom(1, '(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))', [5, 11, 4]),
]

task152Tests.forEach((el: TreeBottom) => console.log(el.try()));