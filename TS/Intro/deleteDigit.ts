function deleteDigit(n: number): number {
    let nArr: number[] = Array.from(String(n), elem => +elem);
    let max: number = 0;
    for (let i = 0; i < nArr.length; i++) {
        let tempArr: number[] = [];
        tempArr = tempArr.concat(nArr);
        tempArr = tempArr.slice(0, i).concat(tempArr.slice(i + 1));
        let arrAsNumber: number = +tempArr.join('');
              
        if (arrAsNumber > max) {
            max = arrAsNumber;
        }
    }

    return max;
}

let testNumber1: number = 152;
let testNumber2: number = 1001;

console.log(deleteDigit(testNumber1));
console.log(deleteDigit(testNumber2));





