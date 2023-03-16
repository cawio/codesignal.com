function newNumeralSystem(number: string): string[] {
    const map: string[] = [];
    let charCode: number = 65;
    for (let i = 0; i < 26; i++) {
        map[i] = String.fromCharCode(charCode);
        charCode++;
    }
    
    const combinations: string[] = [];
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {        
            if (i + j !== map.indexOf(number)) {
                continue;
            }

            const tempComb: string = map[i].concat(' + ', map[j]);
            
            if (combinations.includes(tempComb) ||
                combinations.includes(tempComb.split('').reverse().join(''))) {
                continue;
            }

            combinations.push(tempComb);
        }
    }

    return combinations;
}

console.log(newNumeralSystem('G'), ["A + G", "B + F", "C + E", "D + D"]);