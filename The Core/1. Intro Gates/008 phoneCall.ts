function phoneCall(min1: number, min2_10: number, min11: number, balance: number): number {
    if (min1 > balance) {
        return 0;
    }
    let accumulatedMinutes: number = 1;
    balance -= min1;
    for (let i = 1; balance >= min11; i++) {
        if (i < 10 && min2_10 > balance || i > 9 && min11 > balance) {
            return accumulatedMinutes;
        }
        if (i < 10) {
            accumulatedMinutes++;
            balance -= min2_10;
        } else {
            accumulatedMinutes++;
            balance -= min11;
        }
    }
    return accumulatedMinutes;
}

let firstMinuteRate1: number = 3;
let minuet2To10Rate1: number = 1;
let afterMinute10Rate1: number = 2;
let myBalance1: number = 20;

let firstMinuteRate2: number = 2;
let minuet2To10Rate2: number = 2;
let afterMinute10Rate2: number = 1;
let myBalance2: number = 2;

let firstMinuteRate3: number = 2;
let minuet2To10Rate3: number = 2;
let afterMinute10Rate3: number = 1;
let myBalance3: number = 24;

let firstMinuteRate4: number = 1;
let minuet2To10Rate4: number = 2;
let afterMinute10Rate4: number = 1;
let myBalance4: number = 6;

console.log(phoneCall(firstMinuteRate1, minuet2To10Rate1, afterMinute10Rate1, myBalance1));     //14
console.log(phoneCall(firstMinuteRate2, minuet2To10Rate2, afterMinute10Rate2, myBalance2));     //1
console.log(phoneCall(firstMinuteRate3, minuet2To10Rate3, afterMinute10Rate3, myBalance3));     //14
console.log(phoneCall(firstMinuteRate4, minuet2To10Rate4, afterMinute10Rate4, myBalance4));     //3