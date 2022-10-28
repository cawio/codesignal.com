function equalPairOfBits(n: number, m: number) {
    return ~(n^m) & -(~(n^m));
}

const task24_Test1: number[] = [10, 11];
console.log(equalPairOfBits(task24_Test1[0], task24_Test1[1]));