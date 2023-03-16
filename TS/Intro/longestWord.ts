function longestWord(text: string): string {
    let wordsObj: any = text.match(/[A-Za-z]{2,}/g);
    let result: string = '';
    for (let i = 0; i < wordsObj.length; i++) {
        if (wordsObj?.[i].length > result.length) {
            result = wordsObj?.[i];
        }
    }
    return result;
}

let longestWordTest1: string = 'Ready, steady, go!';
let longestWordTest2: string = 'Ready[[[, steady, go!';
let longestWordTest3: string = 'ABCd';
let longestWordTest4: string = 'To be or not to be';
let longestWordTest5: string = 'You are the best!!!!!!!!!!!! CodeFighter ever!';

console.log(longestWord(longestWordTest1));
console.log(longestWord(longestWordTest2));
console.log(longestWord(longestWordTest3));
console.log(longestWord(longestWordTest4));
console.log(longestWord(longestWordTest5));

// console.log((/[A-Za-z]{2,}/g).exec(longestWordTest1));
// console.log(longestWordTest1.match(/[A-Za-z]{2,}/g)?.[0])