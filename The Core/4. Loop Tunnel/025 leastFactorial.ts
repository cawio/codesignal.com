function leastresult(n: number): number {
    if (n == 0 || n == 1) {
        return 1;
    }
    
    let result: number = 0;
    for (let i = 2; result < n; i++) {
        result = createSequence(i - 1).reduce((prod, element) => prod * element, 1) * i;
    }

    return result;
}

function createSequence(n: number): number[] {
    let numberChainArr: number[] = [];
    for ( let i = 1; i <= n; i++) {
        numberChainArr.push(i);
    }

    return numberChainArr;
}

const leastresultTest1: number = 17;
console.log(leastresult(leastresultTest1));

