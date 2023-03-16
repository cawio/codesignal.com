function differentSymbolsNaive(s: string): number {
    let charCount: number = 0;
    let countedChars: string[] = [];

    //if char is not already counted, count and add it to array
    for (let i = 0; i < s.length; i++) {
        if(countedChars.indexOf(s[i]) == -1) {
            countedChars.push(s[i])
            charCount++
        }
    }

    return charCount;
}