class Task128 {
    constructor (
        readonly id: number,
        readonly king: string,
        readonly amazon: string,
        readonly expOut: number[]
    ) {}

    private whiteAmazonReaches() {
        // amazon can move like a queen and a kight
        let moves: string[] = [];
        moves = moves.concat(
            this.queenMoves(this.amazon),
            this.knightMoves(this.amazon)
        )
        
        return moves.filter((pos: string, i: number) => moves.indexOf(pos) === i);
    }

    private whiteKingReaches(): string[] {
        return this.kingMoves(this.king);
    }

    private kingMoves(pos: string): string[] {
        // king can capture everything standing in any square surrouding him
        const offset: number[][] = [[-1, -1],
                                    [-1,  0],
                                    [-1,  1],
                                    [ 0,  1]]

        // constraints: a-h (ascii table 97 - 104) horizontally
        // and 1-8 vertically
        const kingX: number = pos.charCodeAt(0);
        const kingY: number = Number(pos.charAt(1));
        
        let moves: string[] = [];
        offset.forEach((direction: number[]) => {
            // offset
            const x1: number = kingX + direction[1];
            const y1: number = kingY + direction[0];
            const cord1: string = String.fromCodePoint(x1) + String(y1);
            if (this.isValidPosition(cord1)) {
                moves.push(cord1);
            }
            
            // opposite offset
            const x2: number = kingX + (-1 * direction[1]);
            const y2: number = kingY + (-1 * direction[0]);
            const cord2: string = String.fromCodePoint(x2) + String(y2);
            if (this.isValidPosition(cord2)) {
                moves.push(cord2);
            }	
        });

        return moves;
    }

    private queenMoves(pos: string): string[] {
        const x: number = pos.charCodeAt(0);
        const y: number = Number(pos.charAt(1));
        let moves: string[] = [];
        // vertically
        for (let i = 1; i < 9; i++) {
            if (i === y) {
                continue;
            }
            moves.push(String.fromCharCode(x) + String(i));
        }
        
        // horizontally
        let charCode: number = 97;
        for (let i = 0; i < 8; i++) {
            if (charCode === x) {
                charCode++;
                continue;
            }
            moves.push(String.fromCharCode(charCode) + String(y));
            charCode++;
        }
        
        //diagonally
        const directions: number[][] = [[-1,  1],
                                        [ 1,  1],
                                        [-1, -1],
                                        [ 1, -1]];

        directions.forEach((direction: number[]) => {
            let modX = x;
            let modY = y;
            while (modX < 105 && modX > 96 && modY < 9   && modY > 0) {
                const tmpPos: string = String.fromCharCode(modX) + String(modY);
                if (tmpPos === pos) {
                    modX += direction[0];
                    modY += direction[1];
                    continue;
                }
                moves.push(tmpPos);
                modX += direction[0];
                modY += direction[1];
            }            
        });

        return moves;
    }

    private knightMoves(pos: string): string[] {
        const offsets: number[][] = [[-1,  2],
                                     [-2,  1],
                                     [-2, -1],
                                     [-1, -2]];

        let moves: string[] = [];
        const x: number = pos.charCodeAt(0);
        const y: number = Number(pos.charAt(1));
        offsets.forEach((offset: number[]) => {
            const modX1: number = x + offset[0];
            const modY1: number = y + offset[1];
            const modX2: number = x + (-1 * offset[0]);
            const modY2: number = y + (-1 * offset[1]);
            const pos1: string = String.fromCharCode(modX1) + String(modY1);
            const pos2: string = String.fromCharCode(modX2) + String(modY2);
            if (this.isValidPosition(pos1)) {
                moves.push(pos1);
            }
            if (this.isValidPosition(pos2)) {
                moves.push(pos2);
            }
        });

        return moves;
    }

    private isValidPosition(s: string): boolean {
        // a-h
        const xCode: number = s.charCodeAt(0);
        let validX: boolean = true;
        if (xCode < 97 || xCode > 104) {
            validX = false;
        }

        // 1-8
        const y: number = Number(s.charAt(1));
        let validY: boolean = true; 
        if (y < 1 || y > 8) {
            validY = false;
        }

        return validX && validY;
    }

    private chessToNum(pos: string): number[] {
        const map: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        return [Number(pos.charAt(1)) - 1, map.indexOf(pos.charAt(0))]; // [row, col];
    }

    public solution(): number[] {
        let board: string[][] = [];
        for(let i = 0; i < 8; i++) {
            board[i] = [];
            for(let j = 0; j < 8; j++) {
                board[i][j] = '';
            }
        }
        let inReachOfAmazon: number[][] = this.whiteAmazonReaches().map((el => this.chessToNum(el)));
        inReachOfAmazon.forEach((pos: number[], i) => {
            board[pos[0]][pos[1]] = 'X';
        })
        board.reverse();
        console.table(board);

        let savePos = ;
        return [];
    }

    public try(): string {
        const testPassed: boolean = this.expOut === this.solution();
    return `Test ${String(this.id).padStart(2, '0')}: ${testPassed ? 'passed 😊' : 'failed 😣'}`;
}
}

const task128Tasks: Task128[] = [
    new Task128(1, 'd3', 'e4', [5, 21, 0, 29]),
];
task128Tasks.forEach((el: Task128) => console.log(el.try()));