class Task142 {
    constructor(
        private t: string,
        private s: string,
        private expOut: boolean
    ) {}

    getResults(): string {
        return `expOut: ${this.expOut} myOut: ${isSubsequence(this.t, this.s)}`;
    }
}

function isSubsequence(t: string, s: string): boolean {
    let pattern = '';
    for (let i = 0; i < s.length; i++) {
        pattern += `.*${['?', '*', '.', `+`, '/'].includes(s.charAt(i)) ? '\\' + s.charAt(i) : s.charAt(i)}`;
    }
    let re = new RegExp(pattern);

    return re.test(t);
}

const task142_1: Task142 = new Task142('CodeSignal', 'CoSi', true);
console.log(task142_1.getResults());

const task142_8: Task142 = new Task142('he sd.f dsk e8.sd??l**23, 23,f.s++83+', 'h  8.?*3+', true);
console.log(task142_8.getResults());