function isPower(n: number): boolean {
    let i = 2;
    while (Math.pow(n, 1 / i) >= 2) {
        const root = Math.round(Math.pow(n, 1 / i));
        if (Math.pow(root, i++) === n) return true;
    }
    return n === 1;
}

const task43_Test1: number = 125;
const task43_Test2: number = 72;
const task43_Test3: number = 100;

console.log(isPower(task43_Test1));
console.log(isPower(task43_Test2));
console.log(isPower(task43_Test3));