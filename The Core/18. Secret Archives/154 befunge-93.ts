class Befunge93 {
    constructor (
        private id: number,
        private programm: string[],
        private expOut: string
    ) {}

    public solution(): string {
        return this.programm.join();
    }

    public try(): string {
        const testPassed: boolean = this.expOut === this.solution();
        return `Test ${String(this.id).padStart(2, '0')}: ${testPassed ? 'passed 😊' : 'failed 😣'}`;
    }
}

let task154Tests: Befunge93[] = [
    new Befunge93(
        1, 
        ["               v", 
         "v  ,,,,,\"Hello\"<",
         ">48*,          v",
         "\"!dlroW\",,,,,,v>",
         "25*,@         > "],
        "Hello World!\n"
    ),
]
task154Tests.forEach((el: Befunge93) => console.log(el.try()));