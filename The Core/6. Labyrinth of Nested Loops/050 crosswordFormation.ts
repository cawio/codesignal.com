/* 
    generate all permutations
        check if 2nd and 3rd element from permutation and be placed onto 1st element with atleast 2 letters tailing and atleast one letter apart from eachother
            try to place 4th element into the cluster 
*/

function crosswordFormation(words: string[]): number {
    const allPermutations: string[][] = permutations(words);    
    console.table(allPermutations);
    
    let count: number = 0;
    allPermutations.forEach((perm: string[]) => {
        const wordH1: string = perm[0];
        const wordV1: string = perm[1];
        const wordH2: string = perm[2]; 
        const wordV2: string = perm[3];
        
        // for (let i = 0; i < firstWord.length; i++) {
        //     let currentLetter1: string = firstWord.charAt(i);
        //     for (let j = 0; j < secondWord.length - 2; j++) {
        //         let currentLetter2: string = secondWord.charAt(j);
        //         if (currentLetter1 === currentLetter2) {
        //             console.log(firstWord, currentLetter1, i, secondWord, currentLetter2, j);
        //             for (let k = j + 2; k < secondWord.length; k++) {
        //                 let currentLetter22 = secondWord.charAt(k);
        //                 for (let l = 0; l < thirdWord.length; l++) {
        //                     let currentLetter3: string = thirdWord.charAt(l);
        //                     if (currentLetter22 === currentLetter3) {
        //                         console.log(firstWord, currentLetter1, i, secondWord, currentLetter2, k, thirdWord, currentLetter3, l);
        //                         for (let m = l + 2; m < thirdWord.length; m++) {
        //                             for (let n = 0; n < fourthWord.length - n; n++) {
        //                                 let width: number = k - j;
        //                                 let height: number = m - l;

        //                                 if (n - width >= 0 && i + height < firstWord.length) {
        //                                     if (fourthWord.charAt(n - width) === firstWord.charAt(i + height)) {
        //                                         count++;
        //                                     }

        //                                 }
        //                             }
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     }  
        // }
        for (let i = 0; i < wordH1.length; i++)
            for (let j = i + 2; j < wordV1.length; j++)
                for (let k = 0; k < wordV1.length; k++)
                    for (let l = k + 2; l < wordV1.length; l++)
                        for (let m = 0; m < wordH2.length; m++)
                            for (let n = 0; n < wordV2.length; n++) {
                                let dif1 = m + (j - i);
                                let dif2 = n + (l - k);
                                if (dif1 < wordH2.length && dif2 < wordV2.length) {
                                    if (wordH1.charAt(i)==wordV1.charAt(k) &&
                                        wordH1.charAt(j)==wordV2.charAt(n) &&
                                        wordH2.charAt(m)==wordV1.charAt(l) &&
                                        wordH2.charAt(dif1)==wordV2.charAt(dif2)) {
                                        count++;
                                    }
                                }
                            }
    });

    return count;
}

function permutations(stringArr: string[]): string[][] {
    if (stringArr.length === 0) {
        return [[]];
    }
    
    const firstWord: string = stringArr[0];
    const remainingWords: string[] = stringArr.slice(1); 
    const permsWithoutFirst: string[][] = permutations(remainingWords);
    
    let allPermutations: string[][] = [];
    permsWithoutFirst.forEach((perm: string[]) => {
        for (let i = 0; i <= perm.length; i++) {
            const permsWithFirst: string[] = [...perm.slice(0, i), firstWord, ...perm.slice(i)];
            allPermutations.push(permsWithFirst);
        }
    });

    return allPermutations;
}

const task50_Test1: string [] = ["crossword", "square", "formation", "something"];

console.log(crosswordFormation(task50_Test1));