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
        const kingX = pos.charCodeAt(0);
        const kingY = Number(pos.charAt(1));
        
        let moves: string[] = [];
        offset.forEach((direction: number[]) => {
            // offset
            const x1 = kingX + direction[1];
            const y1 = kingY + direction[0];
            const cord1 = String.fromCodePoint(x1) + String(y1);
            if (this.isValidPosition(cord1)) {
                moves.push(cord1);
            }
            
            // opposite offset
            const x2 = kingX + (-1 * direction[1]);
            const y2 = kingY + (-1 * direction[0]);
            const cord2 = String.fromCodePoint(x2) + String(y2);
            if (this.isValidPosition(cord2)) {
                moves.push(cord2);
            }	
        });

        return moves;
    }

    private queenMoves(pos: string): string[] {
        const x = pos.charCodeAt(0);
        const y = Number(pos.charAt(1));
        let moves: string[] = [];
        // vertically
        for (let i = 1; i < 9; i++) {
            if (i === y) {
                continue;
            }
            moves.push(String.fromCharCode(x) + String(i));
        }
        
        // horizontally
        let charCode = 97;
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
        const offsets = [[-1,  2],
                         [-2,  1],
                         [-2, -1],
                         [-1, -2]];

        let moves: string[] = [];
        const x = pos.charCodeAt(0);
        const y = Number(pos.charAt(1));
        offsets.forEach((offset: number[]) => {
            const modX1 = x + offset[0];
            const modY1 = y + offset[1];
            const modX2 = x + (-1 * offset[0]);
            const modY2 = y + (-1 * offset[1]);
            const pos1 = String.fromCharCode(modX1) + String(modY1);
            const pos2 = String.fromCharCode(modX2) + String(modY2);
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
        const xCode = s.charCodeAt(0);
        let validX = true;
        if (xCode < 97 || xCode > 104) {
            validX = false;
        }

        // 1-8
        const y = Number(s.charAt(1));
        let validY = true; 
        if (y < 1 || y > 8) {
            validY = false;
        }

        return validX && validY;
    }

    private chessToNum(pos: string): number[] {
        const map = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        return [Number(pos.charAt(1)) - 1, map.indexOf(pos.charAt(0))]; // [row, col];
    }

    private checkSameDiagonal(pos1: string, pos2: string): boolean {
        return Math.abs(pos1.charCodeAt(0) - pos2.charCodeAt(0)) == Math.abs(Number(pos1.charAt(1)) - Number(pos2.charAt(1))) ||
               pos1.charAt(0) == pos2.charAt(0) ||
               pos1.charAt(1) == pos2.charAt(1);
    }

    public calcSolution(): number[] {
        // initiate board
        let board: string[][] = [];
        for(let i = 0; i < 8; i++) {
            board[i] = [];
            for(let j = 0; j < 8; j++) {
                board[i][j] = ' ';
            }
        }

        // mark all cells that amazon can reach
        let inReachOfAmazon = this.whiteAmazonReaches().map((el => this.chessToNum(el)));
        inReachOfAmazon.forEach((pos) => {
            board[pos[0]][pos[1]] = 'x';
        });

        // place white amazon on board
        let amazonNum = this.chessToNum(this.amazon);
        board[amazonNum[0]][amazonNum[1]] = 'A';

        // place white king on board
        let kingNum = this.chessToNum(this.king);
        board[kingNum[0]][kingNum[1]] = 'K';

        // in all cells neighboring cells to the white king the black king cant be placed
        let blocked = this.whiteKingReaches();
        blocked.forEach((pos) => {
            let coord = this.chessToNum(pos);
            if (board[coord[0]][coord[1]] != 'A') {
                board[coord[0]][coord[1]] = 'b';
            }
        });
        // also need to check if amazon is on same diagonal as king because she cant get behind him
        if (this.checkSameDiagonal(this.amazon, this.king)) {
            // remove all 
        }

        // reverse board to reflect picture in task
        board.reverse();
        console.table(board);

        // it's checkmate (i.e. black's king is under the amazon's attack and it cannot make a valid move)
        // i.e all cells directly neigbouring the amazon

        // it's check (i.e. black's king is under the amazon's attack but it can reach a safe square in one move)
        // i.e all cells that amazon can reach but dont directly neigbour her

        // it's stalemate (i.e. black's king is on a safe square but it cannot make a valid move)
        // i.e all cells where the amazon cant reach 

        // black's king is on a safe square and it can make a valid move.
        let savePos = 0;

        return [];
    }

    public try(): string {
        const testPassed: boolean = this.expOut === this.calcSolution();
        return `Test ${String(this.id).padStart(2, '0')}: ${testPassed ? 'passed 😊' : 'failed 😣'}`;
    }
}

const task128Tasks: Task128[] = [
    new Task128(1, 'd3', 'e4', [5, 21, 0, 29]),
];
task128Tasks.forEach(el => console.log(el.try()));
