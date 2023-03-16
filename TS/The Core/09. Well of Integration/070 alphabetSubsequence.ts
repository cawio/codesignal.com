function alphabetSubsequence(s: string): boolean {
    // const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    // const pattern: RegExp = new RegExp(s);
    // console.log(pattern);
    
    // return pattern.test(alphabet);
    let iter: number = 0;
    let prevCharCode: number = 0;
    while (s.charCodeAt(iter) > prevCharCode) {
        prevCharCode = s.charCodeAt(iter);
        iter++;
    }

    if (iter === s.length) {
        return true;
    }

    return false;
}

console.log(alphabetSubsequence('cdef'));
console.log(alphabetSubsequence('ace'));