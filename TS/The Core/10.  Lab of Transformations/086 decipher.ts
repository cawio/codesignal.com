function decipher(cipher: string): string {
    const charCodeArr: string[] = getCharCodes(cipher);

    let decipered: string = charCodeArr
        .map((el: string) => String.fromCharCode(parseInt(el)))
        .join('');

    return decipered;
}

function getCharCodes(s: string): string[] {
    let result: string[] = [];

    while (s.length != 0) {
        if (s.charAt(0) === '1') {
            result.push(s.substring(0, 3));
            s = s.slice(3);
        } else {
            result.push(s.substring(0, 2));
            s = s.slice(2);
        }
    }

    return result;
}

console.log(decipher('10197115121'));