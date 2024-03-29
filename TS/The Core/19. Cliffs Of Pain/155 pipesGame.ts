enum TileType {
    // non pipe tiles
    Empty = 0,
    Source,
    Sink,
    // pipes -> specifying where the openings are
    LeftRight,
    TopBottom,
    BottomRight,
    BottomLeft,
    TopLeft,
    TopRight,
    LeftRightTopBottom
}

enum Status {
    Empty = 0,
    Full = 1
}

enum Flow {
    NoFlow = 0,
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}

interface PositionObj {
    y: number;
    x: number;
}

class Tile {
    id: string;
    position: PositionObj;
    type: TileType;
    status = Status.Empty;

    constructor (
        id: string,
        y: number,
        x: number,
        type: TileType
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
                        return new Tile(' ', i, j, TileType.Empty);
                    } else if (isNaN(Number(el))) {
                        if (/[A-Z]/.test(el)) {
                            // Capital letters -> sink
                            return new Tile(el, i, j, TileType.Sink);
                        }
                        // lowercase letters -> source
                        this.sources.push({y: i, x: j});
                        return new Tile(el, i, j, TileType.Source);
                    } else {
                        // rest are pipes
                        let tmp = new Tile('p', i, j, TileType.Empty);
                        switch (el) {
                            case '1':
                                // vertical pipe
                                tmp.type = TileType.LeftRight;
                                break;
                            case '2':
                                // horizontal pipe
                                tmp.type = TileType.TopBottom;
                                break;
                            case '3':
                                // corners
                                tmp.type = TileType.BottomRight;
                                break;
                            case '4':
                                tmp.type = TileType.BottomLeft;
                                break;
                            case '5':
                                tmp.type = TileType.TopLeft;
                                break;
                            case '6':
                                tmp.type = TileType.TopRight;
                                break;
                            case '7':
                                // + shape
                                tmp.type = TileType.LeftRightTopBottom;
                                break;
                            }

                        return tmp;
                    }
                });
        });
    }
}

interface PipeComp {
    pipe: TileType;
    flow: Flow;
    comp: TileType[];
}

class PipesGame {
    private game: PipesGameBoard;
    private curPos:  PositionObj = {y: 0, x: 0};
    readonly compabilities: PipeComp[] = [
        {pipe: TileType.LeftRight, flow: Flow.Up, comp: [TileType.LeftRight, TileType.BottomRight, TileType.BottomLeft, TileType.LeftRightTopBottom]},
        {pipe: TileType.LeftRight, flow: Flow.Down, comp: [TileType.LeftRight, TileType.TopLeft, TileType.TopRight, TileType.LeftRightTopBottom]},
        {pipe: TileType.TopBottom, flow: Flow.Left, comp: [TileType.TopBottom, TileType.BottomRight, TileType.TopRight, TileType.LeftRightTopBottom]},
        {pipe: TileType.TopBottom, flow: Flow.Right, comp: [TileType.TopBottom, TileType.BottomLeft, TileType.TopLeft, TileType.LeftRightTopBottom]},
        {pipe: TileType.BottomRight, flow: Flow.Left, comp: [TileType.LeftRight, TileType.TopLeft, TileType.TopRight, TileType.LeftRightTopBottom]},
        {pipe: TileType.BottomRight, flow: Flow.Up, comp: [TileType.TopBottom, TileType.BottomLeft, TileType.TopLeft, TileType.LeftRightTopBottom]},
        {pipe: TileType.BottomLeft, flow: Flow.Right, comp: [TileType.LeftRight, TileType.TopLeft, TileType.TopRight, TileType.LeftRightTopBottom]},
        {pipe: TileType.BottomLeft, flow: Flow.Up, comp: [TileType.TopBottom, TileType.BottomRight, TileType.TopRight, TileType.LeftRightTopBottom]},
        {pipe: TileType.TopLeft, flow: Flow.Down, comp: [TileType.TopBottom, TileType.BottomRight, TileType.TopRight, TileType.LeftRightTopBottom]},
        {pipe: TileType.TopLeft, flow: Flow.Right, comp: [TileType.LeftRight, TileType.BottomRight, TileType.BottomLeft, TileType.LeftRightTopBottom]},
        {pipe: TileType.TopRight, flow: Flow.Down, comp: [TileType.TopBottom, TileType.BottomLeft, TileType.TopLeft, TileType.LeftRightTopBottom]},
        {pipe: TileType.TopRight, flow: Flow.Left, comp: [TileType.LeftRight, TileType.BottomRight, TileType.BottomLeft, TileType.LeftRightTopBottom]},
        {pipe: TileType.LeftRightTopBottom, flow: Flow.Up, comp: [TileType.LeftRight, TileType.BottomRight, TileType.BottomLeft, TileType.LeftRightTopBottom]},
        {pipe: TileType.LeftRightTopBottom, flow: Flow.Down, comp: [TileType.LeftRight, TileType.TopLeft, TileType.TopRight, TileType.LeftRightTopBottom]},
        {pipe: TileType.LeftRightTopBottom, flow: Flow.Left, comp: [TileType.TopBottom, TileType.BottomRight, TileType.TopRight, TileType.LeftRightTopBottom]},
        {pipe: TileType.LeftRightTopBottom, flow: Flow.Right, comp: [TileType.TopBottom, TileType.BottomLeft, TileType.TopLeft, TileType.LeftRightTopBottom]}
    ];

