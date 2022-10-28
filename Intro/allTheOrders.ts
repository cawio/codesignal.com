export function permute(strArr: string[]): string[][] {
    let result: string[][] = [[]];
    if (strArr.length === 0) {
        return [];
    }
    if (strArr.length === 1) {
        return [strArr];
    }
    for (let i = 0; i < strArr.length; i++) {
        const currentStartElement: string = strArr[i];
        const remainingElements: string[] = strArr.slice(0, i).concat(strArr.slice(i + 1));         //all before currentFirstElement and all after it
        const remainingNumsPermuted: string[][] = permute(remainingElements);                       //swap all the remainingElements
        for (let j = 0; j < remainingNumsPermuted.length; j++) {
            const permutedArray: string[] = [currentStartElement].concat(remainingNumsPermuted[j])  //premuted array is created from currentFirstElement + all the swapped remainingElements
            if (permutedArray.length === strArr.length) {
                result.push(permutedArray);                                                         //result is all the possible swaps 
            }
        }
    }
    return result;
}

/* function printAllOrders(strArr: string[]): void {
    for (let i = 0; i < permute(strArr).length; i++) {
        console.log(permute(strArr)[i]);
    }
}

let testArray: string[] = ['aba', 'bbb', 'bab'];
console.log(printAllOrders(testArray)); */
