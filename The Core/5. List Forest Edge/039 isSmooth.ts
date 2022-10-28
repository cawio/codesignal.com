function isSmooth(arr: number[]): boolean {
    let halfLength = arr.length / 2
    let middle: number = 0;
    if (arr.length % 2 === 0) {
        middle = arr[halfLength - 1] + arr[halfLength];

    } else {
        middle = arr[Math.floor(halfLength)];
    }

    return arr[0] === middle && middle === arr[arr.length - 1];
}