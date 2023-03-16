function sumUpNumbers(inputString: string): number {
    let allTheNumbers: string[] =  Object.values(getAllNumbers(inputString));
    let sum = 0;
    allTheNumbers.map(elem => {
        sum += Number(elem)}
    );

    return sum;
}

function getAllNumbers(s: string): any {
    if (s.match(/[\d]+/g) == null) {
        return 0;
    }
    return s.match(/[\d]+/g);
}

let sumTest1: string = '2 apples, 12 oranges';
let sumTest2: string = 'Your payment method is invalid';

// console.log(getAllNumbers(sumTest1));
console.log(sumUpNumbers(sumTest1));
console.log(sumUpNumbers(sumTest2));
