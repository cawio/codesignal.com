enum ChessPiece {
    Empty = 0,
    Amazon,
    King
}

class ChessBoard {
    board: ChessCell[][] = [];
    constructor (piecesOnBoard: number[][]) {
        for (let i = 0; i < 8; i++) {
            this.board[i] = [];
            for (let j = 0; j < 8; j++) {
                this.board[i][j] = new ChessCell();
            }
        }
        // place pices on the board so i can use it when marking threatened cells
        piecesOnBoard.forEach(piece => this.board[piece[0]][piece[1]].inhabitant = piece[2]);
    }
}

class ChessCell {
    threatened: boolean;
    blocked: boolean;
    inhabitant: ChessPiece;
    constructor () {
        this.threatened = false;
        this.blocked = false;
        this.inhabitant = ChessPiece.Empty
    }
}

class ChessPiecesMoves {
    inRange (n: number): boolean {
        if (n < 8 && n > -1) {
            return true;
        }
        
        return false;
    }

    bishop(bishopCoords: number[], board: ChessCell[][]): void {
        const directions: number[][] = [[-1,  1], [ 1,  1], [-1, -1], [ 1, -1]];
        directions.forEach((direction: number[]) => {
            let x = bishopCoords[1] + direction[1];
            let y = bishopCoords[0] + direction[0];
            while (x < 8 && x > -1 && y < 8 && y > -1) {
                if (board[y][x].inhabitant != ChessPiece.Empty) {
                    break;
                }
                board[y][x].threatened = true;
                x += direction[1];
                y += direction[0];
            }
        });
    }

    knight(knightCoords: number[], board: ChessCell[][]): void {
        const offsets = [[-1,  2], [-2,  1], [-2, -1], [-1, -2]];
        const x = knightCoords[1];
        const y = knightCoords[0];
        offsets.forEach((offset: number[]) => {
            
            const x1 = x + offset[0];
            const y1 = y + offset[1];
            const x2 = x + (-1 * offset[0]);
            const y2 = y + (-1 * offset[1]);
            
            if (this.inRange(x1) && this.inRange(y1)) {
                board[y1][x1].threatened = true;
            }
            if (this.inRange(x2) && this.inRange(y2)) {
                board[y2][x2].threatened = true;
            }
        });
    }

    rook(rookCoords: number[], board: ChessCell[][]): void {
        let x = rookCoords[1];
        let y = rookCoords[0];
        
        for (let i = y + 1; i < 8; i++) {
            if (board[i][x].inhabitant != ChessPiece.Empty) {
                break;
            }
            board[i][x].threatened = true;
        }

        for (let i = y - 1; i > -1; i--) {
            if (board[i][x].inhabitant != ChessPiece.Empty) {
                break;
            }
            board[i][x].threatened = true;
        }

        for (let i = x + 1; i < 8; i++) {
            if (board[y][i].inhabitant != ChessPiece.Empty) {
                break;
            }
            board[y][i].threatened = true;
        }

        for (let i = x - 1; i > -1; i--) {
            if (board[y][i].inhabitant != ChessPiece.Empty) {
                break;
            }
            board[y][i].threatened = true;
        }
    }

    king(kingCoords: number[], board: ChessCell[][]): void {
        const offsets: number[][] = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [0, -1], [1, 1], [1, -1], [1, 0]];
        board[kingCoords[0]][kingCoords[1]].inhabitant = ChessPiece.King;
        offsets.forEach((offset: number[]) => {
            let x = kingCoords[1] + offset[1];
            let y = kingCoords[0] + offset[0];
            if (this.inRange(x) && this.inRange(y)) {
                board[y][x].blocked = true;
            }
        });
    }

    queen(queenCoords: number[], board: ChessCell[][]): void {
        this.bishop(queenCoords, board);
        this.rook(queenCoords, board);
    }

    amazon(amazonCoords: number[], board: ChessCell[][]): void {
        this.queen(amazonCoords, board);
        this.knight(amazonCoords, board);
    }
}

class AmazonCheckmate2 {
    chessNotationMap = new Map<string, number>([['a', 0], ['b', 1], ['c', 2], ['d', 3], ['e', 4], ['f', 5], ['g', 6], ['h', 7],
                                                ['1', 7], ['2', 6], ['3', 5], ['4', 4], ['5', 3], ['6', 2], ['7', 1], ['8', 0]]);
    board: ChessCell[][];
    kingPos: number[];
    amazonPos: number[];

    constructor(king: string, amazon: string) {
        this.kingPos = this.convertChessNotation(king);
        this.amazonPos = this.convertChessNotation(amazon);
        this.board = new ChessBoard([[...this.kingPos, ChessPiece.King], [...this.amazonPos, ChessPiece.Amazon]]).board;
        new ChessPiecesMoves().amazon(this.amazonPos, this.board);
        new ChessPiecesMoves().king(this.kingPos, this.board);
    }

    convertChessNotation(pos: string): number[] {
        const col = pos.charAt(0);      // defines row spot in array (j)
        const row = pos.substring(1);   // defines height in array (i)
        const checkUndefined = (value: number | undefined): number => {
            if (value == undefined) {
                throw new Error('input not valid chess notation')
            }

            return value;
        }
        let a = checkUndefined(this.chessNotationMap.get(row));
        let b = checkUndefined(this.chessNotationMap.get(col));

        return [a, b];
    }

    calcSolution(): number[] {
        let safe = 0;
        let stalemate = 0;
        let check = 0;
        let checkmate = 0;

        const offset = [[-1, -1], [-1,  0], [-1,  1], [ 0,  1], [ 0, -1], [ 1, -1], [ 1,  0], [ 1,  1]];

        const canMove = (coords: number[]): boolean => {
            for (let i = 0; i < offset.length; i++) {
                let a = coords[0] + offset[i][0];
                let b = coords[1] + offset[i][1];

                if (a < 0 || b < 0 || a > 7 || b > 7) {
                    continue;
                }

                const surroudingCell = this.board[a][b];
                if (surroudingCell.blocked || surroudingCell.inhabitant == ChessPiece.King) {
                    continue;
                }

                if (surroudingCell.inhabitant == ChessPiece.Amazon) {
                    // amazon not protected by white king
                    return true;
                }

                if (!surroudingCell.threatened) {
                    // black king has chance to move or escape
                    return true;
                }
            }
            
            // either he cant go there because of restrictions or its threatened
            return false;
        }

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const currentCell = this.board[i][j];
                const ableToMove =  canMove([i, j]);

                if (currentCell.blocked || currentCell.inhabitant != ChessPiece.Empty) {
                    continue;
                }

                if (!currentCell.threatened && ableToMove) {
                    safe++;
                } else if (!currentCell.threatened && !ableToMove) {
                    stalemate++;
                } else if (currentCell.threatened && ableToMove) {
                    check++;
                } else if (currentCell.threatened && !ableToMove) {
                    checkmate++;
                }
            }
        }

        return [checkmate, check, stalemate, safe];
    }
}

let test: AmazonCheckmate2 = new AmazonCheckmate2('f3', 'f2');

console.log(test.calcSolution());
