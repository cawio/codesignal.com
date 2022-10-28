function differentRightmostBit(n: number, m: number) {
    return (n^m) & -(n^m);
}

const task23_Test1: number[] = [11, 13];
console.log(differentRightmostBit(task23_Test1[0], task23_Test1[1]));

