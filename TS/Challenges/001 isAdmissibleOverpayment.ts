function isAdmissibleOverpayment(prices: number[], notes: string[], x: number): boolean {
    let percentChange = getPriceChange(notes);
    let prices2: number[] = getAdjustedPrice(prices, percentChange)
    let accDiff: number = 0;
    for (let i = 0; i < prices.length; i++) {
        accDiff += prices[i] - prices2[i]
    }

    return accDiff <= x;
}

function getPriceChange(stringNotes: string[]): number[] {
    let percentagesArr: number[] = [];
    stringNotes.forEach(element => { 
        if (element.includes('higher')) {
            percentagesArr.push(Number(element.match(/[\d]+[\.][\d]*/g)) )
        }
        else if (element.includes('lower')) {
            percentagesArr.push(-Number(element.match(/[\d]+[\.][\d]*/g)))
        }
        else {
            percentagesArr.push(0)
        }
    });
    
    return percentagesArr;
}

function getAdjustedPrice(p: number[], c: number[]) {
    let adjustedPrices: number[] = []
    c.forEach((element, index) => {
        if (element > 0) {
            adjustedPrices.push((p[index] / (100 + element)) * 100);
        }
        else if (element < 0) {
            adjustedPrices.push((p[index] / (100 + element)) * 100)
        }
        else {
            adjustedPrices.push(p[index])
        }
    });

    return adjustedPrices;
}