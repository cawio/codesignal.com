function bishopAndPawn(bishop: string, pawn: string): boolean {
    return Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0)) == Math.abs(Number(bishop[1]) - Number(pawn[1]));
}

let testBishop: string = 'a1';
let testPawn: string = 'c3';

console.log(bishopAndPawn(testBishop, testPawn))