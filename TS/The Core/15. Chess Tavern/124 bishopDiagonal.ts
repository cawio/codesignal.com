function bishopDiagonal(bishop1: string, bishop2: string): string[] {
    const areDiagonal: boolean = Math.abs(bishop1.charCodeAt(0) - bishop2.charCodeAt(0)) == Math.abs(Number(bishop1[1]) - Number(bishop2[1]));
    if(areDiagonal) {
        // figure out where to move and adjust
        const posB1: number[] = bishop1
            .split('')
            .map((el: string) => {
                if (isNaN(Number(el))) {
                    return el.charCodeAt(0);
                } else {
                    return Number(el);
                }
            });
    
        const posB2: number[] = bishop2
            .split('')
            .map((el: string) => {
                if (isNaN(Number(el))) {
                    return el.charCodeAt(0);
                } else {
                    return Number(el);
                }
            });

        if (posB1[0] < posB2[0]) {
            // move b1 left and b2 right
            if (posB1[1] < posB2[1]) {
                // b1 left and down
                while (posB1[0] > 97 && posB1[1] > 1) {
                    posB1[0]--;
                    posB1[1]--;
                }
                // b2 right and up
                while (posB2[0] < 104 && posB2[1] < 8) {
                    posB2[0]++;
                    posB2[1]++;
                }
            } else {
                // b1 left and up
                while (posB1[0] > 97 && posB1[1] < 8) {
                    posB1[0]--;
                    posB1[1]++;
                }
                // b2 right and down
                while (posB2[0] < 104 && posB2[1] > 1) {
                    posB2[0]++;
                    posB2[1]--;
                }
            }
        } else {
            // move b1 right and b2 left 
            if (posB2[1] < posB1[1]) {
                // b1 right and up
                while (posB1[0] < 104 && posB1[1] < 8) {
                    posB1[0]++;
                    posB1[1]++;
                }
                // b2 left and down
                while (posB2[0] > 97 && posB2[1] > 1) {
                    posB2[0]--;
                    posB2[1]--;
                }
            } else {
                // b1 right and down
                while (posB1[0] < 104 && posB1[1] > 1) {
                    posB1[0]++;
                    posB1[1]--;
                }
                // b2 left and up
                while (posB2[0] > 97 && posB2[1] < 8) {
                    posB2[0]--;
                    posB2[1]++;
                }
            } 
        }

        bishop1 = posB1
            .map((el: number, i: number) => {
                if (i === 0) {
                    return String.fromCharCode(el);
                } else {
                    return el.toString();
                }
            })
            .join('');

        bishop2 = posB2
            .map((el: number, i: number) => {
                if (i === 0) {
                    return String.fromCharCode(el);
                } else {
                    return el.toString();
                }
            })
            .join('');
    }

    return [bishop1, bishop2].sort();
}

interface Task124 {
    b1: string;
    b2: string;
    expOut: string[];
}

const task124_1: Task124 = {
    b1: 'd7',
    b2: 'f5',
    expOut: ['c8', 'h3']
}
// console.log('expOut:', task124_1.expOut, '| myOut:', bishopDiagonal(task124_1.b1, task124_1.b2));

const task124_2: Task124 = {
    b1: 'd8',
    b2: 'b5',
    expOut: ['b5', 'd8']
}
// console.log('expOut:', task124_2.expOut, '| myOut:', bishopDiagonal(task124_2.b1, task124_2.b2));

const task124_4: Task124 = {
    b1: 'g3',
    b2: 'e1',
    expOut: ['e1', 'h4']
}
// console.log('expOut:', task124_4.expOut, '| myOut:', bishopDiagonal(task124_4.b1, task124_4.b2));

const task124_5: Task124 = {
    b1: 'b4',
    b2: 'e7',
    expOut: ['a3', 'f8']
}
console.log('expOut:', task124_5.expOut, '| myOut:', bishopDiagonal(task124_5.b1, task124_5.b2));