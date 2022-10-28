function minimalNumberOfCoins(coins: number[], price: number): number {
    coins = coins.reverse();

    let coinsUsed: number = 0;
    let token: number = 0;
    while (price > 0) {
        const coinValue: number = coins[token];
        while(price >= coinValue) {
            price -= coinValue;
            coinsUsed++;
        }
        token++;
    }

    return coinsUsed;
}

interface Task71 {
    coins: number[];
    price: number;
    expOut: number;
}

const task71Test1: Task71 = {coins: [1, 2, 10], price: 28, expOut: 6};

console.log('expOut', task71Test1.expOut, '| myOut', minimalNumberOfCoins(task71Test1.coins, task71Test1.price));