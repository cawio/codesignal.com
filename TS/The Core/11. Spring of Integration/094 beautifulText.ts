function beautifulText(inputString: string, l: number, r: number): boolean {
    const inputStringLength: number = inputString.length
    for(let i = l; i <= r; i++) {
        let j: number = i;
        while(j < inputStringLength) {
            if(inputString[j] !== ' ') {
                break;
            }
            j += i + 1;
        }

        if(j === inputStringLength) {
            return true;
        }
    }

    return false;
}

interface Task94 {
    iS: string;
    l: number;
    r: number;
    expOut: boolean
}

const task94Test1: Task94 = {iS: 'Look at this example of a correct text', l: 5, r: 15, expOut: true};
console.log('expOut', task94Test1.expOut, '| myOut', beautifulText(task94Test1.iS, task94Test1.l, task94Test1.r));
const task94Test2: Task94 = {iS: 'a a a a a a a a', l: 1, r: 10, expOut: true};
console.log('expOut', task94Test2.expOut, '| myOut', beautifulText(task94Test2.iS, task94Test2.l, task94Test2.r));
