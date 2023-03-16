class Task127 {
    constructor (
        private n: number,
        private m: number,
        private expOut: number,
    ) {}

    getResults(): string {
        return 'expOut: ' + String(this.expOut) + ' | myOut: ' + String(chessTriangle(this.n, this.m));
    }
}

function chessTriangle(n: number, m: number): number {
    const offset: number[][] = [[2, 3],
                                [3, 3],
                                [2, 4],
                                [3, 4]];
    let count = 0;
    offset.forEach((el: number[]) => {
        const poss: number = (orders(n, m, el[0], el[1]) + orders(m, n, el[0], el[1])) * 8;
        count += poss;
    });

    return count;
}

function orders(n: number, m: number, x: number, y: number): number {
    if (n < x || m < y) {
        return 0;
    }
    const a: number = n - x + 1;
    const b: number = m - y + 1;

    return a * b;
}


const task127_1: Task127 = new Task127(2, 3, 8);
console.log(task127_1.getResults());