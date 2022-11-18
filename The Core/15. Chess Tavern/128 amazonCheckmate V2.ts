// enum ChessPiece {
//     Empty = 0,
//     Amazone,
//     King
// }

// class ChessBoard {
//     board: ChessBoardCell[][] = [];

//     constructor () {
//         for (let i = 0; i < 8; i++) {
//             this.board[i] = [];
//             for (let j = 0; j < 8; j++) {
//                 this.board[i][j] = new ChessBoardCell();
//             }
//         }
//     }
// }

// class ChessBoardCell {
//     threatened: boolean;
//     blocked: boolean;
//     inhabitant: ChessPiece;
//     constructor () {
//         this.threatened = false;
//         this.blocked = false;
//         this.inhabitant = ChessPiece.Empty 
//     }
// }

// class ChessPieces {
//     charMap = new Map<string, number>([['a', 0], ['b', 1], ['c', 2], ['d', 3], ['e', 4], ['f', 5], ['g', 6], ['h', 7]]);
//     numMap  = new Map<string, number>([['1', 7], ['2', 6], ['3', 5], ['4', 4], ['5', 3], ['6', 2], ['7', 1], ['8', 0]]);

//     bishop(bishopPos: string, board: ChessBoardCell[][]): void {
//         const bishopCoords = this.convertChessNotation(bishopPos);
//         const directions: number[][] = [[-1,  1],
//                                         [ 1,  1],
//                                         [-1, -1],
//                                         [ 1, -1]];

//         directions.forEach((direction: number[]) => {
//             let x = bishopCoords[1] + direction[1];
//             let y = bishopCoords[0] + direction[0];
//             while (x < 8 && x > -1 && y < 8 && y > -1) {
//                 board[y][x].threatened = true;
//                 x += direction[1];
//                 y += direction[0];
//             }
//         });
//         // testing
//         for (let i = 0; i < 8; i++) {
//             for (let j = 0; j < 8; j++) {
//                 if (board[i][j].threatened) {
//                     console.log([i, j])
//                 }
//             }
//         }
//     }

//     knight() {

//     }

//     rook(rookPos: string, board: ChessBoardCell[][]): void {
//         const rookCoord = this.convertChessNotation(rookPos);
//         for (let i = 0; i < 8; i++) {
//             board[i][rookCoord[1]].threatened = true;
//             board[rookCoord[0]][i].threatened = true;
//         }
//         /* // testing
//         for (let i = 0; i < 8; i++) {
//             for (let j = 0; j < 8; j++) {
//                 if (board[i][j].threatened) {
//                     console.log([i, j])
//                 }
//             }
//         } */
//     }

//     king(kingPos: string, board: ChessBoardCell[][]): void {
//         const kingCoord = this.convertChessNotation(kingPos)
//         const offsets: number[][] = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [0, -1], [1, 1], [1, -1], [1, 0]];
//         board[kingCoord[0]][kingCoord[1]].inhabitant = ChessPiece.King;

//         offsets.forEach((offset: number[]) => {
//             let x = kingCoord[1] + offset[1];
//             let y = kingCoord[0] + offset[0];
//             if (board[y][x] != undefined) {
//                 board[y][x].threatened = true;
//             }
//         });
//         /* // testing
//         for (let i = 0; i < 8; i++) {
//             for (let j = 0; j < 8; j++) {
//                 if (board[i][j].threatened) {
//                     console.log([i, j])
//                 }
//             }
//         } */
//     }

//     queen() {

//     }

//     amazone() {

//     }

//     convertChessNotation(pos: string): number[] {
//         const col = pos.charAt(0);  // defines row spot in array (j)
//         const row = pos.substring(1);  // defines hight in array (i)

//         const checkUndefined = (value: number | undefined): number => {
//             if (value == undefined) {
//                 throw new Error('input not valid chess notation')
//             }
            
//             return value;
//         }

//         let a = checkUndefined(this.numMap.get(row));
//         let b = checkUndefined(this.charMap.get(col));

//         return [a, b];
//     }
// }

// console.log(new ChessPieces().bishop('b2', new ChessBoard().board));
