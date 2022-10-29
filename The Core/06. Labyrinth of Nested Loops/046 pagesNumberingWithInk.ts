function pagesNumberingWithInk(current: number, printableDigits: number): number {
    let pageNumberLength: number = current.toString().length;
    printableDigits -= pageNumberLength;

    while (printableDigits >= pageNumberLength) {
        current++;
        if (current.toString().length > pageNumberLength) {
            pageNumberLength++;
        }
        printableDigits -= pageNumberLength;
    }

    return current;
}

interface Task46 {
    current: number;
    numberOfDigits: number;
    expOut: number
};

const task46_Test1: Task46 = {current: 1, numberOfDigits: 5, expOut: 5};
const task46_Test2: Task46 = {current: 21, numberOfDigits: 5, expOut: 22};
const task46_Test4: Task46 = {current: 21, numberOfDigits: 6, expOut: 23};
const task46_Test5: Task46 = {current: 10, numberOfDigits: 3, expOut: 10};
const task46_Test8: Task46 = {current: 9, numberOfDigits: 4, expOut: 10};

console.log('expOut', task46_Test1.expOut, '| myOut', pagesNumberingWithInk(task46_Test1.current, task46_Test1.numberOfDigits));
console.log('expOut', task46_Test2.expOut, '| myOut', pagesNumberingWithInk(task46_Test2.current, task46_Test2.numberOfDigits));
console.log('expOut', task46_Test4.expOut, '| myOut', pagesNumberingWithInk(task46_Test4.current, task46_Test4.numberOfDigits));
console.log('expOut', task46_Test5.expOut, '| myOut', pagesNumberingWithInk(task46_Test5.current, task46_Test5.numberOfDigits));
console.log('expOut', task46_Test8.expOut, '| myOut', pagesNumberingWithInk(task46_Test8.current, task46_Test8.numberOfDigits));