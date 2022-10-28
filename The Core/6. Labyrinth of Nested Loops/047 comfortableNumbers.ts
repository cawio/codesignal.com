/* 
    too slow, but correct

function comfortableNumbers(l: number, r: number): number {
    //create the segment from l to r
    let segment: number[] = [];
    for (let i = l; i <= r; i++) {
        segment.push(i);
    }
    console.log('segment');
    console.table(segment);

    //create segment of border numbers that are comfortable with the base segment of numbers
    let comfortableSegment: number[][] = segment.map((el: number) => {
        let sum: number = sumOfDigits(el);
        return [el - sum, el + sum];
    });
    console.log('comfortable borders');
    console.table(comfortableSegment);

    //transfrom segment to include all numbers between borders
    comfortableSegment = comfortableSegment.map((el: number[], index: number) => {
        let tempArr: number[] = [];
        for (let i = el[0]; i <= el[el.length - 1]; i++) {
            if (i === segment[index]) continue;
            tempArr.push(i);
        }

        return tempArr;
    });
    console.log('filled in borders');
    console.table(comfortableSegment);
    
    let counter: number = 0;
    let countedCombinations: string[] = [];
    for (let i = 0; i < comfortableSegment.length - 1; i++) {
        for (let j = 0; j < comfortableSegment[i].length; j++) {
            let currentA: number = comfortableSegment[i][j];
            for (let k = 0; k < comfortableSegment[i + 1].length; k++) {
                let currentB: number = comfortableSegment[i + 1][k];
                let abString: string = currentA.toString().concat(currentB.toString());
                let baString: string = currentB.toString().concat(currentA.toString());
                if (checkComfortable(l, r, currentA, currentB) && !countedCombinations.some((el: string) => el === abString)) {
                    countedCombinations.push(abString, baString);
                    console.log(countedCombinations);
                    counter++;
                }
            }
        }
    }

    console.log('counter');
    return counter;
} */

function comfortableNumbers(l: number, r: number): number {
    let combinations: number[][] = [];
    //between l & r
    for (let i = l; i <= r; i++) { //a
        let limit: number = Math.min(r, i + sumOfDigits(i));
        for (let j = i + 1; j <= limit; j++ ) { //b -> has to be larger a
            if (i === j) 
                continue; //a and b cannot be equal

            if (!checkComfortable(l, r, i, j)) continue; //has to be comfortable

            combinations.push([i, j]);
        }
    }

    return combinations.length;
}

function sumOfDigits2(n: number): number {
    return n.toString().split('').reduce((acc: number, el: string) => acc += parseInt(el), 0);
}

function sumOfDigits(n: number): number {
    let sum: number = 0;
    while (n > 9) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    sum += n;

    return sum;
}

function checkComfortable(segmentStart: number, segmentEnd: number, a: number, b: number): boolean {
    //cond1: b has to be bigger then  a
    if (b < a) 
        return false;

    //cond2: a and b need to be in range ob sStart and sEnd
    if (a < segmentStart || a > segmentEnd) 
        return false;

    if (b < segmentStart || b > segmentEnd) 
        return false;

    //cond3: a needs to be comfortable with b
    if (a === b) 
        return false;

    if (b < a - sumOfDigits(a) || b > a + sumOfDigits(a)) 
        return false;

    //cond4: b needs to be comfortable with a
    if (a < b - sumOfDigits(b) || a > b + sumOfDigits(b)) 
        return false;

    return true;
}

interface Task47 {
    l: number;
    r: number;
    expOut: number
};

const task47_Test1: Task47 = {l: 10, r: 12, expOut: 2};
const task47_Test2: Task47 = {l: 1, r: 9, expOut: 20};
const task47_Test6: Task47 = {l: 1, r: 1000, expOut: 11435};

console.log('expOut', task47_Test1.expOut, '| myOut', comfortableNumbers(task47_Test1.l, task47_Test1.r));
console.log('expOut', task47_Test2.expOut, '| myOut', comfortableNumbers(task47_Test2.l, task47_Test2.r));
console.log('expOut', task47_Test6.expOut, '| myOut', comfortableNumbers(task47_Test6.l, task47_Test6.r));