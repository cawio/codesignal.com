function regEx(inputString: string): boolean {
    return (/^([A-F\d]{2}-){5}[A-F\d]{2}$/).test(inputString);
}

let testMACx1: string = '00-1B-63-84-45-E6';
let testMACx2: string = 'Z1-1B-63-84-45-E6';
let testMACx3: string = 'not a MAC-48 address';
let testMACx4: string = '00-1B-63-84-45-E6';
let testMACx5: string = '00-00-00-00-00-00';
let testMACx6: string = 'G0-00-00-00-00-00';
let testMACx7: string = '02-03-04-05-06-07-';
let testMACx8: string = '12-34-56-78-9A-BC';
let testMACx9: string = 'FF-FF-AB-CD-EA-BC';
let testMACx0: string = '12-34-56-78-9A-BG';
let testMACx11: string = 'FF- F-AB-CD-EA-BC';


console.log('________\n');

console.log('result is:', regEx(testMACx1), 'expected to be true');
console.log('result is:', regEx(testMACx2), 'expected to be false');
console.log('result is:', regEx(testMACx3), 'expected to be false');
console.log('result is:', regEx(testMACx4), 'expected to be true');
console.log('result is:', regEx(testMACx5), 'expected to be true');
console.log('result is:', regEx(testMACx6), 'expected to be false');
console.log('result is:', regEx(testMACx7), 'expected to be false');
console.log('result is:', regEx(testMACx8), 'expected to be true');
console.log('result is:', regEx(testMACx9), 'expected to be true');
console.log('result is:', regEx(testMACx0), 'expected to be false');
console.log('result is:', regEx(testMACx11), 'expected to be false');
