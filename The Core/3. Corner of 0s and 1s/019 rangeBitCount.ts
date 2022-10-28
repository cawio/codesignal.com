function rangeBitCount(a: number, b: number): number {
    let rangeArr: number[] = [];
    for (let i = a; i <= b; i++) {
        rangeArr.push(i);
    }

    let binaryArr: string[] = rangeArr.map(element => {
        return element.toString(2);
    });

    let count: number = 0;
    binaryArr.forEach(element => {
        let sArr: string[] = element.split('');
        sArr.forEach(element => {
            if (element == '1') {
                count++;
            }
        });
    }) ;

    return count;
}

interface BitCount {
    a: number,
    b: number,
    expOut: number
};

let bitCountTest1: BitCount = {
    a: 2, 
    b: 7, 
    expOut: 11
};

console.log('expected output:', bitCountTest1.expOut, 'my output:', rangeBitCount(bitCountTest1.a, bitCountTest1.b));