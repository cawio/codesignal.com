function buildPalindrome(st: string): string {
    let finishedPalindrome: string = '';
    for (let i = 0; i < st.length; i++) {
        let stCopy: string = st;
        if (!checkPalindrome(stCopy)) {
            stCopy += st.substring(0, i).split('').reverse().join('');
        }
        if(checkPalindrome(stCopy)) {
            finishedPalindrome = stCopy;
            break;
        }
    }

    return finishedPalindrome;
}

function checkPalindrome(inputString: string): boolean {
    return inputString === inputString.split('').reverse().join('');
}

let buildPalindromeTest1: string = 'abcdc';
let buildPalindromeTest2: string = 'ababab';
let buildPalindromeTest3: string = 'abba';
let buildPalindromeTest4: string = 'abaa';

console.log(buildPalindrome(buildPalindromeTest1));
console.log(buildPalindrome(buildPalindromeTest2));
console.log(buildPalindrome(buildPalindromeTest3));
console.log(buildPalindrome(buildPalindromeTest4));
