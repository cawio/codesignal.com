class Task144 {
    constructor (
        private code: string,
        private args: string[],
        private expOut: string
    ) {}

    getResults(): string {
        return `expOut: ${this.expOut} myOut: ${programTranslation(this.code, this.args)}`;
    }
}

function programTranslation(code: string, args: string[]) {
    let argumentVariants = args.join('|');
    let re = new RegExp("(\\W)\\$?("+argumentVariants+")(?=\\W)", "g");;
    let sub = `$1$$$2`;

    return code.replace(re, sub);
}

const task144_1: Task144 = new Task144(
    'function add($n, m) {\t  return n + $m;\t}',
    ["n", "m"],
    "function add($n, $m) {\t  return $n + $m;\t}"
);
console.log(task144_1.getResults());