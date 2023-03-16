function areIsomorphic(array1: number[][], array2: number[][]): boolean {
    if (array1.length !== array2.length) {
        return false;
    }

    // for (let i = 0; i < array1.length; i++) {
    //     if (array1[i].length !== array2[i].length) {
    //         return false;
    //     }
    // }

    return array1.every((el: number[], i: number) => el.length === array2[i].length);
}
