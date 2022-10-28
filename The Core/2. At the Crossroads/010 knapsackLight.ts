function knapsackLight2(value1: number, weight1: number, value2: number, weight2: number, maxW: number): number {
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