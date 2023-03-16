function whoseTurn(p: string): boolean {
    const whiteKnights = [p.substring(0, 2), p.substring(3, 5)];
    const blackKnights = [p.substring(6, 8), p.substring(9, 11)];
            
    const whitePlayerTurns = (convertCell(whiteKnights[0]) + convertCell(whiteKnights[1])) % 2;
    const blackPlayerTurns = (convertCell(blackKnights[0]) + convertCell(blackKnights[1])) % 2;
            
    return whitePlayerTurns === blackPlayerTurns;
}

function convertCell(cell: string) {
    return cell.charCodeAt(0) + cell.charCodeAt(1);
}

const task125_1: string = "b1;g1;b8;g8";
console.log(whoseTurn(task125_1));  // true

const task125_2: string = "c3;g1;b8;g8";
console.log(whoseTurn(task125_2));  // false

const task125_3: string = "g1;g2;g3;g4";
console.log(whoseTurn(task125_3));  // true

