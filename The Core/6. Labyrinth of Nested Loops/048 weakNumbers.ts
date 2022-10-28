function weakNumbers(n: number): number[] {   //the weakness of a number is definded as the number of divisors smaller n, that have more divisors than n
        //i need to look at ranges 1 to n and for each of those numbers in range look at 1 to that number
    let divisorArr: number[] = [];
    let divisorAmount: number = 0;
    let weakness: number = 0;
    let weaknessCount: number = 0;
    for (let i = 1; i <= n; i++) {
        divisorAmount = 0;
        divisorArr[i - 1] = getDivisorCount(i);
        for (let j = 1; j < i; j++) {
            if (divisorArr[j - 1] > divisorArr[i - 1]) {
                divisorAmount++;
            }
        }
        if (divisorAmount === weakness) {
            weaknessCount++;
        } else if (divisorAmount > weakness) {
            weakness = divisorAmount;
            weaknessCount = 1;
        }
    }
   
    return [weakness, weaknessCount];
}

function getDivisorCount(n: number): number {
    let dCount: number = 0;
    for (let i = n; i > 0; i--) {
        if (n % i === 0) {
            dCount++;
        }
    }

    return dCount;
}

const task48_Test1: number = 9;
const task48_Test2: number = 1;
const task48_Test6: number = 4;
console.log(weakNumbers(task48_Test1));
console.log(weakNumbers(task48_Test2));
console.log(weakNumbers(task48_Test6));
