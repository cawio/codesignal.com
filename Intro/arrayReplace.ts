function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    // find items to replace
    let replaceHere: number[] = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === elemToReplace) {
            replaceHere.push(i);
        }
    }

    // create new array and change items
    let changedArray: number[] = inputArray;
    for (let i = 0; i < replaceHere.length; i++) {
        changedArray.splice(replaceHere[i], 1, substitutionElem)
    }

    return changedArray;
}

let test1InputArray:number[] = [1, 2, 1];
let test1ElemToReplace:number = 1;
let test1SubstitutionElem:number = 3;

console.log( arrayReplace(test1InputArray, test1ElemToReplace, test1SubstitutionElem) );