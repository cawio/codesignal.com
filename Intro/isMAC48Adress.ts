function isMAC48Adress(inputString: string): boolean {
    let stringArr: string[] = inputString.split('-');

    if (stringArr.length != 6) {
        return false;
    }

    let allowedChars: string[] = ['A', 'B', 'C', 'D', 'E', 'F']
    for (let i = 0; i < stringArr.length; i++) {
        if(!(stringArr[i].length == 2)) {
            return false;
        }
        for (let j = 0; j < 2; j++) {
            if (!allowedChars.includes(stringArr[i][j]) && isNaN(parseInt(stringArr[i][j]))) {
                return false;
            }
        }
    }

    return true;
}

let testMAC1: string = '00-1B-63-84-45-E6';
let testMAC2: string = 'Z1-1B-63-84-45-E6';
let testMAC3: string = 'not a MAC-48 address';
let testMAC4: string = 'FF-FF-FF-FF-FF-FF';
let testMAC5: string = '00-00-00-00-00-00';
let testMAC6: string = 'G0-00-00-00-00-00';
let testMAC7: string = '02-03-04-05-06-07-';
let testMAC8: string = '12-34-56-78-9A-BC';
let testMAC9: string = 'FF-FF-AB-CD-EA-BC';
let testMAC0: string = '12-34-56-78-9A-BG';
let testMAC11: string = 'FF- F-AB-CD-EA-BC';

console.log('result is:', isMAC48Adress(testMAC1), 'expected to be true');
console.log('result is:', isMAC48Adress(testMAC2), 'expected to be false');
console.log('result is:', isMAC48Adress(testMAC3), 'expected to be false');
console.log('result is:', isMAC48Adress(testMAC4), 'expected to be true');
console.log('result is:', isMAC48Adress(testMAC5), 'expected to be true');
console.log('result is:', isMAC48Adress(testMAC6), 'expected to be false');
console.log('result is:', isMAC48Adress(testMAC7), 'expected to be false');
console.log('result is:', isMAC48Adress(testMAC8), 'expected to be true');
console.log('result is:', isMAC48Adress(testMAC9), 'expected to be true');
console.log('result is:', isMAC48Adress(testMAC0), 'expected to be false');
console.log('result is:', isMAC48Adress(testMAC11), 'expected to be false');
