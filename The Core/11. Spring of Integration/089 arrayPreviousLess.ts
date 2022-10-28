function arrayPreviousLess(items: number[]): number[] {
    return items.map((el: number, index: number, arr: number[]) => {
        let maxLesserPrev: number = -1;
        for (let i = 0; i < index; i++) {
            if (arr[i] < el) {
                maxLesserPrev = arr[i];
            }
        }
        return maxLesserPrev;
    });
}

console.log('[-1, 3, -1, 2, 4]', arrayPreviousLess([3, 5, 2, 4, 5]));