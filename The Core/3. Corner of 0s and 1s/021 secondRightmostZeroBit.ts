function secondRightmostZeroBit(n: number) {
    return Math.pow(2, Math.abs((n | n + 1).toString(2).lastIndexOf('0') + 1 - n.toString(2).length));
}

let rightmostZeroBitTest1: number = 37;
let rightmostZeroBitTest2: number = 1073741824;
console.log(secondRightmostZeroBit(rightmostZeroBitTest1));
console.log(secondRightmostZeroBit(rightmostZeroBitTest2));

// console.log(rightmostZeroBitTest1.toString(2), (rightmostZeroBitTest1 + 1).toString(2));
console.log(100101 | 100110); // | == OR == if one of either bits is 1 the bit in the return is 1

console.log(rightmostZeroBitTest2.toString(2));
console.log((rightmostZeroBitTest2+1).toString(2).length);