enum GamePiece {
    Empty = 0,
    Source,
    Sink,
    Pipe1,
    Pipe2,
    Pipe3,
    Pipe4,
    Pipe5,
    Pipe6,
    Pipe7
}

enum Flow {
    NoFlow = 0,
    Up,
    Down,
    Left,
    Right
}

class GameCell {
    id = ' ';
    type = GamePiece.Empty;   
}

class GamePlot {
    field: GameCell[][];
    sources: number[][] = [];

    constructor (state: string[]) {
        this.field = state.map((str, i)=> {
            return str
                .split('')
                .map((el, j) => {
                    if (el == '0') {
                        //empty field
                        return new GameCell();
                    } else if (isNaN(Number(el))) {
                        if (/[A-Z]/.test(el)) {
                            // is a sink
                            let sink = new GameCell()
                            sink.id = el;
                            sink.type = GamePiece.Sink
                            return sink;
                        }
                        // is a source
                        let source = new GameCell()
                        source.id = el;
                        source.type = GamePiece.Source
                        this.sources.push([i, j]);

                        return source;
                    } else {
                        // is a pipe
                        let tmp = new GameCell();
                        switch (el) {
                            case '1':
                                // vertical pipe
                                tmp.id = '|';
                                tmp.type = GamePiece.Pipe1;
                                break;
                            case '2':
                                // horizontal pipe
                                tmp.id = '-';
                                tmp.type = GamePiece.Pipe2;
                                break;
                            case '3':
                                // corners
                                tmp.id = '┌';
                                tmp.type = GamePiece.Pipe3;
                                break;
                            case '4':
                                tmp.id = '┐';
                                tmp.type = GamePiece.Pipe4;
                                break;
                            case '5':
                                tmp.id = '┘';
                                tmp.type = GamePiece.Pipe5;
                                break;
                            case '6':
                                tmp.id = '└';
                                tmp.type = GamePiece.Pipe6;
                                break;
                            case '7':
                                // + shape
                                tmp.id = '+';
                                tmp.type = GamePiece.Pipe7;
                                break;
                        }

                        return tmp;
                    }
                });
        });
    }
}

class PipesGame {
    gamePlot: GamePlot;
    constructor (
        private id: number,
        private state: string[],
        private expOut: number
    ) {
        this.gamePlot = new GamePlot(this.state);
    }

