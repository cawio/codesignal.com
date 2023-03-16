function chessKnight(cell: string): number {
    let char: number = cell.charCodeAt(0);
    let n: number = +cell.charAt(1);
    let possibleMoves: number = 0;
    for (let i = -2; i < 3; i++) {
        if (i === 0) {
            continue;
        }
        if (i > 0) {
            for (let j = -2; j < 3; j++) {
                if (j === 0) {
                    continue;
                }
                if (i == 1 && Math.abs(j) == 2) {
                    if (checkPos(String.fromCharCode(char + i) + String(n + j))) {
                        possibleMoves++;
                    }
                }
                if (i == 2 && Math.abs(j) == 1) {
                    if (checkPos(String.fromCharCode(char + i) + String(n + j))) {
                        possibleMoves++;
                    }
                } 
            }
        } else {
            for (let j = -2; j < 3; j++) {
                if (j === 0) {
                    continue;
                }
                if (i == -1 && Math.abs(j) == 2) {
                    if (checkPos(String.fromCharCode(char + i) + String(n + j))) {
                        possibleMoves++;
                    }
                }
                if (i == -2 && Math.abs(j) == 1) {
                    if (checkPos(String.fromCharCode(char + i) + String(n + j))) {
                        possibleMoves++;
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