function longestDigitPrefix(inputString: string): string {
    let prefixDigits: string = "";
    
    for (let i: number = 0; i < inputString.length; i++) {
        if (inputString[i].match('[0-9]')) {
            prefixDigits += inputString[i];
        } else {
            break;
        }
    }
    
    return prefixDigits;
}

let testString = '123a a1&';
let testString2 = 'asdas df3';
let testString3 = '8764567';

console.log(longestDigitPrefix(testString2));
console.log(testString.replace(/[ `~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''))