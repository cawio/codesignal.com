function stringsCrosover(inputArray: string[], result: string): number {
    let tmpString: string = ''
    let count: number = 0;
    let usedComb: string[] = []
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < inputArray.length; j++) {
            //a pair cannot include the same element of the array twice
            if (i === j) {
                continue;
            }

            const s1: string = inputArray[i];   //A
            const s2: string = inputArray[j];   //B
            
            //if combination (A, B or B, A) is already used skip to next element
            const comb: string = `${i}, ${j}`;
            if (usedComb.includes(comb)) {
                continue;
            }

            //checking if i can form result with letters from s1 & s2
            for(let k = 0; k < result.length; k++) {
                const cChar: string = result.charAt(k);

                if (s1.charAt(k) === cChar || s2.charAt(k) === cChar) {
                    //if either of the strings at has that letter at that position add it to tmpString
                    tmpString += cChar
                } else {
                    //if not stop evaluating this case
                    break;
                }
            }

            if (tmpString === result) {
                //if tmpString === result, count +1 and add the combinations to the array
                count ++;
                usedComb.push(`${i}, ${j}`, `${j}, ${i}`);
            }
            console.log(usedComb);

            //reset tmpString
            tmpString = '';
        }
    }

    return count;
}

interface Task92 {
    iA: string[];
    r: string;
    expOut: number;
}

const task92Test1: Task92 = {iA: ["abc", "aaa", "aba", "bab"], r: 'bbb', expOut: 2};
const task92Test7: Task92 = {iA: ["cbb", "aba", "aba", "bab"], r: "abb", expOut: 4};
console.log('expOut', task92Test1.expOut, '| myOut', stringsCrosover(task92Test1.iA, task92Test1.r));
console.log('expOut', task92Test7.expOut, '| myOut', stringsCrosover(task92Test7.iA, task92Test7.r));