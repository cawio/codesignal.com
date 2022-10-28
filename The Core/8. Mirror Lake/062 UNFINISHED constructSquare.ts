function constructSquare(s: string): number {
    const countedChars: letterCount[] = countLetters(s);
    while () {
        
    }

    return -1;
}

interface letterCount {
    letter: string;
    count: number
}

function countLetters(s: string): letterCount[] {
    let result: letterCount[] = [];

    for (let i = 97; i < 123; i++) {
        const currChar: string = String.fromCharCode(i);
        if (s.includes(currChar)) {
            let amount: number = 0;

            for (let j = 0; j < s.length; j++) {
                if (s.charAt(j) === currChar) {
                    amount++;
                }
            }

            result.push({
                letter: currChar,
                count: amount
            });
        }
    }

    return result;
}

console.log(constructSquare('abcbbb'));