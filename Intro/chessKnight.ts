function chessKnight(cell: string): number {
    let char: number = cell.charCodeAt(0);
    let n: number = +cell.charAt(1);
    // let pos1: string = String.fromCharCode(char + 1) + String(n + 2);    
    // let pos2: string = String.fromCharCode(char + 2) + String(n + 1);
    // let pos3: string = String.fromCharCode(char + 1) + String(n - 2);
    // let pos4: string = String.fromCharCode(char + 2) + String(n - 1);
    // let pos5: string = String.fromCharCode(char - 1) + String(n - 2);
    // let pos6: string = String.fromCharCode(char - 2) + String(n - 1);
    // let pos7: string = String.fromCharCode(char - 2) + String(n + 1);
    // let pos8: string = String.fromCharCode(char - 1) + String(n + 2);
    let possibleMoves: number = 0;
    for (let i = -2; i < 3; i++) {
        if (i != 0) {
            if (i > 0) {
                for (let j = -2; j < 3; j++) {
                    if (j != 0) {
                        if (i == 1 && Math.abs(j) == 2) {
                            if (checkPos(String.fromCharCode(char + i) + String(n + j))) {
                                // console.log(String.fromCharCode(char + i) + String(n + j));
                                possibleMoves++;
                            }
                        }
                        if (i == 2 && Math.abs(j) == 1) {
                            if (checkPos(String.fromCharCode(char + i) + String(n + j))) {
                                // console.log(String.fromCharCode(char + i) + String(n + j));
                                possibleMoves++;
                            }
                        }
                    }
                }
            }
            else {
                for (let j = -2; j < 3; j++) {
                    if (j != 0) {
                        if (i == -1 && Math.abs(j) == 2) {
                            if (checkPos(String.fromCharCode(char + i) + String(n + j))) {
                                // console.log(String.fromCharCode(char + i) + String(n + j));
                                possibleMoves++;
                            }
                        }
                        if (i == -2 && Math.abs(j) == 1) {
                            if (checkPos(String.fromCharCode(char + i) + String(n + j))) {
                                // console.log(String.fromCharCode(char + i) + String(n + j));
                                possibleMoves++;
                            }
                        }
                    }
                }
            }
        }
    }

    return possibleMoves;
}

function checkPos(p: string): boolean {
    return (/[a-h][1-8]$/).test(p);
}
let knightPosition1: string = 'a1';     //2
let knightPosition2: string = 'c2';     //6
let knightPosition3: string = 'd4';     //8
let knightPosition4: string = 'g6';     //6
let knightPosition5: string = 'a3';     //4
let knightPosition6: string = 'b7';     //4
let knightPosition7: string = 'h8';     //2
let knightPosition8: string = 'h6';     //4
let knightPosition9: string = 'g8';     //3
let knightPosition0: string = 'a5';     //4

console.log(chessKnight(knightPosition1));
console.log(chessKnight(knightPosition2));
console.log(chessKnight(knightPosition3));
console.log(chessKnight(knightPosition4));
console.log(chessKnight(knightPosition5));
console.log(chessKnight(knightPosition6));
console.log(chessKnight(knightPosition7));
console.log(chessKnight(knightPosition8));
console.log(chessKnight(knightPosition9));
console.log(chessKnight(knightPosition0));