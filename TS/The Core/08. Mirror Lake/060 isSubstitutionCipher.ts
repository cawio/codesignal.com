function isSubstitutionCiper(string1: string, string2: string): boolean {
    let blocked: string[] = [];
    for (let i = 0; i < string1.length; i++) {
        const c1: string = string1.charAt(i);
        const c2: string = string2.charAt(i);
        blocked.push(c1);
        if (c1 !== c2) {
            if (blocked.includes(c2)) {
                return false;
            }
            string2 = changeToTarget(string2, c2, c1);
        }
    }

    return string1 === string2;
}

function changeToTarget(s: string, from: string, to: string) {
    let sArr: string[] = s.split('');
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === from) {
            sArr[i] = to;
        } else if (sArr[i] === to) {
            sArr[i] = from;
        }
    }

    return sArr.join('');
}

console.log(isSubstitutionCiper('aacb', 'aabc'))

console.log(changeToTarget('aabc', 'c', 'b'));