// function countSumofTwoRepresentations(n: number, l: number, r: number): number {
//     let count: number = 0;
//     let usedIs: number[] = []
//     for (let i = l; i <= r; i++) {
//         for (let j = l; j <= r; j++) {
//             if(usedIs.some(element => element == j)) {
//                 continue;
//             } 
//             else if (i + j == n) {
//                 count++;
//                 usedIs.push(i);
//             }
//         }
//     }

//     return count;
// }

function countSumofTwoRepresentations(n: number, l: number, r: number): number {
    let count: number = 0;
    for (let i = l; i <= r; i++) {
        let secondAddend: number = n - i;
        if (i <= secondAddend && secondAddend >= l && secondAddend <= r) {
            count++;
        }
    }

    return count;
}

interface Task26 {
    n: number,
    l: number,
    r: number,
    expOut: number
}

const task26Test1: Task26 = {
    n: 6,
    l: 2,
    r: 4,
    expOut: 2
};
const task26Test2: Task26 = {
    n: 6,
    l: 3,
    r: 3,
    expOut: 1
};

console.log(countSumofTwoRepresentations(task26Test1.n, task26Test1.l, task26Test1.r));
console.log(countSumofTwoRepresentations(task26Test2.n, task26Test2.l, task26Test2.r));