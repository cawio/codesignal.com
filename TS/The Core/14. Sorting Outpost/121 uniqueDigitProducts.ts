function uniqueDigitProducts(a: number[]): number {
    let uniqueProd: number[] = [];
    a.forEach((el: number) => {
        const digits = getDigits(el);
        const digitsProd: number = digits.reduce((prod: number, el: number) => {
            return prod * el
        }, 1);

        if (uniqueProd.every((el: number) => el !== digitsProd)) {
            uniqueProd.push(digitsProd);
        }
    });

    return uniqueProd.length;
}

function getDigits(n: number): number[] {
    let digits: number[] = [];
 
    while (n) {
        let r: number = n % 10;
        digits.push(r);
        n = Math.floor(n / 10);
    }

    return digits;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));