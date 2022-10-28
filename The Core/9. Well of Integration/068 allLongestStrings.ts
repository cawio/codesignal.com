function allLongestStrings(inputArray: string[]): string[] {
    let lStr: number = 0;
    inputArray.forEach((el: string) => {
        if (el.length > lStr) {
            lStr = el.length
        }
    });

    return inputArray.filter((el: string) => el.length === lStr);
}


console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));