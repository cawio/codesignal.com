function firstDigit(inputString: string): string {
    let result: string = '';
    let numberFound: boolean = false;
    for (let i = 0; i < inputString.length; i++) {
        if(isNaN(+inputString[i]) == false && numberFound == false && inputString[i] !== ' ') {
            result = inputString[i];
            numberFound = true;
        }
    }

    return result;
}

let testString1: string = "var_1__Int";

console.log(firstDigit(testString1));