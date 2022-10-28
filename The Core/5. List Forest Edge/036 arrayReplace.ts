function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    inputArray.forEach((el, i, arr) => {
        if (el == elemToReplace) {
            arr[i] = substitutionElem;
        }
    });

    return inputArray;
}