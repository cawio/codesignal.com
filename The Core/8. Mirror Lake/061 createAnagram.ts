function createAnagram(s: string, t: string): number {
    let sArr: string[] = s.split("");
    let pos: number = 0;
    for (let i = 0; i < t.length; i++) {
        pos = sArr.indexOf(t[i]);
        if (pos >= 0) {
            sArr.splice(pos, 1);
        }
    }

    return sArr.length;
}

console.log(createAnagram('AABAA', 'BBAAA'));
