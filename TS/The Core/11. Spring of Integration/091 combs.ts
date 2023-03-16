function combs(comb1: string, comb2: string): number {
    let minPurseLength: number = comb1.length + comb2.length
    for (let i = 2; i < comb2.length + comb1.length - 1; i++) {
        const c1: string = i < comb2.length ? comb1 : comb1.slice(i - comb2.length)
        const c2: string = i < comb1.length ? comb2.slice(comb2.length - i) : comb2
        const hit: boolean = toothHit(c1, c2)
        if(!hit) {
            const newLength = i <= comb1.length 
                ? Math.max(comb1.length + comb2.length - i, comb2.length, comb1.length)
                : i
                
            minPurseLength = Math.min(minPurseLength, newLength)
        }
    }
    
    return minPurseLength
}

function toothHit(comb1: string, comb2: string) {
    for(let i = 0; i < Math.min(comb1.length, comb2.length); i++) {
        if(comb1[i] === '*' && comb2[i] === '*') {
            return true
        }
    }
    return false
}

interface Task91 {
    c1: string;
    c2: string;
    expOut: number
}

const task91Test1: Task91 = {c1: '*..*', c2: '*.*', expOut: 5};
const task91Test3: Task91 = {c1: '*..*.*', c2: '*.***', expOut: 9};

console.log('expOut:', task91Test1.expOut, '| myOut', combs(task91Test1.c1, task91Test1.c2));
console.log('expOut:', task91Test3.expOut, '| myOut', combs(task91Test3.c1, task91Test3.c2));