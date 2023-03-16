function replaceMiddle(arr: number[]): number[] {
    if (arr.length % 2 == 0) {
        let halfLength = arr.length / 2
        let middle: number = 0;
        if (arr.length % 2 === 0) {
            middle = arr[halfLength - 1] + arr[halfLength];

        } else {
            middle = arr[Math.floor(halfLength)];
        }

        return arr.slice(0, halfLength - 1).concat(middle, arr.slice(halfLength + 1));
    }

   return arr;
}