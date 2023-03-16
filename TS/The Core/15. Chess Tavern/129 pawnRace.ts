class pawnRace {
    constructor(
        readonly id: number,
        readonly white: string,
        readonly black: string, 
        readonly toMove: string,
        readonly expOut: string
    ) {}

    public solution(): string {
        // translate chess notation to num coords
        let w: number[] = [this.white.charCodeAt(0) - 97, this.white.charCodeAt(1) - 49];
        let b: number[] = [this.black.charCodeAt(0) - 97, this.black.charCodeAt(1) - 49];

        // if they are on same col and black is not behind white they will run into eachother
        if (w[0] == b[0] && b[1] > w[1]) {
            return "draw";
        }
        
        return this.toMove == "w" ? this.advanceWhite(w, b) : this.advanceBlack(w, b)
    }

    private advanceWhite(w: number[], b: number[] ): string {
        // if they are on neighbouring cols and black is one above
        if (Math.abs(w[0] - b[0]) == 1 && b[1] - w[1] == 1) {
            return "white";
        }

        // advance 2 if row is 2
        if (w[1] == 1 && (b[1] % 2 == 1 || Math.abs(w[0] - b[0]) > 1)) {
            w[1] += 1;
        }
        w[1] += 1;
        
        // reached end of board
        if (w[1] == 7) {
            return "white"
        };

        // blacks move
        return this.advanceBlack(w, b);
    }

    private advanceBlack(w: number[], b: number[]): string {
        // if they are on neighbouring cols and white is one above
        if (Math.abs(w[0] - b[0]) == 1 && b[1] - w[1] == 1) {
            return "black";
        }
        
        // advance 2 if row is 7
        if (b[1] == 6 && (w[1] % 2 == 0 || Math.abs(w[0] - b[0]) > 1)) {
            b[1] -= 1;
        }
        b[1] -= 1;

        // reached end of board
        if (b[1] == 0) {
            return "black";
        }

        // whites move
        return this.advanceWhite(w, b);
    }

    public try(): string {
        const testPassed: boolean = this.expOut === this.solution();
        return `Test ${this.id}: ${testPassed ? 'passed 😎' : 'failed 😢'}`;
    }
}

const task129_1: pawnRace = new pawnRace(1, 'e2', 'e7', 'w', 'draw');
console.log(task129_1.try());

const task129_2: pawnRace = new pawnRace(2, 'e3', 'd7', 'b', 'black');
console.log(task129_2.try());

const task129_3: pawnRace = new pawnRace(3, 'a7', 'h2', 'w', 'white');
console.log(task129_3.try());

const task129_4: pawnRace = new pawnRace(4, 'c5', 'b7', 'w', 'black');
console.log(task129_4.try());

