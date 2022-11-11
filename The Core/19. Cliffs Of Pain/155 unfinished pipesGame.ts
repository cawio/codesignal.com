// class PipesGame {
//     constructor (
//         private id: number,
//         private state: string[],
//         private expOut: number
//     ) {}
//     private solution(state: string[]): number {

//         return 0;
//     }

//     public try(): string {
//         const testPassed: boolean = this.expOut == this.solution(this.state);
//         return `Test ${this.id}: ${testPassed ? 'passed 😎' : 'failed 😢'}`;
//     }
// }


// const task155Tests: PipesGame[] = [
//     new PipesGame(1, ["a224C22300000", "0001643722B00",  "0b27275100000", "00c7256500000", "0006A45000000"], 19)
// ];

// task155Tests.forEach((el: PipesGame) => console.log(el.try()));