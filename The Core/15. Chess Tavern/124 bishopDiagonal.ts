function bishopDiagonal(bishop1: string, bishop2: string): string[] {
    const areDiagonal: boolean = Math.abs(bishop1.charCodeAt(0) - bishop2.charCodeAt(0)) == Math.abs(Number(bishop1[1]) - Number(bishop2[1]));
    if(areDiagonal) {
        // code to move bishops to the far side
        // depending on the y postion relativ to the other bishop it needs
        // to move up or down
    }

    return [bishop1, bishop2];
}

interface Task124 {
    b1: string;
    b2: string;
    expOut: string[];
}

const task124_1: Task124 = {
    b1: 'd7',
    b2: 'f5',
    expOut: ['c8', 'd8']
}
console.log(bishopDiagonal(task124_1.b1, task124_1.b2), task124_1.expOut);

const task124_2: Task124 = {
    b1: 'd8',
    b2: 'b5',
    expOut: ['b5', 'd8']
}
console.log(bishopDiagonal(task124_2.b1, task124_2.b2), task124_2.expOut);
