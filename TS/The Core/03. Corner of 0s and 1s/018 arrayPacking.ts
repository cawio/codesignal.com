function arrayPacking(a: number[]): number {
    let binaryRepresentation: string[] = a.map(element => {
        return element.toString(2).padStart(8, '0');
    });
    
    return parseInt(binaryRepresentation.reverse().join(''), 2);
}

const arrayPackingTest1: number[] = [24, 85, 0];

console.log(arrayPacking(arrayPackingTest1));