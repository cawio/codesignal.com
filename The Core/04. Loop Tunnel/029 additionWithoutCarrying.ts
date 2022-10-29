function additionWithoutCarrying(param1: number, param2: number): number {
    let revParam1: string = param1.toString().split('').reverse().join('');
    let revParam2: string = param2.toString().split('').reverse().join('');
    let smallerNumber: number = Math.min(param1, param2);
    let largerNumber: number = Math.max(param1, param2);

    let result: string[] = [];
    for (let i = 0; i < smallerNumber.toString().length; i++) {
        let tempSum: number = parseInt(revParam1.charAt(i)) + parseInt(revParam2.charAt(i));
        if (tempSum > 9) {
            result.unshift(tempSum.toString().charAt(1));
        } else {
            result.unshift(tempSum.toString());
        }
    }
    
    if (revParam1.length != revParam2.length) {
        result.unshift(largerNumber.toString().substring(0, Math.abs(revParam1.length - revParam2.length)));
    }

    return parseInt(result.join(''));
}

interface Task29 {
    param1: number,
    param2: number,
    expOut: number
};

const task29_Test1: Task29 = {
    param1: 456,
    param2: 1734,
    expOut: 1180
};

console.log('expOut', task29_Test1.expOut, '| myOut', additionWithoutCarrying(task29_Test1.param1, task29_Test1.param2));