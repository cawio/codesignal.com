enum GameElement {
    Empty = 0,
    Source,
    Sink,
    Vertical,
    Horizontal,
    BottomAndRight,
    BottomAndLeft,
    TopAndLeft,
    TopAndRight,
    VertAndHor
}

enum Status {
    Empty = 0,
    Full = 1
}

enum Flow {
    NoFlow  = 0,
    Up      = 1,
    Down    = 2,
    Left    = 3,
    Right   = 4
}

interface PositionObj {
    y: number;
    x: number;
}

class Tile {
    id: string;
    position: PositionObj;
    type: GameElement;
    status = Status.Empty;

    constructor (
        id: string,
        y: number,
        x: number,
        type: GameElement
        ) {
        this.id = id;
        this.position = {y: y, x: x};
        this.type = type;
    }
}

class PipesGameBoard {
    board: Tile[][];
    sources: PositionObj[] = [];
    height: number;
    width: number;

    constructor (state: string[]) {
        this.height = state.length;
        this.width = state[0].length;
        this.board = state.map((str, i) => {
            return str
            .split('')
                .map((el, j) => {
                    if (el == '0') {
                        //empty field
                        return new Tile(' ', i, j, GameElement.Empty);
                    } else if (isNaN(Number(el))) {
                        if (/[A-Z]/.test(el)) {
                            // Capital letters -> sink
                            new Tile(el, i, j, GameElement.Sink)
                            return new Tile(el, i, j, GameElement.Sink);
                        }
                        // lowercase letters -> source
                        this.sources.push({y: i, x: j});
                        return new Tile(el, i, j, GameElement.Source);
                    } else {
                        // rest are pipes
                        let tmp = new Tile('p', i, j, GameElement.Empty);
                        switch (el) {
                            case '1':
                                // vertical pipe
                                tmp.type = GameElement.Vertical;
                                break;
                            case '2':
                                // horizontal pipe
                                tmp.type = GameElement.Horizontal;
                                break;
                            case '3':
                                // corners
                                tmp.type = GameElement.BottomAndRight;
                                break;
                            case '4':
                                tmp.type = GameElement.BottomAndLeft;
                                break;
                            case '5':
                                tmp.type = GameElement.TopAndLeft;
                                break;
                            case '6':
                                tmp.type = GameElement.TopAndRight;
                                break;
                            case '7':
                                // + shape
                                tmp.type = GameElement.VertAndHor;
                                break;
                            }

                        return tmp;
                    }
                });
        });
    }
}

interface PipeComp {
    pipe: GameElement;
    flow: Flow;
    comp: GameElement[];
}

