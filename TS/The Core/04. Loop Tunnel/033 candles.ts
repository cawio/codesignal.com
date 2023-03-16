function candles(candlesNumber: number, makeNew: number): number {
    let canBurn: number = 0;
    let accLeftovers: number = 0;

    while (candlesNumber > 0) {
        canBurn++;
        candlesNumber--;
        accLeftovers++;
        if( accLeftovers == makeNew) {
            candlesNumber++;
            accLeftovers = 0;
        }
    }

    return canBurn;
}
