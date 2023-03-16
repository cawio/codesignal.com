function sortByHeight(a: number[]): number[] {
    const tree: number = -1;
    const heights: number[] = a.filter((el: number) => el !== tree).sort((a: number, b: number) => a - b);
    a.forEach((el: number, i: number, arr: number[]) => {
        if (el !== tree) {
            arr[i] = heights[0];
            heights.shift();
        }
    });
    
    return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));