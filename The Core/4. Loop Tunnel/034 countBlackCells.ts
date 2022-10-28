// function countBlackCells(n: number, m: number): number {
//     if (n == 1) {
//         return m;
//     }

//     let pitch: number = -n / m;
//     let blackCellsCount: number = 0;
//     if (pitch != -1) {
//         if( n < m) {
//             blackCellsCount = Math.ceil(-1 / pitch) * n
//         } else {
//             pitch = pitch * -1;
//             blackCellsCount = Math.ceil(pitch) * n;
//         }
//     } else {
//         blackCellsCount = 1 + (n - 1) * 3;

//     }

//     return blackCellsCount;
// }

function countBlackCells(n: number, m: number): number {
    if (n == m) {
        return (n + 2 * (n - 1));
    }
    if (n == 1 || m == 1 ) {
        return n * m;
    }

    return n + m  - getGreatestCommonDivisor(n, m) + (getGreatestCommonDivisor(n, m) - 1) * 2;
}

function getGreatestCommonDivisor(n: number, m: number){
    while (m > 0) {
        let temp: number = n;
        n = m;
        m = temp % m;
    }
    
    return n;
}

interface Task34 {
    n: number,
    m: number,
    expOut: number
}

const task34_Test2: Task34 = {n: 3, m: 3, expOut: 7};
const task34_Test3: Task34 = {n: 2, m: 5, expOut: 6};
const task34_Test1: Task34 = {n: 3, m: 4, expOut: 6};
const task34_Test7: Task34 = {n: 1, m: 239, expOut: 239};
const task34_Test8: Task34 = {n: 33, m: 44, expOut: 86};
const task34_Test9: Task34 = {n: 16, m: 8, expOut: 30};

console.log('expOut', task34_Test1.expOut, '| myOut', countBlackCells(task34_Test1.n, task34_Test1.m));
console.log('expOut', task34_Test2.expOut, '| myOut', countBlackCells(task34_Test2.n, task34_Test2.m));
console.log('expOut', task34_Test3.expOut, '| myOut', countBlackCells(task34_Test3.n, task34_Test3.m));
console.log('expOut', task34_Test7.expOut, '| myOut', countBlackCells(task34_Test7.n, task34_Test7.m));
console.log('expOut', task34_Test8.expOut, '| myOut', countBlackCells(task34_Test8.n, task34_Test8.m));
console.log('expOut', task34_Test9.expOut, '| myOut', countBlackCells(task34_Test9.n, task34_Test9.m));

