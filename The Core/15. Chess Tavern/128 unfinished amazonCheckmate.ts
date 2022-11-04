class Task128 {
    constructor (
        private king: string,
        private amazon: string,
        private expOut: number[]
    ) {}

    getResults(): string {
        return 'expOut: ' + String(this.expOut) + ' | myOut: ' + String(amazonCheckmate(this.king, this.amazon));
    }
}

function amazonCheckmate(king: string, amazon: string): number[] {

    return []
}

const task128_1: Task128 = new Task128('d3', 'e4', [5, 21, 0, 29]);
console.log(task128_1.getResults());