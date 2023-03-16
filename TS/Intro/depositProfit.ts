function depositProfit(deposit: number, rate: number, threshold: number): number {
    let currentAmount: number = deposit;
    let yearsPassed: number = 0;

    //add interest rate to current amount and count years
    for (let i = 1; currentAmount < threshold; i++) {
        currentAmount = currentAmount + currentAmount * (rate / 100)
        yearsPassed++;
    }

    return yearsPassed;
}

let testDeposit: number = 100;
let testRate: number = 20;
let testThreshold: number = 170;

console.log(depositProfit(testDeposit, testRate, testThreshold));