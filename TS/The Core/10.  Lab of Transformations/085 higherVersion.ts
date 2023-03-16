function higherVersion(ver1: string, ver2: string): boolean {
    if (ver1 === ver2) {
        return false;
    }

    if (parseInt(ver1.substring(0)) > parseInt(ver2.substring(0))) {
        return true;
    }

    const pattern: RegExp = /[\d]+/g;
    const ver1Filtered: RegExpMatchArray | null = ver1.match(pattern);
    const ver2Filtered: RegExpMatchArray | null = ver2.match(pattern);

    if (ver1Filtered === null || ver2Filtered === null) {
        return false;
    }

    console.log(ver1Filtered, ver2Filtered);

    // let result: boolean = true;
    // ver1Filtered.forEach((el: string, i: number) => {
    //     console.log(el, ver2Filtered[i]);
    //     const n1: number = parseInt(el);
    //     const prevN1: number = parseInt(ver1Filtered[i - 1]);
    //     const n2: number = parseInt(ver2Filtered[i]);
    //     const prevN2: number = parseInt(ver2Filtered[i - 1]);

    //     if (n1 < n2) {
    //             if (i > 0 && prevN1 <= prevN2) {
    //                 result = false;
    //             } else {
    //                 result = false;
    //             }
    //     }
    // });

    for (let i = 0; i < ver1Filtered.length; i++) {
        const n1: number = parseInt(ver1Filtered[i]);
        const prevN1: number = parseInt(ver1Filtered[i - 1]);
        const n2: number = parseInt(ver2Filtered[i]);
        const prevN2: number = parseInt(ver2Filtered[i - 1]);

        if (n1 < n2) {
            if (i > 0 && prevN1 <= prevN2) {
                return false;
            } 
            else if (i === 0){
                return false;
            }
        }
    }

    return true;
}

interface Task85 {
    v1: string;
    v2: string;
    expOut: boolean
}

// const task85Test1: Task85 = {v1: '1.2.2', v2: '1.2.0', expOut: true};
// const task85Test2: Task85 = {v1: '1.0.5', v2: '1.1.0', expOut: false};
const task85Test3: Task85 = {v1: '1.10.2', v2: '1.2.10', expOut: true};

// console.log('expOut', task85Test1.expOut, '| myOut', higherVersion(task85Test1.v1, task85Test1.v2));
// console.log('expOut', task85Test2.expOut, '| myOut', higherVersion(task85Test2.v1, task85Test2.v2));
console.log('expOut', task85Test3.expOut, '| myOut', higherVersion(task85Test3.v1, task85Test3.v2));
