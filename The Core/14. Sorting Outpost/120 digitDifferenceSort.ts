function digitDifferenceSort(a: number[]): number[] {
    let diffs: DiffsObj[] = a.map((el: number, index: number) => {
        return {
            n: el,
            i: index,
            diff: getDiff(el) 
        };
    });

    diffs.sort((a: DiffsObj, b: DiffsObj) => {
        if (a.diff === b.diff) {
            return b.i - a.i;
        }
        return a.diff - b.diff;
    });

    return diffs.map((el: DiffsObj) => el.n);
}

interface DiffsObj {
    n: number;
    i: number;
    diff: number;
}

// https://www.geeksforgeeks.org/largest-and-smallest-digit-of-a-number/
function getDiff(n: number): number {
    let largest: number = 0;
    let smallest: number = 9;
 
    while (n) {
        let r: number = n % 10;
 
        // Find the largest digit
        largest = Math.max(r, largest);
 
        // Find the smallest digit
        smallest = Math.min(r, smallest);
 
        n = Math.floor(n / 10);
    }

    return largest - smallest;
}

const task120_1: number[] = [152, 23, 7, 887, 243];
console.log(digitDifferenceSort(task120_1));