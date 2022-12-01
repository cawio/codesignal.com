enum Swipe {
    Up = 0,
    Right = 1,
    Down = 2,
    Left = 3,
}

class Position {
    constructor(
        public y: number,
        public x: number,
    ) {}
}

class Tile {
    readonly pos: Position;

    constructor (
        y: number,
        x: number,
        public content: number,
    ) {
        this.pos = new Position(y, x);
    }
}

class Grid {
    board: Tile[][] = [];
    width = 4;
    height = 4;

    constructor (
        gridState: number[][],
    ) {
        for (let i = 0; i < this.height; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.width; j++) {
                const el = gridState[i][j] != 0 ? gridState[i][j] : 0;
                this.board[i][j] = new Tile(i, j, el);
            }
        }
    }

    onSwipe() {
        for (let i = 0; i < this.height; i++) {
            for (let j = this.width - 1; j > 0; j--) {
                const el1 = this.board[i][j].content;
                const el2 = this.board[i][j - 1].content;
                if (el1 == 0 || el2 == 0) {
                    continue;
                }
                console.log(el1, el2)
                
                if (el1 != el2) {
                    continue;
                }



            }
        }
    }
}

class Game2048 {
    private grid: Grid;
    private userInputs: Swipe[] = [];
    constructor (
        readonly id: number,
        gridState: number[][],
        path: string,
        readonly expOut: number[][],
    ) {
        this.grid = new Grid(gridState);
        path.split('').forEach(el => {
            switch(el) {
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

    private applyUserInputs() {
        for (let input of this.userInputs) {
            switch(input) {
                case Swipe.Up:
                    // rotate 45° clockwise
                    break;
                case Swipe.Right:
                    // dont need to rotate
                    break;
                case Swipe.Down:
                    // rotate 45° counterclockwise
                    break;
                case Swipe.Left:
                    // rotate 90° clockwise
                    break;
                default:
                    throw new Error('incorrect input 😑');
            }
            this.grid.onSwipe();
            
        }
    }

    public runTest(): string {
        this.applyUserInputs()
        const testPassed: boolean = JSON.stringify(this.expOut) == JSON.stringify(this.grid.board.map(row => row.map(el => el.content ? el.content : 0)));
        return `Test ${String(this.id).padStart(2, '0')}: ${testPassed ? 'passed 👍' : 'failed 👎'}`;
    }
}
const task156Tests = [
    new Game2048 (
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
];

task156Tests.forEach(el => console.log(el.runTest()));