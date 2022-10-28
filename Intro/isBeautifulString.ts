function isBeautiful(inputString: string): boolean {
    let stringArr: string[] = inputString.split('');
    let countedArr: number[] = [];

    //count all lowercase letters
    for (let i = 97; i < 123; i++) {
        let count: number = 0;
        const currentLetter: string = String.fromCharCode(i);
        if (stringArr.includes(currentLetter)) {
            stringArr.forEach(item => {
                if (item === currentLetter) {
                    	count++;
                }
            });
            
        }
        //store total times the letter exits in the string into an array
        countedArr.push(count);
    }
    return !countedArr.some((el, i, arr) => el - arr[i + 1] < 0);;
}


let isThisBeautiful: string = 'bbbaacdafe';     //a:3 b:3 c:1 d:1 e:1 f:1 => true
let isThisBeautiful2: string = 'aabbb';         //a:2 b:3 => false
let isThisBeautiful3: string = 'bbc';           //b:2 c:1 => true

console.log(isBeautiful(isThisBeautiful));
console.log(isBeautiful(isThisBeautiful2));
console.log(isBeautiful(isThisBeautiful3));
