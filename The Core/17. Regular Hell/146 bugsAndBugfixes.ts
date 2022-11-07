class Task146 {
    constructor(
        readonly id: number,
        readonly rules: string,
        readonly expOut: number

    ) {}

    bugsAndBugfixes (rules: string) {
        let pattern = /\w/g;
        let formula = pattern.exec(rules);
      
        let res = 0;
        while (formula) {
          let rolls = formula[1] ? parseInt(formula[1]) : 1;
          let dieType = parseInt(formula[2]);
          let formulaMax = rolls * dieType;
      
          if (formula[3]) {
            if (formula[3][0] === '-') {
                formulaMax -= parseInt(formula[3].slice(1));
            } else {
                formulaMax += parseInt(formula[3].slice(1));
            }
        }
      
            res += formulaMax;
            formula = pattern.exec(rules);
        }
      
        return res;
    }

    try(): string {
        const testPassed: boolean = this.expOut === this.bugsAndBugfixes(this.rules);
        return `Test ${this.id}: ${testPassed ? 'passed 😎' : 'failed 😢'}`;
    }
}

const task146_1: Task146 = new Task146(
    1,
    "Roll d6-3 and 4d4+3 to pick a weapon, and finish the boss with 3d7!",
    43
);
console.log(task146_1.try());