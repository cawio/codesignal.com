function switchLights(a: number[]): number[] {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== 1) {
            continue;
        }

        let upperBound = i;
        for (let j = 0; j <= upperBound; j++) {
            if (a[j] === 0) {
                a[j] = 1;
            } else {
                a[j] = 0;
            }
        }
    }
    
    return a;
}

console.log(switchLights([1, 1, 1, 1, 1]));