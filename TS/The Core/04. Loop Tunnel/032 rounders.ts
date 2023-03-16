function rounders(n: number): number {
    let nArr: string[] = n.toString().split('').reverse();
    for (let i = 0; checkNonZeroDigits(nArr); i++) {
        let roundingThis: number = parseInt(nArr[i]);
        if (roundingThis < 5) {
            nArr[i] = '0';
        } else {
            nArr[i] = '0';
            nArr[i + 1] = (parseInt(nArr[i + 1]) + 1).toString();
        }
    }

    return parseInt(nArr.reverse().join(''));

}

function checkNonZeroDigits(nArr: string[]): boolean {      // returns true if there is more than one non 0 digit in the number
    let nonZeroDigits: number = 0;
    nArr.forEach(element =>  {
        if (element != '0') {
            nonZeroDigits++;
        }
    });


    return nonZeroDigits > 1;
}