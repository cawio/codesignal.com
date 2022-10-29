function areSimilar(arrayA: number[], arrayB: number[]): boolean {
    let swappablesValuesA: number[] = [];
    let swappablesValuesB: number[]= [];
    
    arrayA.forEach((numberA, index) => {
        const numberB: number = arrayB[index];
        if(numberA !== numberB) {
            swappablesValuesA.push(numberA);
            swappablesValuesB.push(numberB);
        }
    })
    
    // nothing to swap
    if(swappablesValuesA.length === 0) {
        return true;
    }
    
    // too many differences
    if(swappablesValuesA.length > 2) {
         return false;
    }

    // can replace one element and be similar
    if(swappablesValuesA[0] === swappablesValuesB[1] && swappablesValuesB[0] === swappablesValuesA[1]) {
        return true;
    }

    return false;
}