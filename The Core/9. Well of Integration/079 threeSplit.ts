function threeSplit(a: number[]): number {
    const summedArr: number = a.reduce((sum: number, el: number) => sum += el, 0);
    let firstSum: number = 0;
    let secondSum: number = 0;
    let result: number = 0;

    for (let i = 0; i < a.length - 2; i++) {
        firstSum += a[i];
        secondSum = 0;

        for (let j = i + 1; j < a.length - 1; j++) {
            secondSum += a[j];
            if (firstSum === secondSum && secondSum === summedArr - firstSum - secondSum) {
                result++;
            }
        }
    }
    
    return result;
}

console.log(threeSplit([0, -1, 0, -1, 0, -1]));