    private compatible(p1: GamePiece, p2: GamePiece, d: Flow): boolean {
        type PipeComp = {
            pipe: GamePiece;
            flow: Flow;
            comp: GamePiece[];
        }

        let compabilities: PipeComp[] = [
            {pipe: GamePiece.Pipe1, flow: Flow.Up, comp: [GamePiece.Pipe1, GamePiece.Pipe3, GamePiece.Pipe4, GamePiece.Pipe7]},
            {pipe: GamePiece.Pipe1, flow: Flow.Down, comp: [GamePiece.Pipe1, GamePiece.Pipe5, GamePiece.Pipe6, GamePiece.Pipe7]},
            {pipe: GamePiece.Pipe2, flow: Flow.Left, comp: [GamePiece.Pipe2, GamePiece.Pipe3, GamePiece.Pipe6, GamePiece.Pipe7]},
            {pipe: GamePiece.Pipe2, flow: Flow.Right, comp: [GamePiece.Pipe2, GamePiece.Pipe4, GamePiece.Pipe5, GamePiece.Pipe7]},
            {pipe: GamePiece.Pipe3, flow: Flow.Left, comp: [GamePiece.Pipe1, GamePiece.Pipe5, GamePiece.Pipe6, GamePiece.Pipe7]},
            {pipe: GamePiece.Pipe3, flow: Flow.Up, comp: [GamePiece.Pipe2, GamePiece.Pipe4, GamePiece.Pipe5, GamePiece.Pipe7]},
            {pipe: GamePiece.Pipe4, flow: Flow.Right, comp: [GamePiece.Pipe1, GamePiece.Pipe5, GamePiece.Pipe6, GamePiece.Pipe7]},
            {pipe: GamePiece.Pipe4, flow: Flow.Up, comp: [GamePiece.Pipe2, GamePiece.Pipe3, GamePiece.Pipe6, GamePiece.Pipe7]},
            {pipe: GamePiece.Pipe5, flow: Flow.Down, comp: [GamePiece.Pipe2, GamePiece.Pipe3, GamePiece.Pipe6, GamePiece.Pipe7]},
            {pipe: GamePiece.Pipe5, flow: Flow.Right, comp: [GamePiece.Pipe1, GamePiece.Pipe3, GamePiece.Pipe4, GamePiece.Pipe7]},
            {pipe: GamePiece.Pipe6, flow: Flow.Down, comp: [GamePiece.Pipe2, GamePiece.Pipe4, GamePiece.Pipe5, GamePiece.Pipe7]},
            {pipe: GamePiece.Pipe6, flow: Flow.Left, comp: [GamePiece.Pipe1, GamePiece.Pipe3, GamePiece.Pipe4, GamePiece.Pipe7]},
            {pipe: GamePiece.Pipe7, flow: Flow.Up, comp: [GamePiece.Pipe1, GamePiece.Pipe3, GamePiece.Pipe4, GamePiece.Pipe7]},
            {pipe: GamePiece.Pipe7, flow: Flow.Down, comp: [GamePiece.Pipe1, GamePiece.Pipe5, GamePiece.Pipe6, GamePiece.Pipe7]},
            {pipe: GamePiece.Pipe7, flow: Flow.Left, comp: [GamePiece.Pipe2, GamePiece.Pipe3, GamePiece.Pipe6, GamePiece.Pipe7]},
            {pipe: GamePiece.Pipe7, flow: Flow.Right, comp: [GamePiece.Pipe2, GamePiece.Pipe4, GamePiece.Pipe5, GamePiece.Pipe7]}];
        
        // for (let option of compabilities) {
        //     if(option.pipe == p1 && option.flow == d && option.comp.includes(p2)) {
        //         return true;
        //     }
        // }
        // return false;

        return compabilities.some(option => option.pipe == p1 && option.flow == d && option.comp.includes(p2));
    }

    private calcSolution(): number {
        // plan ist do define compatiple pipes 
        // compatiple pipes differ by flow direction (left, right | up, down)
        // console.log(this.gamePlot);



        // type offsetFlowPair = [number[], Flow];

        type offsetFlowPair = {
            pipeType: GamePiece;
            flow: Flow;
        }

        const sourceConnectors: offsetFlowPair[] = [
            {pipeType: GamePiece.Pipe7, flow: Flow.Right},
            {pipeType: GamePiece.Pipe7, flow: Flow.Left},
            {pipeType: GamePiece.Pipe7, flow: Flow.Up},
            {pipeType: GamePiece.Pipe7, flow: Flow.Down}
        ];

        // const invalidPos = (row: number, col: number): boolean => {
        //     if (row < 0 || row > this.gamePlot.field.length[1] - 1 ||
        //         col < 0 || col > this.gamePlot.field.length - 1) {
        //             return true;
        //         }
                
        //         return false;
        // }

        for (let i = 0; i < this.gamePlot.sources.length; i++) {
            const curSrc = this.gamePlot.sources[i];
            let row = curSrc[0];
            let col = curSrc[1];
            let curTarget = this.gamePlot.field[row][col].id.toUpperCase();
            for (let j = 0; j < sourceConnectors.length; j++) {
                const curCon = sourceConnectors[j];
                let curType = curCon.pipeType;
                let curDir = curCon.flow;
                /* let nextType = step(curDir); // need to implement stepping

                while (this.compatible(curType, ?nextType, d)) {

                } */
            }
            
        }

        return 0;
    }

    public try(): string {
        const testPassed: boolean = this.expOut == this.calcSolution();
        return `Test ${this.id}: ${testPassed ? 'passed 😎' : 'failed 😢'}`;
    }
}

const task155Tests: PipesGame[] = [
    new PipesGame(1, ["a224C22300000", "0001643722B00",  "0b27275100000", "00c7256500000", "0006A45000000"], 19),
];

task155Tests.forEach((el: PipesGame) => console.log(el.try()));

let kerkeke = new GamePlot(["a224C22300000", "0001643722B00",  "0b27275100000", "00c7256500000", "0006A45000000"])
console.table(task155Tests[0].gamePlot.field.map(el => el.map(v => v.id)));
