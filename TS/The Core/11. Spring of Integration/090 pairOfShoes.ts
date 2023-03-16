function pairOfShoes(shoes: number[][]): boolean {
    let parisFound: boolean[] = []
    for (let i = 0; i < shoes.length; i++) {
        const shoe1Side: number = shoes[i][0];
        const shoe1Size: number = shoes[i][1];

        for(let j = 0; j < shoes.length; j++) {
            if (j === i || shoes[i].length === 0) {
                continue;
            }

            const shoe2Side: number = shoes[j][0];
            const shoe2Size: number = shoes[j][1];

            if (shoe1Side !== shoe2Side && shoe1Size === shoe2Size) {
                shoes[i] = [];
                shoes[j] = [];
                parisFound.push(true);
            }
        }
    }
    console.log(parisFound.length , shoes.length / 2)
    return parisFound.length === shoes.length / 2;
}

const task90Test1: number[][] = [[0, 21], [1, 23], [1, 21], [0, 23]];
const task90Test2: number[][] = [[0, 21], [1, 23], [1, 21], [1, 23]];
const task90Test6: number[][] = [[1, 2], [0, 2], [1, 1], [0, 1], [1, 2], [0, 1]];


console.log(pairOfShoes(task90Test1));
console.log(pairOfShoes(task90Test2));
console.log(pairOfShoes(task90Test6));