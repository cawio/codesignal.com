function lineEncoding(s: string): string {
    let sArr: string[] = s.split('')
    let encodedArr: string[] = [];

    for(let i = 0; sArr.length > 0; i = 0) {
        let currentLetter: string = sArr[i];
        let appearances: number = 0;
        for ( let j = 0; sArr[j] == currentLetter; j++) {
            appearances++;
        }
        if (appearances > 1) {
            encodedArr.push(appearances.toString() + currentLetter);
        }
        else {
            encodedArr.push(currentLetter);
        }
        sArr.splice(0, appearances);
    }

    return encodedArr.join('');
}

let testEncode1: string = 'aabbbc';
let testEncode2: string = 'abbcabb';
let testEncode3: string = 'abcd';
let testEncode4: string = 'zzzz';
let testEncode5: string = 'wwwwwwwawwwwwww';
let testEncode6: string = 'ccccccccccccccc';
let testEncode7: string = 'qwertyuioplkjhg';
let testEncode8: string = 'ssiiggkooo';
let testEncode9: string = 'adfaaa';
let testEncode0: string = 'bbjaadlkjdl';

console.log(testEncode0.split('').sort());
console.log([].length)
console.log('------------------')

console.log(lineEncoding(testEncode1));
console.log(lineEncoding(testEncode2));
console.log(lineEncoding(testEncode3));
console.log(lineEncoding(testEncode4));
console.log(lineEncoding(testEncode5));
console.log(lineEncoding(testEncode6));
console.log(lineEncoding(testEncode7));
console.log(lineEncoding(testEncode8));
console.log(lineEncoding(testEncode9));
console.log(lineEncoding(testEncode0));