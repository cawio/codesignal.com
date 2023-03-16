import { permute } from './allTheOrders';

function stringsRearrangement(inputArray: string[]): boolean {
    let canRearrange: boolean = false;
    let allOrdersArr: string[][] = permute(inputArray).slice(1);
    allOrdersArr.forEach(item => {
        console.log(item)
    });
    for (let i = 0; i < allOrdersArr.length; i++) {
        let passedChecks: string[] = [];
        for (let j = 0; j < allOrdersArr[i].length - 1; j++) {
            if (countpassedChecksChars(allOrdersArr[i][j], allOrdersArr[i][j + 1]) === 1) {
                passedChecks.push('pass');
            }
            console.log(passedChecks);
        }
        if (passedChecks.length === inputArray.length - 1) {
            canRearrange = true;
        }
    }
    return canRearrange;
}

function countpassedChecksChars(str1: string, str2: string): number {
    console.log('comparing', str1, 'to', str2);
    let passedChecksCount: number = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1.charAt(i) !== str2.charAt(i)) {
            passedChecksCount++;
        }
    }
    console.log('passedChecks count:', passedChecksCount);
    return passedChecksCount;
}


let stringsRearrangementTest1: string[] = ["aba", "bbb", "bab"]; //expected false
let stringsRearrangementTest2: string[] = ["ab", "bb", "aa"]; //expected true
let stringsRearrangementTest3: string[] = ['q', 'q']; //expected true

console.log(stringsRearrangement(stringsRearrangementTest1));
console.log(stringsRearrangement(stringsRearrangementTest2));
console.log(stringsRearrangement(stringsRearrangementTest3));

//console.log(countpassedChecksChars("abc", "aac"));

//let arr = stringsRearrangementTest1.map(element => element);
//console.log(arr);