class PipesGame {
    private game: PipesGameBoard;
    private curPos:  PositionObj = {y: 0, x: 0};
    readonly compabilities: PipeComp[] = [
        {pipe: GameElement.Vertical, flow: Flow.Up, comp: [GameElement.Vertical, GameElement.BottomAndRight, GameElement.BottomAndLeft, GameElement.VertAndHor]},
        {pipe: GameElement.Vertical, flow: Flow.Down, comp: [GameElement.Vertical, GameElement.TopAndLeft, GameElement.TopAndRight, GameElement.VertAndHor]},
        {pipe: GameElement.Horizontal, flow: Flow.Left, comp: [GameElement.Horizontal, GameElement.BottomAndRight, GameElement.TopAndRight, GameElement.VertAndHor]},
        {pipe: GameElement.Horizontal, flow: Flow.Right, comp: [GameElement.Horizontal, GameElement.BottomAndLeft, GameElement.TopAndLeft, GameElement.VertAndHor]},
        {pipe: GameElement.BottomAndRight, flow: Flow.Left, comp: [GameElement.Vertical, GameElement.TopAndLeft, GameElement.TopAndRight, GameElement.VertAndHor]},
        {pipe: GameElement.BottomAndRight, flow: Flow.Up, comp: [GameElement.Horizontal, GameElement.BottomAndLeft, GameElement.TopAndLeft, GameElement.VertAndHor]},
        {pipe: GameElement.BottomAndLeft, flow: Flow.Right, comp: [GameElement.Vertical, GameElement.TopAndLeft, GameElement.TopAndRight, GameElement.VertAndHor]},
        {pipe: GameElement.BottomAndLeft, flow: Flow.Up, comp: [GameElement.Horizontal, GameElement.BottomAndRight, GameElement.TopAndRight, GameElement.VertAndHor]},
        {pipe: GameElement.TopAndLeft, flow: Flow.Down, comp: [GameElement.Horizontal, GameElement.BottomAndRight, GameElement.TopAndRight, GameElement.VertAndHor]},
        {pipe: GameElement.TopAndLeft, flow: Flow.Right, comp: [GameElement.Vertical, GameElement.BottomAndRight, GameElement.BottomAndLeft, GameElement.VertAndHor]},
        {pipe: GameElement.TopAndRight, flow: Flow.Down, comp: [GameElement.Horizontal, GameElement.BottomAndLeft, GameElement.TopAndLeft, GameElement.VertAndHor]},
        {pipe: GameElement.TopAndRight, flow: Flow.Left, comp: [GameElement.Vertical, GameElement.BottomAndRight, GameElement.BottomAndLeft, GameElement.VertAndHor]},
        {pipe: GameElement.VertAndHor, flow: Flow.Up, comp: [GameElement.Vertical, GameElement.BottomAndRight, GameElement.BottomAndLeft, GameElement.VertAndHor]},
        {pipe: GameElement.VertAndHor, flow: Flow.Down, comp: [GameElement.Vertical, GameElement.TopAndLeft, GameElement.TopAndRight, GameElement.VertAndHor]},
        {pipe: GameElement.VertAndHor, flow: Flow.Left, comp: [GameElement.Horizontal, GameElement.BottomAndRight, GameElement.TopAndRight, GameElement.VertAndHor]},
        {pipe: GameElement.VertAndHor, flow: Flow.Right, comp: [GameElement.Horizontal, GameElement.BottomAndLeft, GameElement.TopAndLeft, GameElement.VertAndHor]}
    ];

    constructor (
        private id: number,
        private state: string[],
        private expOut: number
    ) {
        this.game = new PipesGameBoard(this.state);
    }

    private determineFlow(pipe: GameElement, flowDir: Flow): Flow {
        if (pipe == GameElement.BottomAndRight) {
            switch(flowDir) {
                case Flow.Up:
                    flowDir = Flow.Right;
                    break;
                case Flow.Left:
                    flowDir = Flow.Down;
                    break;
            }
        } else if (pipe == GameElement.BottomAndLeft) {
            switch(flowDir) {
                case Flow.Up:
                    flowDir = Flow.Left;
                    break;
                case Flow.Right:
                    flowDir = Flow.Down;
                    break;
            }
        } else if (pipe == GameElement.TopAndLeft) {
            switch(flowDir) {
                case Flow.Down:
                    flowDir = Flow.Left;
                    break;
                case Flow.Right:
                    flowDir = Flow.Up;
                    break;
            }
        } else if (pipe == GameElement.TopAndRight) {
            switch(flowDir) {
                case Flow.Down:
                    flowDir = Flow.Right;
                    break;
                case Flow.Left:
                    flowDir = Flow.Up;
                    break;
            }
        }

        return flowDir;
    }

    private compatible(p1: GameElement, p2: GameElement, d: Flow): boolean {
        return this.compabilities.some(option => {
            if(option.pipe == p1 && option.flow == d && option.comp.includes(p2)) {
                return true;
            }

            return false;
        });
    }

    private flowUp() {
        this.curPos.y -= 1;
    }

    private flowDown() {
        this.curPos.y += 1;
    }

    private flowRight() {
        this.curPos.x += 1;
    }

    private flowLeft() {
        this.curPos.x -= 1;
    }

