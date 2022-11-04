class Task143 {
    constructor (
        private pairOfLines: string,
        private expOut: boolean
    ) {}
    
    printResults(): string {
        return (`expOut: ${this.expOut} myOut: ${eyeRhyme(this.pairOfLines)}`);
    }
}

function eyeRhyme(pairOfLines: string): boolean {
    const re = /^.*(.{3})\t.*(.{3})$/g;
    const match = re.exec(pairOfLines);
    console.log(match);
    if (match === null) {
        return false;
    }

    return match[1] == match[2];
}

const task143_1: Task143 = new Task143('cough\tbough', true);
console.log(task143_1.printResults());

const task143_2: Task143 = new Task143('CodeFig!ht\tWith all your might', false);
console.log(task143_2.printResults());