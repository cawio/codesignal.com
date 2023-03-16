class CountElements {
    constructor (
        private id: number,
        private inputString: string,
        private expOut: number,
    ) {}

    public solution(): number {
        this.inputString = this.inputString
            .replace(/[\[\]]/g, '')
            .replace(/".+?"/g, 'typeString');

        if (this.inputString === '') {
            return 0;
        }

        return this.inputString.split(',').length;
    }

    public try(): string {
        const testPassed: boolean = this.expOut === this.solution();
        return `Test ${String(this.id).padStart(2, '0')}: ${testPassed ? 'passed 😊' : 'failed 🥴'}`;
    }
}

let task152Tests: CountElements[] = [
    new CountElements(1, "[[0, 20], [33, 99]]", 4),
    new CountElements(2, "[ \"one\", 2, \"three\" ]", 3),
    new CountElements(3, "true", 1),
    new CountElements(4, "[[1, 2, [3]], 4]", 4),
    new CountElements(5, "[\"oh, no! kind, of, tricky\", \"test, case\"]", 2),
    new CountElements(11, "[]", 0),
]

task152Tests.forEach((el: CountElements) => console.log(el.try()));