    private flow(d: number): void {
        switch(d) {
            case Flow.Up:
                this.flowUp();
                break;
            case Flow.Down:
                this.flowDown();
                break;
            case Flow.Right:
                this.flowRight();
                break;
            case Flow.Left:
                this.flowLeft();
                break;
        }
    }

    calcSolution(): number {
        type OffsetFlowPair = {
            pipeType: GameElement;
            flow: Flow;
        }

        const sourceConnectors: OffsetFlowPair[] = [
            {pipeType: GameElement.VertAndHor, flow: Flow.Right},
            {pipeType: GameElement.VertAndHor, flow: Flow.Left},
            {pipeType: GameElement.VertAndHor, flow: Flow.Up},
            {pipeType: GameElement.VertAndHor, flow: Flow.Down}
        ];

        const invalidPos = (pos: PositionObj): boolean => {
            if (pos.y < 0 || pos.y > this.game.height - 1 ||
                pos.x < 0 || pos.x > this.game.width - 1) {
                    return true;
            }

            return false;
        }

        const getElementAtPos = (pos: PositionObj): Tile => {
            return this.game.board[pos.y][pos.x];
        }

        const leaking = (pos: PositionObj): boolean => {
            if (getElementAtPos(pos).type == GameElement.Empty ||
                getElementAtPos(pos).type == GameElement.Source) {
                    return true;
            }

            return false;
        }

        const wrongSink = (pos: PositionObj, target: string): boolean => {
            const el = getElementAtPos(pos);
            if(el.type != GameElement.Sink) {
                return false;
            }
            if (el.id != target) {
                return true;
            }

            return false;
        }

        type GameData = {
            length: number;
            alreadyFull: number;
            leaked: boolean;
        }

        let gameData: GameData[] = [];
        for (let i = 0; i < this.game.sources.length; i++) {
            for (let j = 0; j < sourceConnectors.length; j++) {
                this.curPos = JSON.parse(JSON.stringify(this.game.sources[i]));
                let targetID = this.game.board[this.curPos.y][this.curPos.x].id.toUpperCase();
                let curDir = sourceConnectors[j].flow;

                // move
                this.flow(curDir);

                // check invalid positon and compatibility
                if (invalidPos(this.curPos) || !this.compatible(sourceConnectors[j].pipeType, getElementAtPos(this.curPos).type, curDir)) {
                    continue;
                }

                let pathData: GameData = {
                    length: 0,
                    alreadyFull: 0,
                    leaked: false
                }

                if (getElementAtPos(this.curPos).status == Status.Empty) {
                    pathData.length++;
                    this.game.board[this.curPos.y][this.curPos.x].status = Status.Full;
                } else {
                    pathData.alreadyFull++;
                }

                curDir = this.determineFlow(getElementAtPos(this.curPos).type, curDir);

                // continue along path
                while (!invalidPos(this.curPos) || this.compatible(sourceConnectors[j].pipeType, getElementAtPos(this.curPos).type, curDir)) {
                    this.flow(curDir);
                    if (invalidPos(this.curPos)) {
                        // leaking out of bounds
                        pathData.leaked = true;
                        break;
                    }

                    if (leaking(this.curPos) || wrongSink(this.curPos, targetID)) {
                        // leaking or wrong sink
                        pathData.leaked = true;
                        break;
                    }

                    if (getElementAtPos(this.curPos).id == targetID) {
                        // got to a valid sink
                        break;
                    }

                    // if necessary change flow direction
                    curDir = this.determineFlow(getElementAtPos(this.curPos).type, curDir);

                    if (getElementAtPos(this.curPos).status == Status.Empty) {
                        // set status to full and add 1 to path length
                        this.game.board[this.curPos.y][this.curPos.x].status = Status.Full;
                        pathData.length++;
                    } else {
                        pathData.alreadyFull++;
                    }

                }

                gameData.push(pathData);
            }
        }

        let result = 0;
        if (gameData.some(el => el.leaked)) {
            // determine shortest path where a leak occured
            let pathsWithLeak = gameData.filter(path => path.leaked);
            let pathLenghts: number[] = pathsWithLeak.map(path => {
                return path.length + path.alreadyFull;
            });
            let min = Math.min(...pathLenghts);

            // if path length is shorter then min add path length to result
            // otherwise add min to result
            gameData.forEach(path => {
                if (path.length > min) {
                    result += min;
                } else {
                    result += path.length;
                }
            });

            // return for incorrect state has to be negativ
            result = -1 * (result);
        } else {
            // sum up 
            let filledPipes: number = gameData
                .map(path => {
                    return path.length + path.alreadyFull;
                })
                .reduce((sum, pipes) => {
                    return sum += pipes;
            }, 0);

            // sum up duplicate filled Pipes
            let dupe = gameData
                .map(path => {
                    return path.alreadyFull
                })
                .reduce((sum, fullPipes) => {
                    return sum += fullPipes
                }, 0);

            result = filledPipes - dupe
        }

        return result;
    }

