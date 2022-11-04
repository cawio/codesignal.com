class Task155 {
    constructor (
        private state: string[],
        private expOut: number
    ) {}

    getResults(): string {
        return `expOut: ${this.expOut} myOut: ${pipesGame(this.state)}`;
    }
}

function pipesGame(state: string[]): number {

    return 0;
}

const task155_1: Task155 = new Task155(
    ["a224C22300000", 
     "0001643722B00", 
     "0b27275100000", 
     "00c7256500000", 
     "0006A45000000"],
     19
)
console.log(task155_1.getResults());