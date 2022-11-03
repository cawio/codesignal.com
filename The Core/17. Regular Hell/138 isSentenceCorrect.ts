/* 
    A sentence is considered correct if:
    - it starts with a capital letter; [A-Z]
    - it ends with a full stop, question mark or exclamation point ('.', '?' or '!'); [?!\.]$
    - full stops, question marks and exclamation points don't appear anywhere else in the sentence. [^?!\.]*
*/

function isSentenceCorrect(sentence: string): boolean {
    let re = /^[A-Z][^?!\.]*[?\.!]$/g;
    return re.test(sentence);
}

console.log(isSentenceCorrect('This is an example of *correct* sentence.'), true);
console.log(isSentenceCorrect('this sentence, Im afraid, is a bit incorrect.'), false);