    constructor (
        private id: number,
        private state: string[],
        private expOut: number
    ) {
        this.game = new PipesGameBoard(this.state);
    }

    private determineFlow(pipe: TileType, flowDir: Flow): Flow {
        if (pipe == TileType.BottomRight) {
            switch(flowDir) {
                case Flow.Up:
                    flowDir = Flow.Right;
                    break;
                case Flow.Left:
                    flowDir = Flow.Down;
                    break;
            }
        } else if (pipe == TileType.BottomLeft) {
            switch(flowDir) {
                case Flow.Up:
                    flowDir = Flow.Left;
                    break;
                case Flow.Right:
                    flowDir = Flow.Down;
                    break;
            }
        } else if (pipe == TileType.TopLeft) {
            switch(flowDir) {
                case Flow.Down:
                    flowDir = Flow.Left;
                    break;
                case Flow.Right:
                    flowDir = Flow.Up;
                    break;
            }
        } else if (pipe == TileType.TopRight) {
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

    private compatible(p1: TileType, p2: TileType, d: Flow): boolean {
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

    private flow(dir: number): void {
        switch(dir) {
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
            pipeType: TileType;
            flow: Flow;
        }

        const sourceConnectors: OffsetFlowPair[] = [
            {pipeType: TileType.LeftRightTopBottom, flow: Flow.Right},
            {pipeType: TileType.LeftRightTopBottom, flow: Flow.Left},
            {pipeType: TileType.LeftRightTopBottom, flow: Flow.Up},
            {pipeType: TileType.LeftRightTopBottom, flow: Flow.Down}
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
            if (getElementAtPos(pos).type == TileType.Empty ||
                getElementAtPos(pos).type == TileType.Source) {
                    return true;
            }

            return false;
        }

        const wrongSink = (pos: PositionObj, target: string): boolean => {
            const el = getElementAtPos(pos);
            if(el.type != TileType.Sink) {
                return false;
            }
            if (el.id != target) {
                return true;
            }

            return false;
        }

        type PathData = {
            length: number;
            alreadyFull: number;
            leaked: boolean;
        }

        let gameData: PathData[] = [];
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
                
                let currentTile = getElementAtPos(this.curPos);
                let pathData: PathData = {
                    length: 0,
                    alreadyFull: 0,
                    leaked: false
                }
                curDir = this.determineFlow(currentTile.type, curDir);

                // continue along path
                while (!invalidPos(this.curPos) || this.compatible(sourceConnectors[j].pipeType, currentTile.type, curDir)) {
                    if (currentTile.status == Status.Empty) {
                        pathData.length++;
                        currentTile.status = Status.Full;
                    } else {
                        pathData.alreadyFull++;
                    }

                    // move
                    this.flow(curDir);

                    // check if invalid Position after moving
                    if (invalidPos(this.curPos)) {
                        // leaking out of bounds
                        pathData.leaked = true;
                        break;
                    }

                    // set currentTile
                    currentTile = getElementAtPos(this.curPos);
                    
                    if (leaking(this.curPos) || wrongSink(this.curPos, targetID)) {
                        // leaking or wrong sink
                        pathData.leaked = true;
                        break;
                    }

                    if (currentTile.id == targetID) {
                        // got to a valid sink
                        break;
                    }

                    // if necessary change flow direction
                    curDir = this.determineFlow(currentTile.type, curDir);
                }

                gameData.push(pathData);
            }
        }

        let result = 0;
        if (gameData.some(el => el.leaked)) {
            // determine where 'game over' occured first
            let pathsWithLeak = gameData.filter(path => path.leaked);
            let pathLenghts: number[] = pathsWithLeak.map(path => {
                return path.length + path.alreadyFull;
            });

            let min = Math.min(...pathLenghts);

            // if path length is shorter then min add path length to result
            // otherwise add min to result
            gameData.forEach(path => {
                result += Math.min(min, path.length);
            });

            // return for incorrect state has to be negativ
            result = -1 * (result);
        } else {
            // sum up path lenghts
            result = gameData
                .map(path => {
                    return path.length;
                })
                .reduce((sum, pipes) => {
                    return sum += pipes;
            }, 0);
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
