function timedReading(maxLength: number, text: string): number {
    const pattern: RegExp = /[A-Za-z]+/g;
    const words: RegExpMatchArray | null = text.match(pattern);
    let wordsRead: number = 0;
    if (words === null) {
        return 0;
    } else {
        words.forEach((el: string) => {
            if (el.length <= maxLength) {
                wordsRead++;
            } 
        });
    }

    return wordsRead;
}

interface Task74 {
    mL: number;
    s: string;
    expOut: number
}

const task74Test1: Task74 = {mL: 4, s: "The Fox asked the stork, 'How is the soup?'", expOut: 7}

console.log('expOut', task74Test1.expOut, '| myOut', timedReading(task74Test1.mL, task74Test1.s));

