function stringsConstruction(a: string, b: string): number {
    let count = 0;

    while (count >= 0) {
        for (const str of a) {
            if (b.indexOf(str) < 0) { 
                return count;
            }
            b = b.replace(str, '')
        }
        count++;
    }
  
  return count;
}

interface Task59 {
    a: string;
    b: string;
    expOut: number
}

const task59_Test1: Task59 = {a: 'abc', b: 'abccba', expOut: 2};
const task59_Test2: Task59 = {a: 'ba', b: 'abcbcb', expOut: 1};

console.log('expOut', task59_Test1.expOut, '| myOut', stringsConstruction(task59_Test1.a, task59_Test1.b));
console.log('expOut', task59_Test2.expOut, '| myOut', stringsConstruction(task59_Test2.a, task59_Test2.b));