    public runTest(): string {
        const testPassed: boolean = this.expOut == this.calcSolution();
        return `Test ${String(this.id).padStart(2, '0')}: ${testPassed ? 'passed 👍' : 'failed 👎'}`;
    }
}

const task155Tests: PipesGame[] = [
    new PipesGame(
        1,
        ["a224C22300000",
         "0001643722B00",
         "0b27275100000",
         "00c7256500000",
         "0006A45000000"],
        19
    ),
    new PipesGame(
        2,
        ["a000",
         "000A"],
        0
    ),
    new PipesGame(
        3,
        ["a727272777A"],
        9
    ),
    new PipesGame(
        4,
        ["a",
         "7",
         "1",
         "7",
         "7",
         "1",
         "1",
         "A"],
        6
    ),
    new PipesGame(
        5,
        ["A0000b0000",
         "0000000000",
         "0000000000",
         "0000a00000",
         "0000000000",
         "0c00000000",
         "01000000B0",
         "0C00000000"],
        1
    ),
    new PipesGame(
        6,
        ["0000000000",
         "0000000000",
         "0000000000",
         "0000000000",
         "0000000000",
         "0000000000",
         "0000000000",
         "0000000000"],
        0
    ),
    new PipesGame(
        7,
        ["0020400040",
         "1203300300",
         "7340000000",
         "2040100000",
         "7000500700",
         "0000200000",
         "0002303000",
         "0000000600"],
        0
    ),
    new PipesGame(
        8,
        ["0002270003777z24",
         "3a40052001000101",
         "1064000001000101",
         "1006774001032501",
         "1000001001010001",
         "1010001001064035",
         "6227206A0622Z250"],
        -48
    ),
    new PipesGame(
        9,
        ["00p2400003777z24",
         "1a406P0001000101",
         "1064000001000101",
         "1006774001032501",
         "1000001001010001",
         "1000001001064035",
         "6227276A0622Z250"],
        43
    ),
    new PipesGame(
        10,
        ["3277222400000000",
         "1000032A40000000",
         "1000010110000000",
         "1Q2227277q000000",
         "1000010110000000",
         "1000062a50000000",
         "6222222500000000"],
        40
    ),
    new PipesGame(
        11,
        ["3222222400000000",
         "1000032A40000000",
         "1000010110000000",
         "72q227277Q000000",
         "1000010110000000",
         "1000062a50000000",
         "6222222500000000"],
        -12
    ),
    new PipesGame(
        19,
        ["a2222277272227772224",
         "100000064222B0000001",
         "1000b227500040000001",
         "10000000000000070001",
         "700030000d2400050001",
         "70020000000100000007",
         "70000000000100000007",
         "7000z40000062222D007",
         "70000640000000000007",
         "70000064000405000007",
         "70000006400000167007",
         "70037722500002323007",
         "70010000000000000007",
         "700100000000000003Z7",
         "70070322227727772507",
         "70062500000000000007",
         "70001234567005430007",
         "70004560000076020007",
         "70123000000000010007",
         "6227777772222722722A"],
        -34
    ),
];

task155Tests.forEach((el: PipesGame) => console.log(el.runTest()));
