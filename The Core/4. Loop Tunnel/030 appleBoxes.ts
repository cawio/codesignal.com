function appleBoxes(k: number): number {
    let resultEven: number = 0;
    let resultUneven: number = 0;

    for (let i = 1; i <= k; i++) {
        if (i % 2 == 0) {
            resultEven += i * i;
        } else {
            resultUneven += i * i;
        }
    }

    return resultEven - resultUneven;
}