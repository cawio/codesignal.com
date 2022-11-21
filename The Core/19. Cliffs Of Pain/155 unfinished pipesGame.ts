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

enum FlowDir {
    NoFlow = 0,
    Vertical,
    Horizontal
}

class GameCell {
    id = ' ';
    type = GamePiece.Empty;
}

class GameSpace {
    field: GameCell[][];

    constructor (state: string[]) {
        this.field = state.map(str => {
            return str
                .split('')
                .map(el => {
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
    constructor (
        private id: number,
        private state: string[],
        private expOut: number
    ) {}

    private solution(state: string[]): number {

        return 0;
    }

    public try(): string {
        const testPassed: boolean = this.expOut == this.solution(this.state);
        return `Test ${this.id}: ${testPassed ? 'passed 😎' : 'failed 😢'}`;
    }
}

const task155Tests: PipesGame[] = [
    new PipesGame(1, ["a224C22300000", "0001643722B00",  "0b27275100000", "00c7256500000", "0006A45000000"], 19),
];

task155Tests.forEach((el: PipesGame) => console.log(el.try()));

let kerkeke = new GameSpace(["a224C22300000", "0001643722B00",  "0b27275100000", "00c7256500000", "0006A45000000"])
console.table(kerkeke.field.map(el => el.map(v => v.id)));
