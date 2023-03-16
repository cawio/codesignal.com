function alphabeticalShift(inputString: string): string {
    let shiftedStringArray: string[] = [];

    for (let i = 0; i < inputString.length; i++) {

        if(inputString[i] == 'z') {
            shiftedStringArray.push('a');
        }
        else {
        shiftedStringArray.push(String.fromCharCode(inputString[i].charCodeAt(0)+1));
        }
    }

    return shiftedStringArray.join('');
}

let alphabeticalShiftTest1: string = 'crazy';

console.log(alphabeticalShift(alphabeticalShiftTest1));


console.log(String.fromCharCode(alphabeticalShiftTest1.charCodeAt(1)+1));