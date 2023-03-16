function extractEachKth(inputArray: number[], k: number): number[] {
    //get index of kth values and store it in toBeRemoved array
    let toBeRemoved: number[] = [];
    inputArray.forEach((value: number, index) => {
        if ((index + 1) % k == 0) {
            toBeRemoved.push(index);
        }
    });

    //remove values with indexes stored in toBeRemoved
    for (let i = toBeRemoved.length - 1; i > - 1; i--) {
        inputArray.splice(toBeRemoved[i], 1);
    }

    return inputArray;
}

let extractTest: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let extractBy: number = 3;

let extractTest1: number[] = [1, 1, 1, 1, 1];
let extractBy1: number = 1;

let extractTest2: number[] = [2, 4, 6, 8, 10];
let extractBy2: number = 2;

console.log(extractEachKth(extractTest2, extractBy2));
