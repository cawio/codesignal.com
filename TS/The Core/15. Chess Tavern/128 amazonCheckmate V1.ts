class AmazonCheckmate {
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
        const y = Number(s.substring(1));
        let validY = true;
        if (y < 1 || y > 8) {
            validY = false;
        }

        return validX && validY ;
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
            board[coord[0]][coord[1]] = 'b';
        });

        // also need to check if amazon is on same diagonal as king because she cant get behind him
        if (this.checkSameDiagonal(this.amazon, this.king)) {

            /*  if on same "diagonal" there are 8 possible configurations
                1 - 2: king can be above or below of amazon
                    1: above -> same char but larger number
                    2: below -> same char but smaller number
                3 - 4: king can be left or right of amazon
                    3: left -> same number but smaller char
                    4: right -> same number but larger char
                5 - 6: king can be infront or behind amazon on rising diagonal
                    5: infront (below left) -> both smaller
                    6: behind (above right) -> both larger
                7 - 8: king can be infront or behind amazon on falling diagonal
                    7: infront (above left) -> smaller char, lager number
                    8: behind (below right) -> larger char, smaller number
            */
            const deltaX = kingNum[1] - amazonNum[1]; // chars
            const deltaY = kingNum[0] - amazonNum[0]; // nums

            if (deltaX == 0 && deltaY > 0) {
                // console.log('1: above -> same char but larger number');
                for ( let i = kingNum[0]; i < 8; i++) {
                    if (board[i][kingNum[1]]== 'x') {
                        board[i][kingNum[1]] = ' ';
                    }
                }
            } else if (deltaX == 0 && deltaY < 0) {
                // console.log('2: below -> same char but smaller number');
                for ( let i = kingNum[0]; i > -1; i--) {
                    if (board[i][kingNum[1]]== 'x') {
                        board[i][kingNum[1]] = ' ';
                    }
                }
            } else if (deltaX < 0 && deltaY == 0) {
                // console.log('3: left -> same number but smaller char');
                for ( let i = kingNum[0]; i > -1; i--) {
                    if (board[kingNum[0]][i]== 'x') {
                        board[kingNum[0]][i] = ' ';
                    }
                }
            } else if (deltaX > 0 && deltaY == 0) {
                // console.log('4: right -> same number but larger char');
                for ( let i = kingNum[1]; i < 8; i++) {
                    if (board[kingNum[0]][i] == 'x') {
                        board[kingNum[0]][i] = ' ';
                    }
                }
            } else if (deltaX < 0 && deltaY < 0) {
                // console.log('5: infront (below left) -> both smaller');
                for (let i = kingNum[0]; i > -1; i--) {
                    for (let j = kingNum[1]; j > -1; j--) {
                        if (board[i][j] == 'x') {
                            board[i][j] = ' ';
                        }
                    }
                }
            } else if (deltaX > 0 && deltaY > 0) {
                // console.log('6: behind (above right) -> both larger');
                for (let i = kingNum[0]; i < 8; i++) {
                    for (let j = kingNum[1]; j < 8; j++) {
                        if (board[i][j] == 'x') {
                            board[i][j] = ' ';
                        }
                    }
                }
            } else if (deltaX < 0 && deltaY > 0) {
                // console.log('7: infront (above left) -> smaller char, lager number');
                for (let i = kingNum[0]; i < 8; i++) {
                    for (let j = kingNum[1]; j > -1; j--) {
                        if (board[i][j] == 'x') {
                            board[i][j] = ' ';
                        }
                    }
                }
            } else if (deltaX > 0 && deltaY < 0) {
                // console.log('8: behind (below right) -> larger char, smaller number');
                for (let i = kingNum[0]; i > -1; i--) {
                    for (let j = kingNum[1]; j < 8; j++) {
                        if (board[i][j] == 'x') {
                            board[i][j] = ' ';
                        }
                    }
                }
            }
        }

        /*
            it's checkmate (i.e. black's king is under the amazon's attack and it cannot make a valid move)
            i.e all cells directly neigbouring the amazon

            it's check (i.e. black's king is under the amazon's attack but it can reach a safe square in one move)
            i.e all cells that amazon can reach but dont directly neigbour her

            it's stalemate (i.e. black's king is on a safe square but it cannot make a valid move)
            i.e all cells where the amazon cant reach

            black's king is on a safe square and it can make a valid move.
        */

        let safe = 0;
        let stalemate = 0;
        let check = 0;
        let checkmate = 0;

        const offset = [[-1, -1],
                        [-1,  0],
                        [-1,  1],
                        [ 0,  1],
                        [ 0, -1],
                        [ 1, -1],
                        [ 1,  0],
                        [ 1,  1]];

        // returns true if there is a space where the black king can move; false otherwise
        const canMove = (coords: number[]): boolean => {
            for (let i = 0; i < offset.length; i++) {
                let a = coords[0] + offset[i][0];
                let b = coords[1] + offset[i][1];

                if (a < 0 || b < 0 || a > 7 || b > 7) {
                    continue;
                }

                const offsetContent = board[a][b]
                if (offsetContent == ' ' || offsetContent == 'A') {
                    return true;
                }
            }

            return false;
        }

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const cellContent = board[i][j];
                switch (cellContent) {
                    case ' ':
                        // check if any of the surrounding cells are free; if yes -> safe++ otherwise stalemate++
                        if (canMove([i, j])) {
                            safe++
                        } else {
                            stalemate++;
                        }
                        break;
                    case 'x':
                        // check if any of the surrounding cells are free; if yes -> check++ otherwise checkmate++
                        if (canMove([i, j])) {
                            check++
                        } else {
                            checkmate++;
                        }
                        break;
                    default:
                        // do noting for 'b', 'K', 'A'
                        break;
                }
            }
        }

        return [checkmate, check, stalemate, safe];
    }

    public try(): string {
        const testPassed: boolean = JSON.stringify(this.expOut) === JSON.stringify(this.calcSolution());
        return `Test ${String(this.id).padStart(2, '0')}: ${testPassed ? 'passed 😊' : 'failed 😣'}`;
    }
}

const task128Tasks = [
    new AmazonCheckmate(1, 'd3', 'e4', [5, 21, 0, 29]),
    new AmazonCheckmate(2, 'a1', 'g5', [0, 29, 1, 29]),
    new AmazonCheckmate(8, 'f3', 'c1', [4, 18, 0, 32]),
    new AmazonCheckmate(9, 'd4', 'h8', [0, 18, 0, 36]),
];
task128Tasks.forEach(el => console.log(el.try()));
