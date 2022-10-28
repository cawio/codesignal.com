function firstReverseTry(arr: number[]): number[] {
    if (arr.length == 0) {
        return arr;
    }
    let start: number = arr[0];
    let end: number = arr[arr.length - 1];
    arr[0] = end;
    arr[arr.length - 1] = start; 

    return arr;
    // return arr.map((el, index) => index == 0 ? arr[arr.length - 1] : index == arr.length - 1 ? arr[0] : el);
}

