function mostFrequentDigitSum(n: number): number {
    if (n < 10) {
        return n;
    }

    let sequence: number[] = [];
    let firstLoop: boolean = true;

    while (n > 0) {
        if (firstLoop) {
            sequence.push(sumDigits(n));
            firstLoop = false;
            
        }
        n = n - sumDigits(n);
        sequence.push(sumDigits(n));
    }

    let nAppearances: number[] = Array(Math.max(...sequence) + 1).fill(0);
    sequence.forEach((el: number) => {
        nAppearances[el] += 1;
    });

    return nAppearances.lastIndexOf(Math.max(...nAppearances));
}

function sumDigits(n: number): number {
    let sum: number = 0;

    while (n > 9) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    sum += n;

    return sum;
}

// console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(17));
// console.log(sumDigits(88));

