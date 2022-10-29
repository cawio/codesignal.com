// function killKthBit(n: number, k: number) {
//     return parseInt(n.toString(2).slice(0, k) + '0' + n.toString(2).slice(k + 1), 2);
// }

function killKthBit(n: number, k: number) {
    return n & ~(1 << k - 1);
}

interface MadCoder {
    n: number,
    k: number,
    expOut: number
};

const test1: MadCoder = {
    n: 37,
    k: 3,
    expOut: 33
}
const test5: MadCoder = {
    n: 2147483647,
    k: 16,
    expOut: 2147450879
}

console.log('expected', test1.expOut, 'my result', killKthBit(test1.n, test1.k));
console.log('expected', test5.expOut, 'my result', killKthBit(test5.n, test5.k));

console.log('______________________________________________________________________________________');
// console.log(test1.n.toString(2));
// console.log(test1.n.toString(2).slice(0, test1.k));
// console.log(test1.n.toString(2).slice(0, test1.k) + '0');
// console.log(test1.n.toString(2).slice(0, test1.k) + '0' + test1.n.toString(2).slice(test1.k + 1));
console.log(test5.n.toString(2));
console.log(parseInt(test5.n.toString(2).slice(0, test5.k - 1) + '0' + test5.n.toString(2).slice(test5.k), 2));

