class Task145 {
    constructor(
        readonly id: number,
        readonly letter: string,
        readonly expOut: number

    ) {}

    repetitionEncryption(letter: string): number {
        let pattern: RegExp = /([a-zA-Z]+)[^a-zA-Z]+\1(?![a-zA-Z])/gi;
        let matches: RegExpMatchArray | null = letter.match(pattern);

        if (matches) {
            return matches.length;
        } else {
            return 0;
        }
    }

    try(): string {
        const testPassed: boolean = this.expOut === this.repetitionEncryption(this.letter);
        return `Test ${this.id}: ${testPassed ? 'passed 😎' : 'failed 😢'}`;
    }
}

const task145_1: Task145 = new Task145(
    1,
    "Hi, hi Jane! I'm so. So glad to to finally be able to write - WRITE!! - to you!",
    4
);
console.log(task145_1.try());
