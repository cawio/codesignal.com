function knapsackLight(value1: number, weight1: number, value2: number, weight2: number, maxW: number): number {
    if (weight1 + weight2 <= maxW) {
        return value1 + value2;
    }
    if (weight1 <= maxW && weight2 <= maxW) { 
        return Math.max(value1, value2);
    }
    if (weight1 <= maxW)
        return value1;
    if( weight2 <= maxW) {
        return value2;
    }

    return 0;
}

let value1:number = 10;
let weight1:number = 5;
let value2:number = 6;
let weight2:number = 4;
let maxW:number = 9;

console.log(knapsackLight(value1, weight1,value2, weight2, maxW));