function removeArrayPart(inputArray: number[], l: number, r: number): number[] {
    inputArray.splice(l, r - l + 1);
    return inputArray
}


