enum Swipe {
    Up = 0,
    Right = 1,
    Down = 2,
    Left = 3,
}

class Tile {
    constructor(
        public val: number,
    ) { }

    public setValue(n: number): void {
        this.val = n;
    }

    public resetValue() {
        this.val = 0;
    }

    public getValue(): number {
        return this.val;
    }
}

class Grid {
    grid: Tile[][] = [];
    readonly width = 4;
    readonly height = 4;

    constructor(
        gridState: number[][],
    ) {
        for (let i = 0; i < this.height; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this.width; j++) {
                const el = gridState[i][j];
                this.grid[i][j] = new Tile(el);
            }
        }
    }

    private shiftRight(row: Tile[]): Tile[] {
        let array: Tile[] = row.filter((tile: Tile) => {

            return tile.val != 0;
        });

        let rest: Tile[] = row.filter((tile: Tile) => {
            return tile.val == 0;
        });

        array.unshift(...rest);

        return array;
    }

    private getRotatedPos(cx: number, cy: number, x: number, y: number, angle: number): number[] {
        const radians = (Math.PI / 180) * angle;
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
        const nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
        const ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;

        return [Math.round(nx), Math.round(ny)];
    }

    public rotateGrid(angle: number): void {
        let gridCopy: Tile[][] = [];
        for (let i = 0; i < this.height; i++) {
            gridCopy[i] = [];
            for (let j = 0; j < this.width; j++) {
                const el = this.grid[i][j].getValue();
                gridCopy[i][j] = new Tile(el);
            }
        }

        this.grid.forEach((row, i) => {
            row.forEach((_, j) => {
                let newPos = this.getRotatedPos((this.height - 1) / 2, (this.width - 1) / 2, i, j, angle);
                this.grid[newPos[0]][newPos[1]] = gridCopy[i][j];
            });
        });
    }

    private combine(row: Tile[]): Tile[] {
        for (let i = this.width - 1; i > 0; i--) {
            let n1 = row[i].val;
            let n2 = row[i - 1].val;

            if (n1 == n2) {
                row[i].val = n1 + n2;
                row[i - 1].val = 0;
            }
        }

        return row;
    }

    public onSwipe() {
        // shift all numbers to the right
        this.grid = this.grid.map(row => {
            row = this.shiftRight(row);
            row = this.combine(row);
            row = this.shiftRight(row);

            return row;
        });
    }
}

class Game2048 {
    private grid: Grid;
    private userInputs: Swipe[] = [];
    constructor(
        readonly id: number,
        gridState: number[][],
        path: string,
        readonly expOut: number[][],
    ) {
        // init grid
        this.grid = new Grid(gridState);

        // translate instructions
        path.split('').forEach(el => {
            switch (el) {
                case 'U':
                    this.userInputs.push(Swipe.Up);
                    break;
                case 'R':
                    this.userInputs.push(Swipe.Right);
                    break;
                case 'D':
                    this.userInputs.push(Swipe.Down);
                    break;
                case 'L':
                    this.userInputs.push(Swipe.Left);
                    break;
            }
        });
    }

    private applyInput(angle: number): void {
        this.grid.rotateGrid(angle);
        this.grid.onSwipe();
        this.grid.rotateGrid(-angle);
    }

    public applyUserInputs(): void {
        for (let input of this.userInputs) {
            switch (input) {
                case Swipe.Up:
                    // rotate 90° clockwise
                    this.applyInput(90);
                    break;
                case Swipe.Right:
                    // dont need to rotate
                    this.grid.onSwipe();
                    break;
                case Swipe.Down:
                    // rotate 90° counter clockwise
                    this.applyInput(-90);
                    break;
                case Swipe.Left:
                    // rotate 180° clockwise
                    this.applyInput(180);
                    break;
                default:
                    throw new Error('incorrect input 😑');
            }
        }
    }

    public format(): number[][] {
        let array = this.grid.grid.map(row => row.map(el => el.val));
        return array;
    }

    public runTest(): string {
        this.applyUserInputs();
        const testPassed: boolean = JSON.stringify(this.expOut) == JSON.stringify(this.format());

        return `Test ${String(this.id).padStart(2, '0')}: ${testPassed ? 'passed 👍' : 'failed 👎'}`;
    }
}

// Test Cases
const task156Tests = [
    new Game2048(
        1,
        [[0, 0, 0, 0],
         [0, 0, 2, 2],
         [0, 0, 2, 4],
         [2, 2, 4, 8]],
        "RR",
        [[0, 0, 0, 0],
         [0, 0, 0, 4],
         [0, 0, 2, 4],
         [0, 0, 8, 8]]
    ),
    new Game2048(
        2,
        [[0, 0, 0, 2],
         [0, 0, 4, 2],
         [0, 0, 4, 2],
         [0, 0, 4, 2]],
        'D',
        [[0, 0, 0, 0],
         [0, 0, 0, 0],
         [0, 0, 4, 4],
         [0, 0, 8, 4]]
    ),
    new Game2048(
        3,
        [[0, 2, 2, 0],
         [0, 4, 2, 2],
         [2, 4, 4, 8],
         [2, 4, 0, 0]],
       "L",
        [[4, 0, 0, 0],
         [4, 4, 0, 0],
         [2, 8, 8, 0],
         [2, 4, 0, 0]]
    ),
    new Game2048(
        4,
        [[0, 0, 0, 2],
         [0, 0, 4, 2],
         [0, 0, 4, 2],
         [0, 0, 4, 2]],
        "DD",
        [[0, 0, 0, 0],
         [0, 0, 0, 0],
         [0, 0, 4, 0],
         [0, 0, 8, 8]]
    ),
];

task156Tests.forEach(el => {
    console.log(el.runTest())
});